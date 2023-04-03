import { faCoffee, faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성'];
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className='login-btn' onClick={()=>navigate('/login')}>
          <FontAwesomeIcon icon={faUser}  />
          <div>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
        <img src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" width={100} />
      </div>
      <div className='menu-wrap'>
          <ul className='menu-list'>
            {menuList.map((menu)=><li>{menu}</li>)}
          </ul>
          <div className='menu-search'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder='드레스'/>
          </div>
      </div>
    </div>
  );
};

export default Navbar;