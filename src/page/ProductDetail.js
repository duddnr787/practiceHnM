import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [isListHover, setIsListHover] = useState(true);
  const getProductDetail = async () => {
    await fetch(`https://my-json-server.typicode.com/duddnr787/practiceHnM/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data));
  }
  useEffect(()=>{
    getProductDetail();
  },[])
  return (
    <Container className='product-container'>
      <Row>
        <Col className='product-img'>
          <img src={isListHover === true ? product?.img : product?.img2 } onMouseOver={() => setIsListHover(false)} onMouseOut={() => setIsListHover(true)} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩ {product?.price}</div>
          <span>Conscious choice</span>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택" >
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
          <Button variant="secondary" className='product-btn'>추가</Button>
        </Col>
      </Row> 
    </Container>
  );
};

export default ProductDetail;