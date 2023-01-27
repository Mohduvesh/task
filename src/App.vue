

<template>

<router-view />

</template>
<script setup>
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
import Footer from "./components/Footer.vue";
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
.container input{
  margin: 10px 10px;
}
</style>
