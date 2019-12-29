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
          <td>id</td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>pw</td>
        </tr>
        <tr>
          <td>이름</td>
          <td>name</td>
        </tr>
        <tr>
          <td>학교</td>
          <td>school</td>
        </tr>
        <tr>
          <td>이메일</td>
          <td>email</td>
        </tr>
        <tr>
          <td>전공</td>
          <td>major</td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>phonenumber</td>
        </tr>
      </table>
      <br></br>
      <button>수정하기</button>
    </div>
  );
}

export default App;
