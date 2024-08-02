import React, { useEffect, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AdminFlagContext } from "../../../flag/Flag.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const { user, setUser, userDate } = useContext(AdminFlagContext);
    const navigate = useNavigate();

    const userlogin = (e) => {
        e.preventDefault();
        navigate("/RiderUserLogin");
    };

    const userjoin = (e) => {
        e.preventDefault();
        navigate("/RiderUserJoin");
    };

    const userlogout = (e) => {
        e.preventDefault();
        setUser(null);
        window.location.href = "/RiderMain";
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
             <Link to="/" className="navbar-brand">
                        <img src="/asset/logo.png" alt="Delivery.Oracle" />
                    <div className="header-title">
                        <span className="line">Delivery</span>
                        <span className="line">Oracle</span>
                    </div>
                </Link>
            <Container>
                <Nav className="justify-content-center flex-grow-1"> {/* 중앙 정렬 클래스 추가 */}
                    <Navbar.Brand as={Link} to="/RiderMain" className="brand">
                        라이더 페이지
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {user ? (
                            <NavDropdown title="User Menu" id="user-menu-dropdown" alignRight>
                                <NavDropdown.Item as={Link} to="/RiderMyPage">Profile</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/RiderMyPagemodify">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={userlogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Form className="d-flex">
                                <Button onClick={userlogin} className="me-2">로그인</Button>
                                <Button onClick={userjoin}>회원가입</Button>
                            </Form>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
