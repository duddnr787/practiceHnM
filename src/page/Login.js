import React, { useState } from 'react';
import { Button,Container,Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let count = useSelector(state=>state.count);

  const loginUser = (e) => {
    e.preventDefault();
    dispatch({type:'LOGINLOGOUT', payload:true});
    navigate('/');
  }
  const increase = () => {
    dispatch({type:'INCREMENT', payload: {num:5} });
  }
  const decrease = () => {
    dispatch({type:'DECREMENT', payload: {num:5} });
  }

  return (
    <Container >
      <Form onSubmit={(e) => loginUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit" >
        로그인
      </Button>
      <Button onClick={increase}>
        +1
      </Button>
      <Button onClick={decrease}>
        -1
      </Button>
      <div>{count}</div>
    </Form>
    </Container>
  );
};

export default Login;