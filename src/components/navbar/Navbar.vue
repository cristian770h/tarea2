<template>
  <div class="pt-16">
    <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" class="h-8" alt="Flowbite Logo">
          <span class="self-center text-2xl font-semibold whitespace-nowrap">Actividad 2</span>
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div v-if="isLoggedIn">
            <button @click="handleLogout" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
              Deslogearse
            </button>
          </div>
          <div v-else>
            <RouterLink to="/login">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                Logearse
              </button>
            </RouterLink>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" v-if="isLoggedIn" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            
            <li>
              <RouterLink to="/dashboard" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Dashboard</RouterLink>
            </li>
            <li>
              <RouterLink to="/xss" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">XSS</RouterLink>
            </li>
            <li>
              <RouterLink to="/item" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Item</RouterLink>
            </li>
            
          </ul>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" v-else id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <RouterLink to="/" class="block py-2 px-3 text-gray-900 bg-blue-700 rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0" aria-current="page">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/register" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Registro</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useAuthStore } from '@/stores/user';
import { RouterLink } from 'vue-router';
import router from '@/router';

const authStore = useAuthStore();
const isLoggedIn = ref(authStore.isLoggedin);

watch(() => authStore.isLoggedin, (newVal) => {
  isLoggedIn.value = newVal;
});

const handleLogout = async () => {
  const response = await authStore.logout();
  if (response.status === 200) {
    console.log('Deslogeado');
    router.push('/');
  } else {
    console.log('Error al deslogearse');
  }
};

if (!isLoggedIn.value) {
  console.log('No esta logeado');
}
</script>