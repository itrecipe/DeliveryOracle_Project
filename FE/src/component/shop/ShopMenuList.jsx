import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopMenuList = ({ menu, onDelete }) => {
    const navigate = useNavigate();

    const editButton = () => {
        navigate("/ShopMenuedit", { state: { menu: menu } });
    }

    const delButton = async () => {
        try {
            const rs = await axios.delete("http://localhost:8080/store/menuedel", {
                params: { id: menu.storeId, name: menu.menuName }
            });
            if (rs.data === 1) {
                onDelete(menu.menuName);
            }
        } catch (e) {
            console.log("실패", e);
        }
    }

    return (
        <Card className="shadow-sm h-100">
            <Card.Img variant="top" src={`/imgs/${menu.menuImage}`} />
            <Card.Body>
                <Card.Title>{menu.menuName}</Card.Title>
                <Card.Text>Price: {menu.menuPrice}원</Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={editButton}>수정</Button>
                    <Button variant="danger" onClick={delButton}>삭제</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ShopMenuList;
