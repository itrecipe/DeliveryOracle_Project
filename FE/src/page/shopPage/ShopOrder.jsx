import React, { useState, useEffect, useContext } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import axios from 'axios';
import { AdminFlagContext } from "../../flag/Flag.jsx";
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../component/shop/headside/Header.jsx';
import Sidebar from '../../component/shop/headside/Sidebar.jsx';
import ShopOrderList from '../../component/shop/ShopOrderList.jsx';
import { useWebSocket  } from "../../flag/WebSocketContext.jsx";

const ShopOrder = () => {

    const [message, setMessage] = useState('');
    const [mes, setMes] = useState([]);
    const [name, setName] = useState("");
    const [names, setNames] = useState("user123");
    const { user, setUser, userId, setUserId, shopId, setShopid } = useContext(AdminFlagContext);
    const { stompClient, messages, sendMessage } = useWebSocket();

    //주문 정보
    const[order,setOrder]=useState()

    useEffect(() => {

        console.log("실행")
        
        const fetchData = async () => {
        
            console.log("상점",shopId)

            try {
                const rs = await axios.post("http://localhost:8080/store/order", { storeId: shopId });
                if (rs.status === 200) {
                    console.log(rs.data);
                    setOrder(rs.data)
                    if (rs.data) {
                        // 응답 데이터 처리
                    } else {
                        console.log("없음");
                    }
                }
            } catch (e) {
                console.log("연결실패", e);
            }
        };

        const timer = setTimeout(() => {
            fetchData();
          }, 450);
      
          // 컴포넌트가 언마운트될 때 타이머를 정리
          return () => clearTimeout(timer);

    }, [messages]); // 'mes'가 변경될 때마다 이 효과 실행

    const hsendMessage = () => {
        if (stompClient) {
            stompClient.send('/app/sendMessage', {}, JSON.stringify({ from: name, content: message }));
            setMessage('');
        }
    };

    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        
                    {order&&order.reduce((acc, menu, index) => {
                            if (index % 4 === 0) {
                                acc.push([]);
                            }
                            acc[acc.length - 1].push(menu);
                            return acc;
                        }, []).map((menuGroup, groupIndex) => (
                            <div id="main_container" key={groupIndex}>
                                {menuGroup.map((menu, index) => (
                  
                                    <ShopOrderList key={index} menu={menu} />
                                ))}
                            </div>
                        ))}

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShopOrder;