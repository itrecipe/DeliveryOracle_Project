import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../apis/api.js'
import * as auth from '../../apis/auth.js';
import { useContext } from "react";
import { AdminFlagContext } from "../../flag/Flag.jsx";
import { useCookies } from 'react-cookie';
import Header from '../../component/main/Header.jsx';
import Footer from '../../component/common/Footer.jsx';
const RiderUserLogin = () => {
    const {user,setUser}=useContext(AdminFlagContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['jwtToken']);
    const loginClick = async(e) => {
        e.preventDefault();

        try{
        const rs=await api.post(`http://localhost:8080/loginRider?email=${email}&password=${password}`)
        const data=rs.data
        const headers=rs.headers
        // console.log(headers.authorization.replace("Bearer ",""))
        if (rs.status==200){

            //토큰으로 저장
            // setCookie('jwtToken', headers.authorization.replace("Bearer ",""), { path: '/', maxAge: 100 }); // 쿠키 유효 기간을 설정
            //플래그에 유저 인증 jwt 토큰 저장
            setUser(headers.authorization.replace("Bearer ",""))

            navigate("/RiderMain")
        }
        else if (rs.status==207){
            alert("권한이 없습니다")
            navigate("/RiderMain")
        }    }catch(e){
            console.log("로그인오류",e)
            if(e.response.status==401){
                alert("id,pw 일치 하지 않음")
            }
            else if(e.response.status==402){
                alert('id가 존재하지 않습니다')
            }
        }
    }

    return (
        <div>
            <Header/>
            <div id="main_container3">
                <div className="form_container">
                    <div className="form">
                        <form action="#">
                            <p className="login_user_name">
                                <label htmlFor="user_name">아이디(이메일):</label>
                                <input type="text" id="user_name" onChange={(e) => setEmail(e.target.value)} />
                            </p>

                            <p className="login_user_password">
                                <label htmlFor="user_password">비밀번호:</label>
                                <input type="password" id="user_password" onChange={(e) => setPassword(e.target.value)} />
                            </p>

                            <input type="submit" id="submit_btn" value="로그인" className="submit_btn" onClick={loginClick} />
                        </form>
                    </div>

                    <div className="bottom_box">
                        <div>
                            <span>아이디가 없으신가요?</span><a href="/RiderUserJoin">회원가입</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default RiderUserLogin;
