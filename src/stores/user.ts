import { useStorage } from "@vueuse/core";
import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const Url = 'http://localhost:3000/';
  const token = useStorage('token', '');

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${Url}users/login`, { email, password });
      if (response.status === 200) {
        token.value = response.data.token; // Guarda el token en el almacenamiento local
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

  
  return {
    login,
    registerUser,
    token
  };
});
