import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="MyInfo">
      <h2>마이페이지</h2>
      <table>
        <tr>
          <td>아이디</td>
          <td><input value="id"/></td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td><input value="pw"/></td>
        </tr>
        <tr>
          <td>이름</td>
          <td><input value="name"/></td>
        </tr>
        <tr>
          <td>학교</td>
          <td><input value="school"/></td>
        </tr>
        <tr>
          <td>이메일</td>
          <td><input value="email"/></td>
        </tr>
        <tr>
          <td>전공</td>
          <td><input value="major"/></td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td><input value="phone"/></td>
        </tr>
      </table>
      <br></br>
      <button>수정하기</button>
    </div>
  );
}

export default App;
