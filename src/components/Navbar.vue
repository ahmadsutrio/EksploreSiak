<template>
  <div class="relative">
    <div
      class="fixed top-0 left-0 right-0 z-50 flex lg:justify-around justify-between min-w-full px-5 lg:px-14 py-2 md:items-center md:px-10 backdrop-blur-sm bg-white/10"
    >
      <!-- <img
        src="../components/icons/Logo.svg"
        alt="image-logo"
        title="logo"
        loading="lazy"
        class="w-24 lg:w-28"
      /> -->

      <a
        href="#kontak"
        class="items-center lg:font-semibold lg:px-6 lg:flex justify-center  hover:transform hover:transition hover:ease-in-out hover:duration-300 bg-gradient-primary text-white  rounded-tl-2xl rounded-br-2xl py-2 px-3 rounded-sm   whitespace-nowrap"
        >Siakku</a
      >
      <div
        class="items-center hidden gap-10 rounded-2xl px-10 md:flex"
      >
        <a
          href="#"
          class="text-gray-700 block w-full py-3 text-sm focus:font-semibold active:text-primary hover:text-primary"
          >Beranda</a
        >
        <a
          href="#sejarah"
          class="text-gray-700 block w-full py-3 text-sm focus:font-semibold active:font-semibold active:text-primary hover:text-primary"
          >Sejarah</a
        >
        <a
          href="#budaya"
          class="text-gray-700 block w-full py-3 text-sm focus:font-semibold active:font-semibold active:text-primary hover:text-primary"
          >Budaya</a
        >
        <a
          href="#wisata"
          class="text-gray-700 block w-full py-3 text-sm focus:font-semibold active:font-semibold active:text-primary hover:text-primary"
          >Wisata</a
        >
        <a
          href="#kontak"
          class="flex items-center lg:hidden justify-center px-3 bg-white rounded-sm md:h-8 text-primary focus:font-semibold active:font-semibold active:text-primary hover:text-primary whitespace-nowrap"
          >Hubungi Kami</a
        >
      </div>

      <a
        href="#kontak"
        class="items-center hidden lg:flex justify-center hover:transform hover:transition hover:ease-in-out hover:duration-300 hover:bg-gradient-primary hover:text-white bg-white rounded-tl-2xl rounded-br-2xl py-5 px-3 rounded-sm md:h-8 text-primary active:text-primary whitespace-nowrap"
        >Hubungi Kami</a
      >

      <button class="block p-2 bg-white rounded-lg md:hidden" @click="clickMenu()">
        <img
          loading="lazy"
          src="../components/icons/menu-alt-2.svg"
          alt="menu"
          title="menu"
          srcset=""
        />
      </button>
    </div>

    <div
      class="fixed left-0 right-0 z-40 flex flex-col justify-center text-center backdrop-blur-sm bg-white/50 top-14"
      v-show="showMenu"
    >
      <a
        href="#"
        class="text-gray-700 block w-full py-3 focus:font-semibold active:border active:border-primary"
        >Beranda</a
      >
      <a
        href="#sejarah"
        class="text-gray-700 block w-full py-3 focus:font-semibold active:border active:border-primary"
        >Sejarah</a
      >
      <a
        href="#budaya"
        class="text-gray-700 block w-full py-3 focus:font-semibold active:border active:border-primary"
        >Budaya</a
      >
      <a
        href="#wisata"
        class="text-gray-700 block w-full py-3 focus:font-semibold active:border active:border-primary"
        >Wisata</a
      >
      <a
        href="#kontak"
        class="text-gray-700 block w-full py-3 focus:font-semibold active:border active:border-primary"
        >Hubungi Kami</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    clickMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
