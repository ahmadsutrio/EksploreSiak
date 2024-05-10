<template>
  <div 
    class="relative grid min-w-full grid-cols-12 px-5 py-10 border-t-2 border-b-2 border-dashed border-primary lg:py-0 lg:pb-20 lg:pt-14"
  >
    <h3
      class="block col-span-12 text-3xl font-semibold lg:hidden md:col-start-2 md:col-span-10 text-primary"
    >
      Kesenian dan <br />Budaya Khas Siak
    </h3>
    <h3
      class="text-center md:text-start hidden col-span-12 lg:col-span-10 lg:col-start-2 lg:mx-20 md:col-start-2 lg:block font-semibold lg:font-bold text-3xl lg:text-[2.5rem] mt-3 text-primary"
    >
      Kesenian dan
    </h3>
    <h3
      class="text-center md:text-start hidden col-span-12 lg:col-span-10 lg:col-start-2 lg:mx-20 md:col-start-2 lg:block font-semibold lg:font-bold text-3xl lg:text-[2.5rem] mt-3 text-primary"
    >
      Budaya Khas Siak
    </h3>
    <p
      class="text-sm text-justify lg:text-[1.1rem] text-paragraph lg:leading-[1.9rem] col-span-12 lg:col-span-10 lg:col-start-2 lg:mx-20 md:col-start-2 md:col-span-10 mt-5"
    >
      Dalam situs ini, Anda akan menemukan informasi yang mendalam tentang beragam
      kesenian dan budaya khas Siak. Dari Tarian Zapin yang memukau, Marwas yang merdu,
      hingga ragam kuliner tradisional yang lezat, semua dijelaskan dengan detail untuk
      memperkaya pemahaman Anda tentang kehidupan budaya di Siak.
    </p>

    <div
      class="flex col-span-12 gap-5 mt-6 overflow-x-auto md:justify-center lg:justify-start lg:ms-20 md:flex-wrap md:col-start-2 md:col-span-10 lg:gap-10"
    >
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img  loading="lazy" src="../assets/img/tenun.webp" alt="image-tenun" title="image-tenun" class="w-full h-full scale-110" />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img  loading="lazy" src="../assets/img/marwas.webp" alt="image-marwas" title="image-marwas" class="w-full h-full scale-110" />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img  loading="lazy" src="../assets/img/zapin.webp" alt="image-zapin" title="image-zapin" class="w-full h-full scale-110" />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img
            src="../assets/img/bolukomojo.webp"
            alt="image-bolukomojo" title="image-bolukomojo"
            class="w-full h-full scale-110"
          />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img  loading="lazy" src="../assets/img/asampedas.webp" alt="image-asampedas" title="image-asampedas" class="w-full h-full scale-110" />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img  loading="lazy" src="../assets/img/serindit.webp" alt="image-serindit" title="image-serindit" class="w-full h-full scale-110" />
          <div
            class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative grid grid-cols-12 grid-rows-1 py-5 overflow-hidden md:py-5 lg:mx-16">
    <div
      class="relative grid grid-cols-12 col-span-12 mx-5 lg:col-span-10 lg:col-start-2 border-heading md:mx-8"
    >
      <div
        class="absolute top-0 lg:-bottom-[33.5rem] -bottom-[32rem] z-50 md:-bottom-[26rem] lg:-right-11 lg:-left-11 -right-6 -left-6 flex justify-between items-center"
      >
        <button
          class="flex items-center justify-center rounded-full size-14 lg:size-20 bg-primary bg-opacity-30"
          @click="backCard()"  aria-label="back-card"
        >
          <img  loading="lazy" src="../components/icons/left.svg" alt="button-left" title="button-left" class="size-7 "  />
        </button>
        <button
          class="flex items-center justify-center rounded-full size-14 lg:size-20 bg-primary bg-opacity-30"
          @click="nextCard()" aria-label="next-card"
        >
          <img  loading="lazy" src="../components/icons/right.svg" alt="button-right" title="button-right" class="size-7 "  />
        </button>
      </div>
    </div>

    <!-- card -->
    <div
      class="relative grid grid-cols-12 col-span-12 p-4 m-5 text-center border shadow-lg animate__animated border-opacity-20 lg:col-span-10 lg:col-start-2 border-heading md:m-8 md:py-7"
      v-show="number_card === 1"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
    >
      <div
        class="content-center col-span-12 text-center md:col-span-6 md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 md:text-start"
      >
        <h4
          class="inline pb-2 text-lg font-semibold border-b-4 text-heading border-primary lg:text-3xl"
        >
          {{ title_card }}
        </h4>
        <p
          class="text-sm text-justify md:mt-6 hidden lg:text-[1.01rem] lg:leading-[2.1rem] md:block text-paragraph"
        >
        {{ desc_card }}
        </p>
      </div>
      <div
        class="col-span-12 mt-5 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img  loading="lazy" src="../assets/img/zapin.webp" alt="image-zapin" title="image-zapin" class="w-full h-full scale-110" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
            ></div>
          </div>
        </div>
      </div>
      <div class="block col-span-12 mt-3 md:hidden">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="relative grid grid-cols-12 col-span-12 p-4 m-5 text-center border shadow-lg animate__animated border-opacity-20 lg:col-span-10 lg:col-start-2 border-heading md:m-8 md:py-7"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 2"
    >
      <div
        class="content-center col-span-12 text-center md:col-span-6 md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 md:text-start"
      >
        <h4
          class="inline pb-2 text-lg font-semibold border-b-4 text-heading border-primary lg:text-3xl"
        >
          {{ title_card }}
        </h4>
        <p
          class="text-sm text-justify md:mt-6 hidden lg:text-[1.01rem] lg:leading-[2.1rem] md:block text-paragraph"
        >
         {{ desc_card }}
        </p>
      </div>
      <div
        class="col-span-12 mt-5 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img  loading="lazy" src="../assets/img/tenun.webp" alt="image-tenun" title="image-tenun" class="w-full h-full scale-110" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
            ></div>
          </div>
        </div>
      </div>
      <div class="block col-span-12 mt-3 md:hidden">
        <p class="text-sm text-justify text-paragraph">
         {{desc_card}}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="relative grid grid-cols-12 col-span-12 p-4 m-5 text-center border shadow-lg animate__animated border-opacity-20 lg:col-span-10 lg:col-start-2 border-heading md:m-8 md:py-7"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 3"
    >
      <div
        class="content-center col-span-12 text-center md:col-span-6 md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 md:text-start"
      >
        <h4
          class="inline pb-2 text-lg font-semibold border-b-4 text-heading border-primary lg:text-3xl"
        >
         {{title_card}}
        </h4>
        <p
          class="text-sm text-justify md:mt-6 hidden lg:text-[1.01rem] lg:leading-[2.1rem] md:block text-paragraph"
        >
          {{ desc_card }}
        </p>
      </div>
      <div
        class="col-span-12 mt-5 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img  loading="lazy" src="../assets/img/marwas.webp" alt="image-marwas" title="image-marwas" class="w-full h-full scale-110" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
            ></div>
          </div>
        </div>
      </div>
      <div class="block col-span-12 mt-3 md:hidden">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="relative grid grid-cols-12 col-span-12 p-4 m-5 text-center border shadow-lg animate__animated border-opacity-20 lg:col-span-10 lg:col-start-2 border-heading md:m-8 md:py-7"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 4"
    >
      <div
        class="content-center col-span-12 text-center md:col-span-6 md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 md:text-start"
      >
        <h4
          class="inline pb-2 text-lg font-semibold border-b-4 text-heading border-primary lg:text-3xl"
        >
         {{title_card}}
        </h4>
        <p
          class="text-sm text-justify md:mt-6 hidden lg:text-[1.01rem] lg:leading-[2.1rem] md:block text-paragraph"
        >
          {{ desc_card }}
        </p>
      </div>
      <div
        class="col-span-12 mt-5 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img  loading="lazy" src="../assets/img/bolukomojo.webp" alt="image-bolukomojo" title="image-bolukomojo" class="w-full h-full scale-110" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
            ></div>
          </div>
        </div>
      </div>
      <div class="block col-span-12 mt-3 md:hidden">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="relative grid grid-cols-12 col-span-12 p-4 m-5 text-center border shadow-lg animate__animated border-opacity-20 lg:col-span-10 lg:col-start-2 border-heading md:m-8 md:py-7"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 5"
    >
      <div
        class="content-center col-span-12 text-center md:col-span-6 md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 md:text-start"
      >
        <h4
          class="inline pb-2 text-lg font-semibold border-b-4 text-heading border-primary lg:text-3xl"
        >
         {{title_card}}
        </h4>
        <p
          class="text-sm text-justify md:mt-6 hidden lg:text-[1.01rem] lg:leading-[2.1rem] md:block text-paragraph"
        >
          {{ desc_card }}
        </p>
      </div>
      <div
        class="col-span-12 mt-5 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img  loading="lazy" src="../assets/img/asampedas.webp" alt="image-asampedas" title="image-asampedas" class="w-full h-full scale-110" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
            ></div>
          </div>
        </div>
      </div>
      <div class="block col-span-12 mt-3 md:hidden">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="relative grid grid-cols-12 col-span-12 p-4 m-5 text-center border shadow-lg animate__animated border-opacity-20 lg:col-span-10 lg:col-start-2 border-heading md:m-8 md:py-7"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 6"
    >
      <div
        class="content-center col-span-12 text-center md:col-span-6 md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 md:text-start"
      >
        <h4
          class="inline pb-2 text-lg font-semibold border-b-4 text-heading border-primary lg:text-3xl"
        >
         {{title_card}}
        </h4>
        <p
          class="text-sm text-justify md:mt-6 hidden lg:text-[1.01rem] lg:leading-[2.1rem] md:block text-paragraph"
        >
          {{ desc_card }}
        </p>
      </div>
      <div
        class="col-span-12 mt-5 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img  loading="lazy" src="../assets/img/serindit.webp" alt="image-srindit" title="image-srindit" class="w-full h-full scale-110" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 m-3 border-4 border-white border-dashed"
            ></div>
          </div>
        </div>
      </div>
      <div class="block col-span-12 mt-3 md:hidden">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->

    <div class="flex items-center justify-center col-span-12 gap-3 mt-2 lg:mt-5 md:mt-2">
      <div class="rounded-full cursor-pointer size-4 bg-primary bg-opacity-60"  @click="backCard()"></div>
      <div class="rounded-full cursor-pointer size-5 bg-primary bg-opacity-60"></div>
      <div class="rounded-full cursor-pointer size-4 bg-primary bg-opacity-60"  @click="nextCard()"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRight: false,
      isLeft: false,
      number_card: 1,
      title_card: "Tarian Zapin",
      desc_card:
        " Langkah elegan Tarian Zapin dari Siak menggambarkan cerita-cerita kuno tentang kehidupan, cinta, dan keberanian. Melalui melodi dan gerakan yang penuh makna, tarian ini tidak hanya menghibur, tetapi juga memperkaya jiwa dengan kearifan turun-temurun. Menyelami Tarian Zapin adalah menggali kekayaan warisan tak ternilai dari Siak, mempersatukan dan menginspirasi generasi masa kini dan masa depan.",
      card_budaya: [
        {
          title: "Tarian Zapin",
          desc:
            " Langkah elegan Tarian Zapin dari Siak menggambarkan cerita-cerita kuno tentang kehidupan, cinta, dan keberanian. Melalui melodi dan gerakan yang penuh makna, tarian ini tidak hanya menghibur, tetapi juga memperkaya jiwa dengan kearifan turun-temurun. Menyelami Tarian Zapin adalah menggali kekayaan warisan tak ternilai dari Siak, mempersatukan dan menginspirasi generasi masa kini dan masa depan.",
        },
        {
          title: "Tenun Khas Batik Siak",
          desc:
            " Tenun batik khas Siak adalah perpaduan sempurna antara kehalusan tekstil tradisional dengan motif-motif yang kaya akan makna filosofis. Setiap corak yang dihasilkan melalui tenun batik menggambarkan cerita sejarah, legenda, dan kehidupan sehari-hari masyarakat Siak. Dari warna-warna yang cerah hingga detail-detail halus yang memukau, tenun batik khas Siak tidak hanya menjadi pakaian, tetapi juga karya seni yang memancarkan keindahan dan kearifan lokal yang mendalam.",
        },
        {
          title: "Alat Musik Marwas",
          desc:
            " Marwas adalah gemerlap suara yang menggetarkan jiwa, menjadi paduan harmonis antara melodi tradisional dengan nuansa modern yang menyegarkan. Instrumen-instrumen klasik seperti rebana, gendang, dan gambus menciptakan alunan musik yang memikat pendengar dari segala usia. Marwas tidak hanya sekadar hiburan, tetapi juga cerminan kekayaan seni dan keindahan budaya yang melekat kuat dalam kehidupan sehari-hari masyarakat Siak. Setiap dentingan nada mengajak kita meresapi keindahan alam dan kearifan lokal yang tercermin dalam setiap irama yang dimainkan.",
        },
        {
          title: "Bolu Komojo",
          desc:
            " Bolu Komojo adalah sajian manis yang menjadi ciri khas kuliner Siak yang lezat dan menggugah selera. Dengan tekstur yang lembut dan cita rasa yang unik, Bolu Komojo mengajak kita untuk merasakan kehangatan dan kelembutan dari setiap gigitannya. Dibuat dengan bahan-bahan lokal yang segar dan dipadu dengan sentuhan tradisional, Bolu Komojo bukan hanya sekadar makanan, tetapi juga simbol kehangatan dan kebersamaan dalam budaya Siak yang ramah dan menyambut.",
        },
        {
          title: "Asam Pedas Ikan Patin",
          desc:
            " Asam Pedas Ikan Patin adalah hidangan yang menggugah selera dan menghadirkan sentuhan pedas segar yang memanjakan lidah. Dari rempah-rempah yang khas hingga bumbu asam yang menyegarkan, Asam Pedas Ikan Patin menghadirkan citarasa unik dari masakan tradisional Riau yang terkenal akan kelezatannya. Setiap suapan membawa kita merasakan keanekaragaman bahan-bahan alami dan keunikan rasa yang hanya ditemukan di daerah ini.",
        },
        {
          title: "Pacu Jalur Serindit",
          desc:
            " Lomba Sampan Serindit adalah ajang yang menggabungkan keahlian, ketangkasan, dan semangat kompetitif dari masyarakat Siak. Di tengah gemerlap danau yang indah, sampan-sampan tradisional bersaing dalam perlombaan yang memukau dan menghibur. Lomba ini bukan hanya tentang siapa yang menjadi juara, tetapi juga tentang semangat persatuan dan kebersamaan dalam menjaga tradisi dan budaya yang telah turun-temurun diwariskan dari generasi ke generasi.",
        },
       
      ],
    };
  },
  methods: {
    nextCard() {
      if (this.number_card < 6) {
        this.number_card++; // Tambahkan nilai number_card sebelum digunakan untuk mengakses data kartu
        this.title_card = this.card_budaya[this.number_card - 1].title; // Gunakan this.number_card - 1 karena indeks dimulai dari 0
        this.desc_card = this.card_budaya[this.number_card - 1].desc;
        this.isRight = true;
        this.isLeft = false;
        console.log(this.number_card);
      }
    },
    backCard() {
      if (this.number_card > 1) {
        this.number_card--; // Kurangkan nilai number_card sebelum digunakan untuk mengakses data kartu
        this.title_card = this.card_budaya[this.number_card - 1].title; // Gunakan this.number_card - 1 karena indeks dimulai dari 0
        this.desc_card = this.card_budaya[this.number_card - 1].desc;
        this.isRight = false; // Pastikan isRight diatur ke false saat backCard dieksekusi
        this.isLeft = true;
        console.log("success");
      }
    },
  },
};
</script>
