import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {
    
    // 회원가입
    createMenbongUser(data){
        return axios.post('/menbonguser/', data)
    },

    // 로그인


}