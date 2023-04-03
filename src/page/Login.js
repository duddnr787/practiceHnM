import React from 'react';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-wrap'>
        <input type="text" placeholder='로그인'/>
        <input type="password" placeholder='비밀번호'/>
        <button>로그인</button>
      </div>
    </div>
  );
};

export default Login;