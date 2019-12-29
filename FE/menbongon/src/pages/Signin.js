import React from 'react';
import '../css/App.css';

const Signin = () => {
  return (
    <div className="Menbong">
      <h2>회원가입</h2>
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
          <tr>
            <td>이름</td>
            <td><input name="user_name"/></td>
          </tr>
          <tr>
            <td>회원유형</td>
            <td><select name="fruit">
              <option value="mentee">멘티(학생)</option>
              <option value="mento">멘토(대학생)</option>
            </select></td>
          </tr>
          <tr>
            <td>학교</td>
            <td><input name="school"/></td>
          </tr>
          <tr>
            <td>이메일</td>
            <td><input name="email"/></td>
          </tr>
          <tr>
            <td>전공</td>
            <td><input name="major"/></td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td><input name="phone"/></td>
          </tr>
        </table>
      </form>
      <br></br>
      <button>가입하기</button>
    </div>
  );
}

export default Signin;
