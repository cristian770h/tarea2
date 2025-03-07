

<template>
  <div class="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">

    
    <Itemadd @item-added="fetchItems" class="md:w-1/3" />

    <div class="md:w-2/3 bg-white shadow-lg rounded-lg p-6 overflow-hidden">
     
      <div v-if="itemLeng==0" class="flex justify-between">
         <h2 class="text-lg font-semibold text-gray-700 ">Lista de Ítems</h2>
         
      </div>
      <div v-else class="flex justify-between">
         <h2 class="text-lg font-semibold text-gray-700 ">Lista de Ítems</h2>
         <button @click="deleteAll" class=" px-4 py-2 bg-red-500 text-white rounded">
            Elimina todos los items
          </button>
      </div>
      
      <div class="overflow-y-auto max-h-[450px] pr-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
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
import { ref, onMounted, computed } from 'vue';
import Itemadd from '@/components/Attacks/Item/Itemadd.vue';
import ItemMap from '@/components/Attacks/Item/ItemMap.vue';
import { deleteAllItems, getItems } from '@/services/itemsService';
import type { Item } from '@/interface/Item';

const items = ref<Item[]>([]);

const itemLeng=computed(()=>items.value.length)


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
    items.value = []; 
    console.log('Todos los ítems han sido eliminados');
  } catch (error) {
    console.error('Error al eliminar todos los ítems:', error);
  }
};


onMounted(fetchItems);
</script>
