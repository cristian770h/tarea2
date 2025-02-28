<template>
  <form class="max-w-sm mx-auto" @submit.prevent="onSubmit" novalidate>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
      <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com"
        type="email"
        name="email"
        v-model="email"
        v-bind="emailAttrs"
        id="email" required />
      <label v-if="errors.email" class="text-red">{{ errors.email }}</label>
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
      <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" v-model="password" v-bind="passwordAttrs" required />
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/user';
import { useForm } from 'vee-validate';
import * as yup from 'yup';


const authStore = useAuthStore();

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
  })
});

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: true,
});

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: true,
});

const  onSubmit=handleSubmit (async (values) => {
  const { email, password } = values;
  const response = await authStore.login(email, password);
  if (response.status === 200) {
    console.log('Login successful:', response.data);
  } else {
    console.log('Login failed');
  }
});
</script>


