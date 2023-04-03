import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../Component/ProductCard';

const Product = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    await fetch('http://localhost:5000/products')
    .then (res => res.json())
    .then (data => setProductList(data));
  }
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={4}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Product;