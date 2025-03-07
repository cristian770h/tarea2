<template>
  <div class="flex h-96 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="">
      <RouterLink to="/" class="text-gray-600 text-sm hover:text-indigo-500 font-semibold">Regresar</RouterLink>
     
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="onSubmit" novalidate>
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Correo electronico</label>
          <div class="mt-2">
            <input placeholder="name@flowbite.com"
        type="email"
        name="email"
        v-model="email"
        v-bind="emailAttrs" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        <label v-if="errors.email" class="text-red">{{ errors.email }}</label>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Contraseña</label>
           
          </div>
          <div class="mt-2">
            <input v-model="password" v-bind="passwordAttrs" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        No tienes cuenta
        {{ ' ' }}
        <RouterLink to="/register" class="font-semibold text-indigo-600 hover:text-indigo-500">Registrate</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/stores/user';
import { useForm } from 'vee-validate';
import { RouterLink } from 'vue-router';
import * as yup from 'yup';

const authStore = useAuthStore();

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
  })
});

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: true,
});

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: true,
});

const onSubmit = handleSubmit(async (values) => {
  const { email, password } = values;
  const response = await authStore.login(email, password);
  if (response.status === 200) {
    alert('Logeo correcto')
    
    router.push('/dashboard');
  } else {
    
  }
});
</script>