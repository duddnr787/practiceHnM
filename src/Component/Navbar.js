import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성'];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let authenticate = useSelector(state=>state.authenticate);
  console.log(authenticate);
  const search = (e) => {
    if(e.key === 'Enter'){
      let keyword = e.target.value; //input 안에 있는 검색 값을 가져오고 싶을 때는 
      navigate(`/?q=${keyword}`)
    }
  }
  const Logout = () => {
    dispatch({type:'LOGINLOGOUT', payload:false});
  }
  return (
    <div>
      <div>
        <div className='login-btn' onClick={()=> authenticate === false ? navigate('/login') :  Logout()}>
          <FontAwesomeIcon icon={faUser}  />
          <div>{authenticate === false ? '로그인' : '로그아웃'}</div>
        </div>
      </div>
      <div className='nav-section'>
        <img src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" width={100} onClick={()=>navigate('/')}/>
      </div>
      <div className='menu-wrap'>
          <ul className='menu-list'>
            {menuList.map((menu)=><li>{menu}</li>)}
          </ul>
          <div className='menu-search'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" onKeyPress={(e) => search(e)}/>
          </div>
      </div>
    </div>
  );
};

export default Navbar;