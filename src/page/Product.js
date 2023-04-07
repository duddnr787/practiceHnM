import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../Component/ProductCard';

const Product = () => {
  const dispatch = useDispatch();
  let productList = useSelector(state=>state.productList);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let search = query.get('q') || ''; // '' 초기값 설정 
    await fetch(`https://my-json-server.typicode.com/duddnr787/practiceHnM/products?q=${search}`)
    .then (res => res.json())
    .then (data => dispatch({type:'PRODUCT', payload: {data:(data)} }));
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