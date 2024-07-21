import axiosClient from "../axiosClient";


const createUser = async (params) =>{
    const response = await axiosClient.post('/user/create', params);
     return response;
}

const signup = async( {email,token, name, password } ) =>{
    const res = await axiosClient.post(`/user/signup?email=${email}&token=${token}`,{name,password});
    if(res.token){
        localStorage.setItem('token', token)
    }
    return res;
}

const authService ={
    createUser,
    signup
}
export default authService;