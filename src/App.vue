<script setup>
import Home from './components/Home.vue';
import Welcome from './components/Welcome.vue'
import Tentang_Siak from './components/TentangSiak.vue'
import Budaya from './components/BudayaDanKesenian.vue'
import Wisata from'./components/Wisata.vue'
import CardWisata from './components/CardWisata.vue'
import Hook from './components/Hook.vue'
import Kontak from './components/Kontak.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
  </header>
  <section class="font-inter max-w-[1920px] overflow-hidden mx-auto ">
  <Navbar/>
  <Home/>
  <Welcome/>
  <div id="sejarah"></div>
  <Tentang_Siak/>
  <div id="budaya"></div>
  <Budaya/>
  <div id="wisata"></div>
  <Wisata/>
  <CardWisata/>
  <Hook/>
  <div id="kontak"></div>
  <Kontak/>
  </section>
</template>
