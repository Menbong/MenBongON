import React from 'react';
import '../css/MyInfo.css';

function MyInfo() {
  return (
    <div className="MyInfo">
      <h2>마이페이지</h2>
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
      <button>수정하기</button>
    </div>
  );
}

export default MyInfo;
