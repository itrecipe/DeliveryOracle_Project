import React, { useEffect, useState } from 'react';
import Header from '../../component/rider/headside/Header.jsx';
import Sidebar from '../../component/rider/headside/Sidebar.jsx';
import { useContext } from "react";
import { AdminFlagContext } from "../../flag/Flag.jsx";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import RiderCallList from '../../component/rider/RiderCallList.jsx';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useWebSocket  } from "../../flag/WebSocketContext.jsx";
import { Link, useNavigate } from 'react-router-dom';

//샵 메뉴 참조
const RiderCall = () => {

    const {user,setUser,userId,setUserId,shopId,setShopId,user_x,setX,user_y,setY}=useContext(AdminFlagContext)
    const [orderData,setOrderData]=useState([])
    const navigate = useNavigate();    
    const[data,setData]=useState([])
    const { stompClient, messages, sendMessage,setMessages } = useWebSocket();
    const orderList = async () => {

        try {
            const response = await axios.get('http://localhost:8080/rider/order', {
                params: { x:user_x,y:user_y}
            });
            console.log(response.data)
            setOrderData(response.data)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        if (!user_x){
            alert("로그인해주세요")
            navigate("/")
        }

        orderList();
    },[])

    useEffect(() => {
        const handleMesUpdate = async () => {
            console.log("클릭")
            if (messages.content === "true") {
                console.log(messages.content)

                const orderData = {
                    orderId: data.orderId,
                    storeId: data.storeId,
                    storeName: data.storeName,
                    storeOwnerEmail: data.storeOwnerEmail,
                    riderId:userId,
                    distanceToStore:data.distanceToStore,
                    distanceToUser:data.distanceToUser,
                    deliveryPrice:data.deliveryPrice,
                    user_x:data.user_x,
                    user_y:data.user_y,
                    store_x:data.store_x,
                    store_y:data.store_y

                };

                try {
                    const response = await axios.post('http://localhost:8080/rider/call', orderData);
                    console.log('Order response:', response.data);
                    if (response.data == 1) {
                        orderList();
                        setMessages("")
                        alert("배달 등록");
                    }
                } catch (error) {
                    console.error('Order error:', error);
                }
            }
        };

        if (messages.content) {
            handleMesUpdate();
        }
    }, [messages]);

    const handleOrder = async (s) => {
        if (stompClient) {
            setData(s)
            //from 에 나중에 이 상점 주인 아이디를 넣어야 하는데 이때 앞에서 상점 주인 아이디(이메일)까지 받아와야한다.
            stompClient.send('/app/sendMessage', {}, JSON.stringify({ from: s.storeOwnerEmail, content: "message" }));
        }
    };

    return (
        <div>
        <Header />
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar/>
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                    <h1>CALL</h1>
                    {orderData.reduce((acc, order, index) => {
                            if (index % 4 === 0) {
                                acc.push([]);
                            }
                            acc[acc.length - 1].push(order);
                            return acc;
                        }, []).map((orderGroup, groupIndex) => (
                            <div id="main_container" key={groupIndex}>
                                {orderGroup.map((order, index) => (
                                    <RiderCallList key={index} order={order} handleOrder={handleOrder}/>
                                ))}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default RiderCall;