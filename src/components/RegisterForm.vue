<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 class=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">Registrarse</h2>
    </div>

    <div class="mt- sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="onSubmit" novalidate>
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Correo electronico</label>
          <div class="mt-2">
            <input
             type="email"
             v-model="email"
      v-bind="emailAttrs"
             name="email" id="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <label v-if="errors.email" class="text-red">{{ errors.email }}</label>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Contraseña</label>

          </div>
          <div class="mt-2">
            <input type="password"
            v-model="password"
            v-bind="passwordAttrs"
            name="password"
            id="password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            <label v-if="errors.password" class="text-red">{{ errors.password }}</label>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">confirmar contraseña</label>

          </div>
          <div class="mt-2">
            <input type="password"
            v-model="repeat_password"
            v-bind="repeatAttrs"
            name="repeat_password"
            id="repeat_password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            <label v-if="errors.repeat_password" class="text-red">{{ errors.repeat_password }}</label>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarse</button>
        </div>
      </form>
    </div>
  </div> 


</template>


<script lang="ts" setup>
import { useAuthStore } from '@/stores/user';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import router from '@/router';

const authStore = useAuthStore();

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8,'La contraseña debe ser minimo de 8 caracteres').matches(/[!@#$%^&*(),.?":{}|<>]/, 'La contraseña debe contener al menos un carácter especial'),
    repeat_password: yup.string().oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
  })
});

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: true
});

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: true
});

const [repeat_password, repeatAttrs] = defineField('repeat_password', {
  validateOnModelUpdate: true
});

const onSubmit = handleSubmit(async (values) => {
  const { email, password } = values;
  const response = await authStore.registerUser(email, password);
  if (response.status === 200) {
    console.log('Login successful:', response.data);
    router.push('/login');
  } else {
    alert('Ocurrio algun error inesperado')
    console.log('Register failed:', response.data);
  }
});
</script>