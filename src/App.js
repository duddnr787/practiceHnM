import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Login from './page/Login';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

//1. 페이지 : 전체상품, 로그인, 상품 상세.
//2. 전체 상품페이지는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지 나오기.
//4. 로그인 안되어 있으면 상품 상세 페이지 리다이렉트 로그인 페이지로.
//5. 로그인이 되어 있으면 상품 상세 피이지로.
//6. 로그아웃 클릭시 로그아웃 후 로그인으로 바꿔주기.
//7. 상품을 검색. 
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
