<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Bienvenido a la Aplicación</h5>
      <p class="mb-6 text-base text-gray-500 sm:text-lg dark:text-gray-400">Mantente al día y avanza en tu trabajo con nuestra aplicación.</p>
      <RouterLink to="/login">
        <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">
          Iniciar Sesión
        </button>
      </RouterLink>
    </div>
  </main>
</template>