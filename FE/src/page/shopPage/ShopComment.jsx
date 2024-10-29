import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../component/shop/headside/Header.jsx';
import Sidebar from '../../component/shop/headside/Sidebar.jsx';
import ShopJoin from './ShopJoin.jsx';
import ShopMenu from './ShopMenu.jsx';
import { useContext } from "react";
import { AdminFlagContext } from "../../flag/Flag.jsx";
import ShopCommentList from '../../component/shop/ShopCommentList.jsx';
import Footer from '../../component/common/Footer.jsx';

const ShopComment = () => {
    const navigate = useNavigate();    
    const [comments,setComments]=useState([])
    const [check,setCheck]=useState(false)
    const {user,setUser,userId,setUserId,shopId,setShopid}=useContext(AdminFlagContext)

    useEffect(()=>{
        if(!userId){
            navigate("/")
        }
    
        //댓글 목록조회 상점 아이디 기반으로 
        const commentList=async()=>{
            try{
                const rs=await axios.get("http://localhost:8080/store/commentList", {
                    params: { storeid: shopId }
                });

                if (rs.status==200){
                    console.log(rs.data)
                    setComments(rs.data)
                }
            }catch(e){
                console.log("댓글불로오기 실패",e)
            }
        }
        commentList();
    },[check])

    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar/>
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div style={{ margin: '20px' }}>
                    {comments.map((array,index)=>(
                        <ShopCommentList array={array} setCheck={setCheck} index={index}/>
                    ))}</div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ShopComment;