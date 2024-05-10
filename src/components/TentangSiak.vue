<template>
  <div class="py-[3rem] md:py-16 lg:py-28 relative" >
    <div class="absolute md:top-0 lg:left-36 md:left-10">
      <div class="rounded-full md:size-9 lg:size-16 bg-gradient-primary"></div>
    </div>
    <div class="absolute lg:top-16 md:top-11 lg:left-24 md:left-7">
      <div class="rounded-full md:size-5 lg:size-11 bg-gradient-primary"></div>
    </div>
    <div class="absolute flex md:gap-2 md:bottom-6 md:right-12 lg:right-36">
      <div class="rounded-full md:size-4 lg:size-5 bg-gradient-primary"></div>
      <div class="rounded-full md:size-4 lg:size-5 bg-gradient-primary"></div>
      <div class="rounded-full md:size-4 lg:size-5 bg-gradient-primary"></div>
    </div>

    <div class="grid grid-cols-12 grid-rows-1">
      <div class="content-center col-span-12 md:col-span-5 lg:px-10 lg:content-center md:col-start-2">
        <div class="relative mx-6 overflow-hidden border-8 border-primary lg:mx-0 lg:ms-16 md:mx-2">
          <img src="../assets/img/image-tentang-siak.webp" alt="tentang-siak" title="tentang-siak" class="w-full scale-105" />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
          ></div>
        </div>
      </div>
      <div class="content-center col-span-12 px-5 md:col-span-5 ">
        <h3 class="mt-3 text-3xl font-semibold text-center md:text-start lg:hidden lg:text-5xl text-primary">
          Tentang <br />Siak Sri Indrapura
        </h3>
        <h3 class="text-center md:text-start hidden lg:block font-semibold lg:font-bold text-3xl lg:text-[2.5rem] mt-3 text-primary">
          Tentang 
        </h3>
        <h3 class="text-center md:text-start hidden lg:block font-semibold lg:font-bold text-3xl lg:text-[2.5rem] mt-3 text-primary">
          Siak Sri Indrapura
        </h3>
        <p class="text-paragraph text-justify mt-3 text-sm md:text-[0.8rem] lg:text-[1.1rem]  lg:mr-16 lg:leading-[1.9rem] lg:mt-9">
          Siak Sri Indrapura adalah sebuah kawasan yang kaya akan sejarah dan budaya.
          Didirikan pada tahun 1723 oleh Sultan Abdul Jalil Rahmat Syah, kerajaan ini
          telah menyimpan berbagai tradisi dan kesenian yang menjadi bagian tak
          terpisahkan dari identitas Siak.
        </p>
        <button
          class="w-full px-10 py-2 mt-5 text-lg text-white bg-gradient-primary lg:text-xl lg:font-medium lg:py-3 lg:mt-10 md:w-fit" aria-label="eksplore-now"
        >
          Eksplore Now !
        </button>
      </div>
    </div>
  </div>
</template>
