<template>
   <Header/>
<div class="user-data" >

<div  v-if="userData">
    <div>
    <span>Name: </span>
  <span>  {{ userData.first_name +" "+userData.last_name }}</span>
  </div> 
  <div>
    <span>Email: </span>
  <span>  {{ userData.email }}</span>
  </div> 
  <img :src="userData.avatar" alt="">
</div>
</div>
    <Footer/>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { ref,onMounted } from "vue";
const token=ref('')
const userData=ref()
onMounted(async ()=>{


const response =await fetch('https://reqres.in/api/login', {
  method: 'POST',
  body: JSON.stringify({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }),
  headers: {
    'Content-type': 'application/json',
  }
  })
  
 
 const  json = await response.json();
  token.value=json.token
 const userResponse =await fetch('https://reqres.in/api/users/2', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  }
  })
const json1=await userResponse.json()
userData.value={...json1.data}

})

</script>
<style>
.user-data{
    background-color: gainsboro;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    padding: 4rem;
}

</style>

