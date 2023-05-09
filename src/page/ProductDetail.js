import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  const dispatch = useDispatch();
  let {id} = useParams();
  const [isListHover, setIsListHover] = useState(true);
  const product = useSelector((state)=>state.product.selectedItem);

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };
  useEffect(()=>{
    getProductDetail();
  },[id])

  console.log(product);
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