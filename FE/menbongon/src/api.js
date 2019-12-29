import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {
    
    // 마이페이지 정보 불러오기
   getMyInfo() {
       return axios.get('/myinfo/')
   },

   // 마이페이지 정보 수정하기
   updateMyInfo(data){
       return axios.post('/myinfo/', data)
   },

}