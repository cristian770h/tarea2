

<template>
  <div class="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">

    <!-- Formulario (Componente Itemadd) -->
    <Itemadd @item-added="fetchItems" class="md:w-1/3" />

    <!-- Sección de Ítems -->
    <div class="md:w-2/3 bg-white shadow-lg rounded-lg p-6 overflow-hidden">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Lista de Ítems</h2>

      <!-- Contenedor con Scroll -->
      <div class="overflow-y-auto max-h-[450px] pr-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button @click="deleteAll" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Elimina todos los items
          </button>
          <ItemMap
            v-for="item in items"
            :key="item.id"
            :item="item"
            @item-deleted="fetchItems"
          />
        </div>
      </div>
    </div>

  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Itemadd from '@/components/Attacks/Item/Itemadd.vue';
import ItemMap from '@/components/Attacks/Item/ItemMap.vue';
import { deleteAllItems, getItems } from '@/services/itemsService';
import type { Item } from '@/interface/Item';

const items = ref<Item[]>([]);

// Función para obtener los ítems de la base de datos
const fetchItems = async () => {
  try {
    items.value = await getItems();
  } catch (error) {
    console.error('Error al obtener ítems:', error);
  }
};

const deleteAll = async () => {
  try {
    await deleteAllItems();
    items.value = []; // Vaciar la lista localmente
    console.log('Todos los ítems han sido eliminados');
  } catch (error) {
    console.error('Error al eliminar todos los ítems:', error);
  }
};


// Cargar ítems al montar el componente
onMounted(fetchItems);
</script>
