import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../Component/ProductCard';

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let search = query.get('q') || '';
    console.log('쿼리값은', search);
    await fetch(`https://my-json-server.typicode.com/duddnr787/practiceHnM/products?q=${search}`)
    .then (res => res.json())
    .then (data => setProductList(data));
  }
  useEffect(()=>{
    getProduct();
  },[query])
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