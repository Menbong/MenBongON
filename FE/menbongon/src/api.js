import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {
    
    // 마이페이지 정보 불러오기
   getMyInfo(id) {
       return axios.get('/myinfo/'+String(id))
   },

   // 마이페이지 정보 수정하기
   updateMyInfo(id, data){
       return axios.patch('/myinfo/'+String(id), data)
   },

   // 모든 게시글 불러오기
   getAllPosts() {
       return axios.get('/posts/')
   },

   // 글 작성하기
   createPost(data) {
       return axios.post('/posts/', data)
   },

   
}