import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div className="Menbong">
        <h1>입뿌에 오신 것을 환영합니다.</h1>
        <button><Link to="/login">로그인</Link></button>
        <br>
        </br>
        <button><Link to="/signin">회원가입</Link></button>
    </div>  
    ); 
 
}

export default Home;
