import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

    //메뉴 추가 페이지
    const ShopMenuRs = () => {
    
    const location = useLocation();
    
    //상점 아이디 값
    const approvalStatus = location.state?.approvalStatus;

    const navigate=useNavigate()

    //메뉴 이름
    const [name,setName]=useState("")
    
    //메뉴 가격
    const [price,setPrice]=useState("")
    
    //메뉴 이미지
    const [img,setImg]=useState(null)

    const buttonClick=async(e)=>{
        e.preventDefault()
        
        const formData = new FormData();
        formData.append("name",name)
        formData.append("price",price)
        formData.append("img",img)
        formData.append("shopid",approvalStatus)
        
        try{
            const rs=await axios.post("http://localhost:8080/store/menuRs", formData)
            
            if(rs.status==200){

                if(rs.data==1){
                    navigate("/ShopMain")
                }
                else{
                    alert("내용을 수정해주세요 같은 메뉴가 존재하거나 잘못된 입력을 하셨습니다.")
                }
            }
        }catch(e){
            console.log("등록실패",e)
        }
    }

    return (
        <div id="main_container">
        <div class="shop_container">
        <div class="form">

            <form action="#">
                <p class="shop_name">
                    <label for="shop_name">메뉴이름</label>
                    <input type="text" id="shop_name"  onChange={(e)=>setName(e.target.value)}/>
                </p>

                <p class="shop_name">
                    <label htmlFor="shop_name">메뉴가격</label>
                        <input 
                        type="text" 
                        id="shop_name"  
                        onChange={(e)=>setPrice(e.target.value)}
                        onKeyDown={(e) => {
                           
                            // 허용되는 키 코드: 0~9, 백스페이스(8), 화살표(37~40), 탭(9)
                            const allowedKeys = /[0-9,"Backspace"\b]/;
                            if (!allowedKeys.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                    />
                </p>
                <p class="shop_img">
                    <label for="shop_img">메뉴이미지</label>
                    <input type="file" required="required/" accept="image/*" onChange={(e)=>setImg(e.target.files[0])}/>
                </p>
                <div className="d-grid gap-2">
                <Button variant="primary" type="submit" id="submit_btn" class="submit_btn" onClick={buttonClick} >등록하기</Button>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
};

export default ShopMenuRs;