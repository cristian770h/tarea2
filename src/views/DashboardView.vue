<template>
    <div class="flex flex-col items-center mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          
            <img class="rounded-t-lg h-[13.5rem]"  src="https://cdn-nv.mo.cloudinary.net/media/uploads/2022/02/que-es-xss.jpg" alt="" />
          
          <div class="p-5">
            
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mira y realiza ataques XSS Para practicar</h5>
            
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Es un tipo de ataque informático que consiste en inyectar código malicioso en un sitio web o aplicación web.</p>
            <RouterLink to="/xss" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Iniciar
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </RouterLink>
          </div>
        </div>
  
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          
            <img class="rounded-t-lg" src="https://cdn.prod.website-files.com/642adcaf364024654c71df23/674dd433fc637d5b3ebf51ef_state-of-sql-injection-in-2025-v2_fe087363318953118b35c354ede2f467.png" alt="" />
          
          <div class="p-5">
            
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mira y realiza inyección SQL Para practicar</h5>
           
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> La inyección de SQL es un ataque contra un sitio web en el que se usa código SQL para acceder a su base de datos</p>
            <RouterLink to="/item" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Iniciar
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup></script>