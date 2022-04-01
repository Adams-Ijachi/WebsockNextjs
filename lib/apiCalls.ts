import axios from 'axios';


const baseURL = 'http://localhost:8000/api/v1/';



const config = {

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}


const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

const broadcastAuthInstance = axios.create({
    baseURL: 'http://localhost:8000/api/broadcasting/',
    headers: {  
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    console.log('errorIntercept')
    return Promise.reject(error);
});



type loginData = {
    email: string,
    password: string
}

const driverLogin = (data:loginData) => {

    return instance.post(`/driver/login`, data);
}
const userLogin = (data:loginData) => {

    return instance.post(`/user/login`, data);
}



export { driverLogin , userLogin, instance ,broadcastAuthInstance };