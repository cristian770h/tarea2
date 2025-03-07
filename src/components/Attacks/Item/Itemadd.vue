<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <form @submit.prevent="submitItem" class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
      <h2 class="text-lg font-semibold text-gray-700 mb-4 text-center">Agregar Nuevo Ítem</h2>

      <div class="relative z-0 w-full mb-6 group">
        <input type="text" v-model="name" id="name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="name"
          class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">
          Nombre del Ítem
        </label>
      </div>

      <div class="relative z-0 w-full mb-6 group">
        <input type="text" v-model="description" id="description"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "  />
        <label for="description"
          class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">
          Descripción
        </label>
      </div>

      <button type="submit"
        class="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg text-sm hover:bg-blue-700 transition duration-300 focus:ring-4 focus:ring-blue-300">
        Agregar Ítem
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { createItems } from '@/services/itemsService';

const name = ref('');
const description = ref('');
const emit = defineEmits(['item-added']);
const submitItem = async () => {
  if (name.value && description.value) {
    const response = await createItems(name.value, description.value);
    if (response) {
      console.log(response);
        name.value = '';
        description.value = '';
      emit('item-added');
    }
  }
};
</script>