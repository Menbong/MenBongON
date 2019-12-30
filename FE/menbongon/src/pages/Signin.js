import React from 'react';
import '../css/App.css';
import api from '../api';

class Signin extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: '',
      user_pw: '',
      user_name: '',
      menbong: '',
      school: '',
      email: '',
      phone: '',
    }
  }

  handlingChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handlingSubmit = async (event) => {
    event.preventDefault()
    let result = await api.createMenbongUser({user_id:this.state.user_id, user_pw:this.state.user_pw, user_name:this.state.user_name, menbong:this.state.menbong, school:this.state.school, email:this.state.email, phone:this.state.phone})
    console.log("완료됨!", result)
  }

  render(){
    return (
      <div className="Menbong">
        <h2>회원가입</h2>
        <form onSubmit={this.handlingSubmit}>
          <table>
            <tr>
              <td>아이디</td>
              <td><input name="user_id" type="id" value={this.state.user_id} onChange={this.handlingChange}/></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input name="user_pw" type="password" value={this.state.user_pw} onChange={this.handlingChange}/></td>
            </tr>
            <tr>
              <td>이름</td>
              <td><input name="user_name" value={this.state.user_name} onChange={this.handlingChange}/></td>
            </tr>
            <tr>
              <td>회원유형</td>
              <td><select name="menbong" value={this.state.menbong} onChange={this.handlingChange}>
                <option value="mentee">멘티(학생)</option>
                <option value="mento">멘토(대학생)</option>
              </select></td>
            </tr>
            <tr>
              <td>학교</td>
              <td><input name="school" value={this.state.school} onChange={this.handlingChange}/></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><input name="email" type="email" value={this.state.email} onChange={this.handlingChange}/></td>
            </tr>
            <tr>
              <td>전공</td>
              <td><input name="major" value={this.state.major} onChange={this.handlingChange}/></td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td><input name="phone" value={this.state.phone} onChange={this.handlingChange}/></td>
            </tr>
          </table>
          <br></br>
          <button type="submit">가입하기</button>
        </form>
      </div>
    );
  }
}

export default Signin;
