import { useStorage } from "@vueuse/core";
import axios from "axios";
import { defineStore } from "pinia";
import { computed } from "vue";


export const useAuthStore = defineStore('auth', () => {
  const Url = 'http://localhost:3000/';
  const token = useStorage('token', '');

  const isLoggedin= computed(()=>token.value !=='' && token.value !==null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${Url}users/login`, { email, password });
      if (response.status === 200) {
        token.value = response.data.token;
      }
      return { status: response.status, data: response.data };
    } catch (error) {
      console.log(error);
      return { status: 500, data: null };
    }
  };

  const registerUser = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${Url}users/register`, { email, password });
      return { status: response.status, data: response.data };
    } catch (error) {
      console.log(error);
      return { status: 500, data: null };
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(`${Url}users/logout`, { token: token.value });
      if (response.status === 200) {
        token.value = '';
      }
      return { status: response.status, data: response.data };
    } catch (error) {
      console.log(error);
      return { status: 500, data: null };
    }
  };

  return {
    login,
    registerUser,
    logout,
    token,
    isLoggedin,

  };
});
