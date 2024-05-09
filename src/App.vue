<script setup>
import Home from './components/Home.vue';
import Welcome from './components/Welcome.vue'
import Tentang_Siak from './components/TentangSiak.vue'
import Budaya from './components/BudayaDanKesenian.vue'
import Wisata from'./components/Wisata.vue'
import CardWisata from './components/CardWisata.vue'
import Hook from './components/Hook.vue'
import Kontak from './components/Kontak.vue'
</script>

<template>
  <header>
  </header>
  <section class="font-inter max-w-[1580px] overflow-hidden mx-auto ">
  <Home/>
  <Welcome/>
  <Tentang_Siak/>
  <Budaya/>
  <Wisata/>
  <CardWisata/>
  <Hook/>
  <Kontak/>
  </section>
</template>
