import React, { useEffect, useState } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserShopDetailMenu from '../../component/user/UserShopDetailMenu.jsx';
import { useContext } from "react";
import { AdminFlagContext } from "../../flag/Flag.jsx";
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import TabMenu from '../../component/common/TabMenu.jsx';
import Header from '../../component/common/Header.jsx';
import { useWebSocket  } from "../../flag/WebSocketContext.jsx";
import './UserShopDetail.css'
import PaySection from './PaySection.jsx';
import Footer from '../../component/common/Footer.jsx';

const UserShopDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let datas = location.state.data || -1;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [basket, setBasket] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { user, setUser, user_x, setX, user_y, setY,userId } = useContext(AdminFlagContext);
    const [mes, setMes] = useState("");
    const [useid, setUseid] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const { stompClient, messages, sendMessage, setMessages, connected } = useWebSocket();
    const [check,setCheck]=useState(false)
    const [showModal, setShowModal] = useState(false); // 추가 : 모달 표시 여부를 관리하는 상태

    useEffect(() => {
        const fetchData = async () => {
            console.log(datas.store_id);
            try {
                const rs = await axios.get("http://localhost:8080/search/menuList", {
                    params: { id: datas.store_id }
                });
                setData(rs.data);
                console.log(rs.data);
            } catch (e) {
                setError("연결실패");
                console.log("연결실패", e);
            } finally {
                setLoading(false);
            }
        };

        const emailData = async () => {
            try {
                const rs = await axios.get("http://localhost:8080/search/email_shop", {
                    params: { id: datas.owner_id }
                });
                setEmail(rs.data);
                console.log("이메일탐색", rs.data);
            } catch (e) {
                setError("연결실패");
                console.log("연결실패", e);
            } finally {
                setLoading(false);
            }
        };

        const usedata = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/api/userinfo', {
                    headers: {
                        Authorization: `Bearer ${user}`
                    }
                });
                console.log(response.data);
                console.log(response.data.user_id);
                setUseid(response.data.user_id);
                setUserName(response.data.email);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        usedata();
        emailData();
    }, [datas]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const price = basket.reduce((sum, item) => sum + item.menuPrice * item.quantity, 0);
            setTotalPrice(price);
        };

        calculateTotalPrice();
    }, [basket]);

    useEffect(() => {
        const handleMesUpdate = async () => {
            if (messages.content === "true" && totalPrice>0) {
                console.log(messages.content);
                const orderDetails = JSON.stringify(basket);
                console.log("주문클릭");

                const orderData = {
                    id:userId,
                    price:-totalPrice,
                    customerId: useid,
                    storeId: datas.store_id,
                    orderDetails: orderDetails,
                    totalPrice: totalPrice,
                    user_x: user_x,
                    user_y: user_y
                };

                try {
                    const response = await axios.post('http://localhost:8080/account/pay', orderData);
                    console.log('Order response:', response.data);
                    if (response.data == "SUCCESS") {
                        setCheck(false)
                        alert("주문 성공");
                        navigate('/UserMain');
                    }
                    else if(response.data=="Insufficient balance"){
                        alert("잔액이 부족합니다")
                        navigate('/MypageMain');
                    }
                    else if(response.data=="Order failed"){
                        alert("주문에 실패함")
                        navigate('/UserMain');
                    }
                } catch (error) {
                    console.error('Order error:', error);
                }
            } else {
                console.log("주문 실패");
                setMessages("");
            }
        };

        if (messages.content) {
            handleMesUpdate();
        }
    }, [messages, basket, datas.store_id, totalPrice, useid]);

    //주문 계좌 연결하기
    useEffect(() => {
        const orderAccount = async () => {

             try {
                    const response = await axios.put('http://localhost:8080/account/pay', {id:userId,price:-totalPrice});
                    console.log('Order response:', response.data);
                    if (response.data == "SUCCESS") {
                        setCheck(false)
                        alert("주문 성공");
                        navigate('/UserMain');
                    }
                    else if(response.data=="Insufficient balance"){
                        alert("잔액이 부족합니다")
                        navigate('/UserMain');
                    }
                } catch (error) {
                    console.error('Order error:', error);
                }
            } 

        if(check){
            console.log("계좌연결시도")
            orderAccount();
        }
    }, [check]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const handlePlus = (add) => {
        setBasket((prevBasket) => {
            const existingItem = prevBasket.find(menu => menu.menuName === add.menuName);
            if (existingItem) {
                return prevBasket.map(menu =>
                    menu.menuName === add.menuName ? { ...menu, quantity: menu.quantity + 1 } : menu
                );
            } else {
                const { menuName, menuPrice } = add;
                return [...prevBasket, { menuName, menuPrice, quantity: 1 }];
            }
        });
    };

    const increaseQuantity = (menuName) => {
        console.log("증가");
        setBasket((prevBasket) =>
            prevBasket.map(menu =>
                menu.menuName === menuName ? { ...menu, quantity: menu.quantity + 1 } : menu
            )
        );
    };

    const decreaseQuantity = (menuName) => {
        console.log("감소");
        setBasket((prevBasket) =>
            prevBasket.map(menu =>
                menu.menuName === menuName ? { ...menu, quantity: menu.quantity - 1 } : menu
            ).filter(menu => menu.quantity > 0)
        );
    };

    const handleOrder = async () => {
        console.log("유저아이디", username);
        if (!user) {
            alert("로그인 해주세요");
            return;
        }
        if (connected) {
            stompClient.send('/app/sendMessage', {}, JSON.stringify({ from: email, content: "message" }));
        } else {
            alert("잘못된접근입니다.");
            navigate('/UserMain');
        }
    };

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div>
            <Header />
            <TabMenu />
            <div className='mv' style={{ minHeight: '58vh'}}>
                <div className="container">
                    <div className="left-sections">
                        <div className="section" id="a">
                            <div className="item-card">
                                <div className="item-image">
                                    <img src={`/imgs/${datas.store_image}`} width="70" alt="Store" />
                                </div>
                                <div className="item-info">
                                    <p>{datas.store_name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="section" id="b">
                            <Nav fill variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="#"><Link to={`/UserShopDetail`} state={{ data: datas }}>메뉴</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1"><Link to={`/UserShopComment`} state={{ data: datas }}>댓글</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2"><Link to={`/UserShopIntroduce`} state={{ data: datas }}>매장소개</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            {data && data.map(array => (
                                <UserShopDetailMenu key={array.menuName} data={array} plus={handlePlus} />
                            ))}
                        </div>
                    </div>
                    <div className="section" id="c">
                        <div className="basket-header bg-primary text-white p-2"><strong>장바구니</strong></div>
                        <div className="basket-body p-3">
                            {basket.map((array) => (
                                <div className="basket-item mb-3" key={array.menuName}>
                                    <div className="item-name">{array.menuName}</div>
                                    <div className="item-actions d-flex justify-content-between align-items-center mt-2">
                                        <div className="item-price ml-auto">{array.menuPrice}원</div>
                                        <button className="btn btn-sm btn-outline-secondary" onClick={() => decreaseQuantity(array.menuName)}>-</button>
                                        <span className="quantity mx-2">{array.quantity}</span>
                                        <button className="btn btn-sm btn-outline-secondary" onClick={() => increaseQuantity(array.menuName)}>+</button>
                                    </div>
                                </div>
                            ))}
                            <div className="total-price text-right"><div className="total-price"><strong>합계 :</strong> {totalPrice}원</div>
                            </div>
        
                        </div>
                        <div className="order-button text-center">
                            <button className="btn btn-primary btn-lg" onClick={handleShowModal}><strong>결제하기</strong></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

            <PaySection
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleOrder={handleOrder}
                totalPrice={totalPrice}
            />
        </div>
    );
};

export default UserShopDetail;