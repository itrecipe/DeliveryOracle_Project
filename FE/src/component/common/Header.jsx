import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Search from './Search';
import UserInfo from './UserInfo';
import { Link, useNavigate } from 'react-router-dom';
import { AdminFlagContext } from "../../flag/Flag.jsx";
import axios from 'axios';
import '../../css/Header.css';

const Header = () => {

    const { role, setRole,user,setUser,userDate,setUserDate,userId,setUserId,shopId,setShopid,user_x,setX,user_y,setY,userInfo,setUserInfo} = useContext(AdminFlagContext);
    const navigate = useNavigate();  
    
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/api/userinfo', {
                    headers: {
                        Authorization: `Bearer ${user}`
                    }
                });
                console.log(response.data);
                setUserId(response.data.user_id)
                setUserInfo(response.data)
                if(response.data.authList[0].auth!="ROLE_USER"){
                    window.location.href = "/UserMain";
                }
            } catch (error) {
                console.log(error);
            }
        };

        if(user!=null){

        fetchUserInfo();
        }
    }, [user]);
    
    const userlogin=(e)=>{
        e.preventDefault()
        navigate("/UserLogin")
    }

    const userjoin=(e)=>{
        e.preventDefault()
        navigate("/UserJoin")
    }

    const userlogout=(e)=>{
        e.preventDefault()
        setUser(null)
        window.location.href = "/UserMain";
    }

    return (
        
        <Navbar expand="xl" className="navbar">
            <Container>
                <Link to="/" className="navbar-brand">
                        <img src="/asset/logo.png" alt="Delivery.Oracle" />
                    <div className="header-title">
                        <span className="line">Delivery</span>
                        <span className="line">Oracle</span>
                    </div>
                </Link>
                <Search/>
                <Form className="d-flex">
                    {user==null&&
                    <div>
                    <Button onClick={userlogin} className="me-2">로그인</Button>
                    <Button onClick={userjoin}>회원가입</Button></div>}
                    {user&& <Button onClick={userlogout}>로그아웃</Button>}
                </Form>
                {user&&
                <UserInfo />}
            </Container>
        </Navbar >

    );
};

export default Header;