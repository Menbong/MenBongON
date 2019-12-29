import React from 'react';
import '../css/App.css';
import api from '../api';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      password: '',
    }
  }
  
  handlingChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
  }

  handlingSubmit = async (event) => {
    event.preventDefault()
    let result = await api.createPost({title:this.state.title, content:this.state.content, password:this.state.password})
    console.log("작성 완료", result)
  }

  render() {
    return (
      <div>
        <div className="Post">
          <h2>게시글 작성</h2>
          <form onSubmit={this.handlingSubmit}>
            <input
              name="title"
              value={this.state.title}
              onChange={this.handlingChange}
            />
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handlingChange}
            />
            <input
              name="password"
              value={this.state.password}
              onChange={this.handlingChange}
            />
            <button type="submit">제출하기</button>
          </form>
        </div>
        <div className="Detail">
  
        </div>
      </div>  
    );
  } 
}

export default Board;