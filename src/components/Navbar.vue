<template>
 <div class="relative">
  <div
    class="fixed top-0 left-0 right-0 z-50 flex justify-between min-w-full px-5 py-2 backdrop-blur-sm bg-white/70"
  >
    <img src="../components/icons/Logo.svg" alt="image-logo" title="logo" class="w-24" />

    <button class="p-2 bg-white rounded-lg" @click="clickMenu()">
      <img src="../components/icons/menu-alt-2.svg" alt="menu" title="menu" srcset="" />
    </button>
  </div>

<div class="fixed left-0 right-0 z-40 flex flex-col justify-center text-center backdrop-blur-sm bg-white/50 top-14" v-show="showMenu">
<a href="#" class="block w-full py-3 focus:font-semibold active:border active:border-primary">Beranda</a>
<a href="#sejarah" class="block w-full py-3 focus:font-semibold active:border active:border-primary">Sejarah</a>
<a href="#budaya" class="block w-full py-3 focus:font-semibold active:border active:border-primary">Budaya</a>
<a href="#wisata" class="block w-full py-3 focus:font-semibold active:border active:border-primary">Wisata</a>
<a href="#kontak" class="block w-full py-3 focus:font-semibold active:border active:border-primary">Hubungi Kami</a>
</div>
 </div>
  
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        clickMenu(){
            this.showMenu = !this.showMenu
        }
    },
}
</script>
