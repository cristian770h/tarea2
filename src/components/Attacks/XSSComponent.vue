<template>
    <section
      class="mb-12 p-6 rounded-lg shadow-sm bg-base-100 transition-all duration-300 hover:shadow-md"
      style="min-height: 100vh"
    >
      <div id="XSS">
        <h2 class="text-2xl font-bold mb-4">Cross-Site Scripting (XSS)</h2>
        <p class="mb-4">
          XSS permite inyectar scripts maliciosos en páginas web vistas por otros usuarios.
        </p>
        <form @submit.prevent="submitComment" class="mb-4">
          <label for="xssInput" class="block mb-2">Introduce un script:</label>
          <input
            autocomplete="false"
            id="commentUser"
            v-model="commentUser"
            class="input input-bordered w-full mb-4"
          />
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        
        <div> 
          <h3 class="text-xl font-bold mb-2">Ejemplos básicos de XSS:</h3>
          <ul class="list-disc list-inside">
            <li v-for="(comment, index) in comments" :key="index" class="mb-2">
              <p v-html="comment.comment"></p>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <button @click="show = !show"  class="btn btn-primary my-4">Mostrar</button>
        </div>
        <div v-if="show">
          <h3 class="text-xl font-bold mb-2">Prevención de XSS:</h3>
          <p class="mb-2">
            Para prevenir XSS, es importante escapar correctamente los datos de entrada y utilizar
            métodos seguros para renderizar contenido HTML.
          </p>
          <ul class="list-disc list-inside">
            <li>Escapar caracteres especiales en el lado del servidor.</li>
            <li>Utilizar bibliotecas de sanitización de HTML.</li>
            <li>Implementar Content Security Policy (CSP).</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, type Ref } from 'vue'
  import type { Comment } from '@/interface/Comment'
import { addCommentService, getCommentService } from '@/services/apiServices'

const comments: Ref<Comment[]> = ref([{id:1,user_id:1,comment:'hola'}])

const show=ref(false);
const commentUser=ref('');

const submitComment=async()=>{
if(commentUser.value){
    const response= await addCommentService(1,commentUser.value)
    if(response.message){
        alert(response.message)
    }
}
}


const results=ref('')

onMounted(async()=>{
    const response = await getCommentService()
    if(response.status){
        comments.value= response.results
    }else{
        comments.value=([ {id:1,user_id:1,comment:'hola'}])
    }
})



  
  //const show = ref(false)
  
  
  
  //Aqui debemos cambiar código para consumir el endpoint : /attacls/xss
  // Para obtener los comentarios de la base de datos
  // y tambien para enviar los comentarios a la base de datos
  
  //const comments: any[] = [
    //{ comment: '<img src="x" onerror="alert(1)">' },
    //{ comment: '<a href="https://userinyerface.com/" class="btn btn-primary mx-2" > Clickeame </a>' },
  //]
  </script>
  