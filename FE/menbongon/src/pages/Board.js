import React from 'react';
import '../css/App.css';
import api from '../api';
import PostView from '../Components/PostView'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      password: '',
      allPosts: [],
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  async getPosts(){
    const results = await api.getAllPosts()
    this.setState({allPosts: results.data})
    console.log(results)
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
        <div className="List">
          {
            this.state.allPosts.map((post) =>
            <PostView key={post.id} id={post.id} title={post.title} content={post.content} password={post.password}/>
            )
          }
        </div>
      </div>  
    );
  } 
}

export default Board;