<template>
  <div class="footer">
<!-- <div class="footer-container"> -->
<ul class="list">
<li class="title">Services</li>
  <li>Design</li>
  <li>Development</li>
  <li>Artificial Intelligence</li> 
   <li>Quality Engineering</li>
  <li>
Cloud Computing</li>
<li>Dev Operation</li>
</ul>
<ul class="list">
<li class="title">Technologies</li>
  <li>Vue JS</li>
 
  <li>React JS</li>
  <li>React Native</li> 
   <li>Fluter</li>
  <li>
Kotlin</li>
<li>Angular JS</li>
</ul>
<ul class="list">
<li class="title">Company</li>
  <li>About Us</li>
  <li>Contact US</li>
  <li>Hire US</li> 
   <li>test@gmail.com</li>
 </ul>
<!-- </div> -->






  </div>
</template>

<script setup>

</script>

<style scoped>
.footer{
  box-sizing: border-box;
display: flex;
/* height: 35vh; */
padding: 2rem 4rem;
background-color: rgb(185, 185, 185);
justify-content: space-evenly;
}
.list li{
  padding: 0.4rem;
  font-weight: 400;
  cursor: pointer;
}
.title{
  font-size: 2rem;
  font-weight: bold;
}
@media screen and (max-width: 640px) {
  .footer{
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    /* border: 2px solid red; */
  }
}

</style>