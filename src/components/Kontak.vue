<template>
  <div class="grid grid-cols-12 lg:mx-20" data-aos="fade-up">
    <div class="col-span-12 px-5 md:col-span-10 md:col-start-2">
      <h3 class="text-2xl font-semibold text-primary lg:text-[2rem] lg:mt-14">KONTAK KAMI</h3>
      <p class="text-paragraph text-sm text-justify mt-3 lg:text-[1.1rem] lg:leading-7">
        Kami siap membantu Anda! Jangan ragu untuk menghubungi kami untuk informasi lebih
        lanjut tentang budaya, pariwisata, atau kerjasama lainnya . Silakan gunakan
        formulir kontak di bawah ini atau hubungi kami melalui sosial media yang tertera.
        Kami akan dengan senang hati merespons setiap pertanyaan atau masukan yang Anda
        sampaikan.
      </p>
    </div>
    <div class="col-span-12 px-5 mt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-5 md:col-start-7 lg:col-span-5 lg:col-start-7 md:order-3">
          <form action="" class="flex flex-col w-full gap-4" method="post">
           <div class="gap-3 lg:flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Nama Anda"
              class="w-full px-3 py-2 mb-3 text-sm rounded-lg outline-none lg:mb-0 ring-1 ring-primary"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Anda"
              class="w-full px-3 py-2 text-sm rounded-lg outline-none ring-1 ring-primary"
            />
           </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Masukan Pesan"
              class="w-full px-3 py-2 text-sm rounded-lg outline-none resize-none ring-1 ring-primary"
            ></textarea>
            <button class="w-full py-2 text-white rounded-lg bg-gradient-primary" aria-label="kirim-pesan">
              Kirim
            </button>
          </form>
        </div>
      <div class="col-span-12 md:px-0 md:col-span-4 md:order-2 md:col-start-2 lg:col-span-3 lg:col-start-2 ">
        <h4 class="mt-5 mb-3 text-xl font-semibold text-primary md:mt-0">Sosial Media</h4>
        <div class="flex justify-between md:block lg:flex">
          <div class="">
            <a href="https://web.facebook.com/ahmad.sutrio.5/" target="_blank" class="flex items-center gap-2">
              <img
                src="../components/icons/ic_baseline-facebook.svg"
                alt="facebook"
                title="facebook"
                class="size-12"
              />
              <span class="text-[1rem] text-primary font-semibold">Ahmad Sutrio</span>
            </a>
            <a href="https://www.instagram.com/with_yooo/" target="_blank" class="flex items-center gap-2">
              <img  loading="lazy" src="../components/icons/ri_instagram-fill.svg" alt="instagram" title="instagram" class="size-12" />
              <span class="text-[1rem] text-primary font-semibold">With_yooo</span>
            </a>
          </div>
          <div class="">
            <a href="https://github.com/ahmadsutrio" target="_blank" class="flex items-center gap-2">
              <img  loading="lazy" src="../components/icons/ri_github-fill.svg" alt="github" title="github" class="size-12" />
              <span class="text-[1rem] text-primary font-semibold">ahmadsutrio</span>
            </a>
            <a href="https://www.linkedin.com/in/ahmad-sutrio-040339226/" target="_blank" class="flex items-center gap-2">
              <img  loading="lazy" src="../components/icons/mdi_linkedin.svg" alt="linkedin" title="linkedin" class="size-12" />
              <span class="text-[1rem] text-primary font-semibold">ahmadsutrio</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    <div class="w-full py-3 mt-10 text-center bg-gradient-primary">
      <span class="block text-sm text-white md:hidden"
        >©️ Copyright 2024 with_yoo <br />
        Web design and development</span
      >
      <span class="hidden text-sm text-white md:block"
        >©️ Copyright 2024 with_yoo  |  Web design and development</span
      >
    </div>
</template>
