import type { User } from "@/interface/User";
import { useStorage } from "@vueuse/core";
import axios from "axios";
import { defineStore } from "pinia";



export const useAuthStore = defineStore('auth',()=> {

    const Url ='http://localhost:3000/';

    const login = async(email:string,password:string)=>{
        try{
            const response = axios.post(`${Url}users/login`,{email,password});

            return {status:(await response).status,data:(await response).data};
        }catch(error){
           
            console.log(error);
        }
    }

const registerUser = async(email:string,password:string)=>{
    try{
        const response = axios.post(`${Url}users/register`,{email,password});

        return {status:(await response).status,data:(await response).data};
    }catch(error){
        console.log(error);
    }
}


//const logout = 


return {
    login,
    registerUser,
}
})