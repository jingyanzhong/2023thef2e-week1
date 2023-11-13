<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import Footer from './components/FooterComponent.vue'

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <div class="bg">
    <Navbar></Navbar>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.bg {
  width: 100%;
  line-height: 1.5;
  font-family: 'Noto Sans TC', sans-serif;
  color: rgba(69, 69, 69, 1);
}
@media (max-width: 768px) {
  .bg {
    padding: 0 20px;
  }
}
</style>
