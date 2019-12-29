import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="Menbong">
    <h1>메인 페이지 입니다</h1>
    <button><Link to="/myinfo">정보수정</Link></button>
    <br>
    </br>
    <button><Link to="/board">게시판</Link></button>
</div>  
  );
}

export default MainPage;
