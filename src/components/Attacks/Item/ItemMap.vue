<template>
  <div>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">{{ item.name }}</h5>
      <p class="mb-3 font-normal text-gray-500 ">{{ item.description }}</p>
      <div class="flex justify-between">
        <button @click="deleteItem(item.id)" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">Eliminar</button>
      <button @click="editItem" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Editar
      </button>
      </div>
      
    </div>
  </div>
</template>



<script setup lang="ts">
import type { Item } from '@/interface/Item';
import { deleteItemById } from '@/services/itemsService';
import { useRouter } from 'vue-router';
const emit = defineEmits(['item-deleted']);
const props = defineProps<{item:Item}>();
const router = useRouter();

function deleteItem(item:number){
deleteItemById(item)
    console.log('delete item')
    confirm('desea eliminar este item')
    emit('item-deleted');
}
const editItem = () => {
  router.push(`/item/edit/${props.item.id}`);
};



</script>
