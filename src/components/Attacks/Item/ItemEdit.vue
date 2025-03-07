<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form @submit.prevent="submitItem" class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 class="text-lg font-semibold text-gray-700 mb-4 text-center">Editar Ítem</h2>
  
        <div class="relative z-0 w-full mb-6 group">
          <input type="text" v-model="form.name" id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " required />
          <label for="name"
            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">
            Nombre del Ítem
          </label>
        </div>
  
        <div class="relative z-0 w-full mb-6 group">
          <input type="text" v-model="form.description" id="description"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " required />
          <label for="description"
            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">
            Descripción
          </label>
        </div>
  
        <div class="flex justify-between">
            <button type="button" @click="router.back()"
            class=" h-auto w-32 bg-gray-600 text-white font-medium py-2.5 rounded-lg text- hover:bg-gray-700 transition duration-300 focus:ring-4 focus:ring-gray-300">
            Regresar
          </button>
          <button type="submit"
            class="w-32 bg-blue-600 text-white font-medium py-2.5 rounded-lg text-sm hover:bg-blue-700 transition duration-300 focus:ring-4 focus:ring-blue-300">
            Editar Ítem
          </button>
          
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import router from '@/router';
  import { getItemById, updateItemsById } from '@/services/itemsService';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const emit = defineEmits(['item-edit'])
  const route = useRoute();
  const itemId = route.params.id;
  
  const form = ref({
    description: '',
    name: ''
  })
  
  onMounted(async () => {
    const item = await getItemById(itemId);
    form.value.name = item.name;
    form.value.description = item.description;
  })
  
  const submitItem = async () => {
    await updateItemsById(itemId, form.value);
    emit('item-edit', form.value);
    router.push('/item')
  }
  </script>