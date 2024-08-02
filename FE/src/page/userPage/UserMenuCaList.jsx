import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserMenuCa from '../../component/user/UserMenuCa.jsx';
import Header from '../../component/common/Header.jsx';
import Footer from '../../component/common/Footer.jsx';
import './UserMenu.css';
import TabMenu from '../../component/common/TabMenu.jsx';
import { useWebSocket } from "../../flag/WebSocketContext.jsx";

const UserMenuCaList = () => {

    const location = useLocation();
    const caInfo = location.state?.ca || -1; // 카테고리 정보
    const y = location.state?.y;
    const x = location.state?.x;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { stompClient, messages, setMessages, connected, setMessages2,messages2 } = useWebSocket();
    const navigate = useNavigate();
    const [shopStates, setShopStates] = useState({});
    const [currentCheck, setCurrentCheck] = useState(null);

    useEffect(() => {

        console.log("x", x)
        
        const fetchData = async () => {
            try {
                const rs = await axios.get("http://localhost:8080/search/CaList", {
                    params: { canum: caInfo, x: x, y: y }
                });

                const initialShopStates = {};
                for (const item of rs.data) {
                    initialShopStates[item.owner_id] = false;
                }
                setShopStates(initialShopStates);
                setData(rs.data);
            } catch (e) {
                setError("연결실패");
                console.log("연결실패", e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [caInfo, x, y]);

    //음식점이 열려있는지 확인하는 절차
    useEffect(() => {
        const checkAllShops = async () => {
            for (let i = 0; i < data.length; i++) {
               const rs= await check(data[i]);
               console.log("값",rs)
               if (rs=='t'){
                console.log("존재함")
               setShopStates((prev) => ({
                ...prev,
                [data[i].owner_id]: true,
            }));}
            }
        };
        if (data.length > 0) {
            console.log("for문동작시작")
            checkAllShops();
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const handleSearch = (term) => {
        setSearchTerm(term);
        console.log('검색어:', term);
    };

    const check = async (array) => {
        
        setCurrentCheck(array);

        try {
            const rs = await axios.get("http://localhost:8080/search/emailTrue", {
                params: { id: array.owner_id }
            });
            return rs.data
        } catch (e) {
            setError("연결실패");
            console.log("연결실패", e);
            return "e";
        }
    };

    const check2=(value,array)=>{
       
        if (value){
            navigate("/UserShopDetail", { state: { data: array } });
        }
        else{
            alert("열려있지않습니다")
        }
    }

    return (
        <div>
            <Header />
            <TabMenu />
            <div className="container-custom"  style={{ margin: '20px' }}>

                <p className="store-count">음식점 <span className="pd3">{data.length}곳</span>을 찾았습니다.</p>
                
                <div className="big-column row">
                    {data.reduce((acc, da, index) => {
                        if (index % 2 === 0) {
                            acc.push([]);
                        }
                        acc[acc.length - 1].push(da);
                        return acc;
                    }, []).map((itemGroup, groupIndex) => (
                        <div className="row" key={groupIndex}>
                            {itemGroup.map((item, index) => (
                                <div className="col-md-6 mb-4" key={index} onClick={() => check2(shopStates[item.owner_id],item)}>
                                    <UserMenuCa data={item} shop={shopStates[item.owner_id]} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default UserMenuCaList;