import React from 'react';
import '../css/Board.css';
import api from '../api';
import PostView from '../Components/PostView'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    console.log(results)
    this.setState({allPosts: results.data})
  }
  
  handlingChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
  }

  handlingSubmit = async (event) => {
    event.preventDefault()
    let result = await api.createPost({title:this.state.title, content:this.state.content, password:this.state.password})
    console.log("작성 완료", result)
    this.setState({title:'', content:'', password:''})
    this.getPosts()
  }

  handlingDelete = async (id) => {
    await api.deletePost(id)
    this.getPosts()
  }

  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <div className="Post">
            <Paper className="PostingPaper">
              <h2>게시글 작성</h2>
              <form className="PostingForm" onSubmit={this.handlingSubmit}>
        
                <TextField
                  id="outlined-name"
                  label="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handlingChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="content"
                  name="content"
                  multiline
                  rows="4"
                  value={this.state.content}
                  onChange={this.handlingChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handlingChange}
                  autoComplete="current-password"
                />
                <Button variant="outlined" color="primary" type="submit">제출하기</Button>
              </form>
            </Paper>
          </div>
          <div className="List">
            {
              this.state.allPosts.map((post) =>

              <Card className={'card'}>
                <CardContent>
                  <Typography>
                    <PostView key={post.id} id={post.id} title={post.title} content={post.content} password={post.password}/>
                  </Typography>                  
                </CardContent>
                <CardActions>
                  <Button color="secondary" onClick={(event)=>this.handlingDelete(post.id)} size="small">삭제하기</Button>
                </CardActions>
              </Card>
              )
            }
          </div>
        </Container>
      </div>  
    );
  } 
}

export default Board;