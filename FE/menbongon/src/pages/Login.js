import React from 'react';
import '../css/App.css';

const Login = () => {
  return (
    <div className="MyInfo">
      <h2>로그인</h2>
      <form>
        <table>
          <tr>
            <td>아이디</td>
            <td><input name="user_id"/></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input name="user_pw"/></td>
          </tr>
        </table>
      </form>
      <br></br>
      <button>로그인</button>
    </div>
  );
}

export default Login;
