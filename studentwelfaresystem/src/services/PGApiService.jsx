import axios from 'axios';

const base_url="http://localhost:8080";

class PGApiService{
        
    // Users
    getAllUsers(){
        return axios.get(base_url+"/users");
    }

    deleteUser(id){
        return axios.delete(base_url+"/users/"+id);
    }

    addUser(user){
        return axios.post(base_url+"/users",user,{headers:{
            'content-type':'application/json'}});
    }

    loginUser(user){
        return axios.post(base_url+"/users/signIn", user, {headers:{
            'content-type':'application/json'
        }})
    }

}

export default new PGApiService();