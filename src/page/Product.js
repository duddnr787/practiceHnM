import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../Component/ProductCard';
import {productAction} from '../redux/actions/productAction';


const Product = () => {
  const dispatch = useDispatch();
  let productList = useSelector(state=>state.productList);
  const [query, setQuery] = useSearchParams();

  const getProduct = () => {
    let search = query.get('q') || ''; // '' 초기값 설정 
    dispatch(productAction.getProducts(search)); //미들웨어 거쳐서 가기 위한 dispatch
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