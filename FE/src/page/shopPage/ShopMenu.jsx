import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ShopMenuList from '../../component/shop/ShopMenuList.jsx';
import Header from '../../component/shop/headside/Header.jsx';
import Sidebar from '../../component/shop/headside/Sidebar.jsx';
import { AdminFlagContext } from "../../flag/Flag.jsx";

const ShopMenu = () => {

    const { userId, role } = useContext(AdminFlagContext);
    const location = useLocation();
    const approvalStatus = location.state?.approvalStatus || -1;
    const navigate = useNavigate();
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const rs = await axios.get("http://localhost:8080/store/menulist", {
                    params: { shopid: approvalStatus }
                });
                if (rs.status === 200) {
                    setMenus(rs.data);
                }
            } catch (e) {
                console.log("연결실패", e);
            }
        };

        fetchData();

    }, [approvalStatus]);

    const shopRS = (e) => {
        e.preventDefault();
        navigate("/ShopMenuRs", { state: { approvalStatus: approvalStatus } });
    };

    const handleDelete = (menuName) => {
        setMenus((prevMenus) => prevMenus.filter(menu => menu.menuName !== menuName));
    };

    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar id={userId} />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div className="d-flex justify-content-end mb-3" style={{ margin: '25px'}}>
                            <Button variant="success" onClick={shopRS}>메뉴추가하기</Button>
                        </div>
                        <Row>
                            {menus.map((menu, index) => (
                                <Col md={3} className="mb-4" key={index}>
                                    <ShopMenuList menu={menu} onDelete={handleDelete} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShopMenu;
