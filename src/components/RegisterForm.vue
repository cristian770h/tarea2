<template>


<form class="max-w-md mx-auto" @submit.prevent="onSubmit" novalidate>
  <div class="relative z-0 w-full mb-5 group">
      <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
type="email" name="email"
      v-model="email"
      v-bind="emailAttrs"
       placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electronico</label>
      <label v-if="errors.email" class="text-red">{{ errors.email }}</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" 
      v-model="password"
      v-bind="passwordAttrs"
      name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input 
      type="text"
       name="repeat_password"
       v-model="repeat_password"
       v-bind="repeatAttrs"
       id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>

</template>


<script lang="ts" setup>
import { useAuthStore } from '@/stores/user';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import {useRouter} from 'vue-router';

const router=useRouter;
const authStore=useAuthStore();

const{errors,defineField,handleSubmit}=useForm({
  validationSchema:yup.object({
    email:yup.string().required().email(),
    password:yup.string().required().min(6),
    repeat_password:yup.string().oneOf([yup.ref('password')],'Passwords must match')
  })
})

const [email,emailAttrs]=defineField('email',{
  validateOnModelUpdate:true
})

const [password,passwordAttrs]=defineField('password',{
  validateOnModelUpdate:true
})

const [repeat_password,repeatAttrs]=defineField('password',{
  validateOnModelUpdate:true
})

const onSubmit=handleSubmit(async(values)=>{
  const { email, password } = values;
 const response= await authStore.registerUser(email,password)
 if(response.status===200){
  console.log('Login successful:', response.data);
   router.push('/')
 }else{
  console.log('Register failed:', response.data);
 }
  
})


</script>
