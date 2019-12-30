import axios from "axios"
import qs from "qs"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {
    
    // 회원가입
    createMenbongUser(data){
        axios({
            method: 'post',
            url: '/menbonguser/',
            data: data,
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFToken',
            headers: {'X-Requested-With': 'XMLHttpRequest',
                      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        }).then(function (response) { 
            console.log(response);
        });


        // axios.post('/menbonguser/', qs.stringify(data), 
        // xsrfCookieName: 'csrftoken',
        // xsrfHeaderName: 'X-CSRFToken',)
        // .then(response=>{
        //     console.log(response)
        // })
        // .catch(error=>{
        //     console.log(error.response)
        // })
        // // return axios.post('/menbonguser', data)
        return data
    },
    
    viewAlluser(){
        axios.get('/menbonguser/').then(response=>(this.info = response.data))
    }

    // 로그인

}