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
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  width: 100%;
  // height: auto;
  line-height: 1.5;
  font-family: 'Noto Sans TC', sans-serif;
  // background: rgba(228, 211, 204, 1);
  color: rgba(69, 69, 69, 1);
  // z-index: -2;
}
@media (max-width: 768px) {
  .bg {
    padding: 0 20px;
  }
}
</style>
