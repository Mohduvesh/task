<template>
    <div>
<ul class="nav">

    <router-link to="/">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <li>Services</li>
    <li>Technologies</li>
    <li>Contact</li>
</ul>
    </div>
</template>

<script setup>

</script>

<style scoped>

.nav{
display: flex;
padding: 2rem 4rem;
background-color: rgb(185, 185, 185);
justify-content: space-between;
}
.nav li:hover{
    color: gray;
}
.nav li{
    cursor: pointer;
}
@media screen and (max-width: 640px) {
.nav{
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding: 1rem    1rem  ;
}
.nav li{
    padding: 0px 0px;
    text-align: center;
}
   
}
</style>