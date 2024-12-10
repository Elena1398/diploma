<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="m-auto rounded-xl shadow-xl mt-30">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
