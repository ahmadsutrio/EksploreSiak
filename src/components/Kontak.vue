<template>
  <div class="grid grid-cols-12 lg:mx-20">
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
    <div class="col-span-12  px-5 mt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-12  md:col-span-5 md:col-start-7 lg:col-span-5 lg:col-start-7 md:order-3">
          <form action="" class="w-full flex flex-col gap-4" method="post">
           <div class="lg:flex gap-3">
            <input
              type="text"
              name=""
              id=""
              placeholder="Nama Anda"
              class="py-2 px-3 text-sm outline-none ring-1 ring-primary rounded-lg w-full"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Anda"
              class="py-2 px-3 text-sm outline-none ring-1 ring-primary rounded-lg w-full"
            />
           </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Masukan Pesan"
              class="resize-none py-2 px-3 text-sm outline-none ring-1 ring-primary rounded-lg w-full"
            ></textarea>
            <button class="bg-gradient-primary w-full py-2 rounded-lg text-white">
              Kirim
            </button>
          </form>
        </div>
      <div class="col-span-12 md:px-0 md:col-span-4 md:order-2 md:col-start-2 lg:col-span-3 lg:col-start-2 ">
        <h4 class="text-xl text-primary font-semibold mt-5 md:mt-0  mb-3">Sosial Media</h4>
        <div class="flex justify-between md:block lg:flex">
          <div class="">
            <a href="" class="flex items-center gap-2">
              <img
                src="../components/icons/ic_baseline-facebook.svg"
                alt=""
                class="w-12"
              />
              <span class="text-[1rem] text-primary font-semibold">Ahmad Sutrio</span>
            </a>
            <a href="" class="flex items-center gap-2">
              <img src="../components/icons/ri_instagram-fill.svg" alt="" class="w-12" />
              <span class="text-[1rem] text-primary font-semibold">With_yoo</span>
            </a>
          </div>
          <div class="">
            <a href="" class="flex items-center gap-2">
              <img src="../components/icons/ri_github-fill.svg" alt="" class="w-12" />
              <span class="text-[1rem] text-primary font-semibold">ahmadsutrio</span>
            </a>
            <a href="" class="flex items-center gap-2">
              <img src="../components/icons/mdi_linkedin.svg" alt="" class="w-12" />
              <span class="text-[1rem] text-primary font-semibold">ahmadsutrio</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    <div class="w-full bg-gradient-primary py-3 mt-10 text-center">
      <span class="text-white text-sm md:hidden block"
        >©️ Copyright 2024 with_yoo <br />
        Web design and development</span
      >
      <span class="text-white text-sm hidden md:block"
        >©️ COpyright 2024 with_yoo  |  Web design and development</span
      >
    </div>
</template>
