import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/search.css';
import { Link, useNavigate } from 'react-router-dom';

  const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();  
    const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault(event);
    navigate("/UserSearchList",{state : {searchTerm:searchTerm}})
  };

  return (
    <div>
      <Container className="search-container">
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            <Button variant="link" className="p-0">
              <i className="bi bi-arrow-left"></i>
            </Button>
          </Col>
          <Col>
            <Form className="d-flex" onSubmit={handleSearch}>
                
              <Form.Control
                type="search"
                placeholder="식당을 입력해주세요"
                className="me-2 search-input"
                aria-label="Search"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;