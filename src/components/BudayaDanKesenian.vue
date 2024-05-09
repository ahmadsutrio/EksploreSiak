<template>
  <div
    class="min-w-full grid grid-cols-12 px-5 border-t-2 border-b-2 border-dashed relative border-primary py-10 lg:py-0 lg:pb-20 lg:pt-14"
  >
    <h3
      class="text-3xl lg:hidden block col-span-12 md:col-start-2 md:col-span-10 text-primary font-semibold"
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
      class="flex overflow-x-auto md:justify-center lg:justify-start lg:ms-20 col-span-12 md:flex-wrap md:col-start-2 md:col-span-10 lg:gap-10 gap-5 mt-6"
    >
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img src="../assets/img/tenun.png" alt="" class="w-full h-full scale-110" />
          <div
            class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img src="../assets/img/marwas.png" alt="" class="w-full h-full scale-110" />
          <div
            class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img src="../assets/img/zapin.png" alt="" class="w-full h-full scale-110" />
          <div
            class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img
            src="../assets/img/bolukomojo.png"
            alt=""
            class="w-full h-full scale-110"
          />
          <div
            class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img src="../assets/img/asampedas.png" alt="" class="w-full h-full scale-110" />
          <div
            class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
          ></div>
        </div>
      </div>
      <div class="w-48 lg:w-[20rem] lg:h-[20.7rem]">
        <div
          class="border-8 border-primary w-48 lg:w-[20rem] lg:h-[20.7rem] h-52 relative overflow-hidden"
        >
          <img src="../assets/img/serindit.png" alt="" class="w-full h-full scale-110" />
          <div
            class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-5 md:py-5 grid overflow-hidden grid-cols-12 lg:mx-16  grid-rows-1 relative">
    <div
      class="col-span-12 lg:col-span-10 lg:col-start-2 border-heading mx-5 md:mx-8 grid grid-cols-12 relative"
    >
      <div
        class="absolute top-0 lg:-bottom-[33.5rem] -bottom-[32rem] z-50 md:-bottom-[26rem] lg:-right-11 lg:-left-11 -right-6 -left-6 flex justify-between items-center"
      >
        <button
          class="size-14 lg:size-20 bg-primary flex justify-center items-center bg-opacity-30 rounded-full"
          @click="backCard()"
        >
          <img src="../components/icons/left.svg" alt="" class="w-5 "  />
        </button>
        <button
          class="size-14 lg:size-20 bg-primary flex justify-center items-center bg-opacity-30 rounded-full"
          @click="nextCard()"
        >
          <img src="../components/icons/right.svg" alt="" class="w-5 "  />
        </button>
      </div>
    </div>

    <!-- card -->
    <div
      class="col-span-12 animate__animated text-center border border-opacity-20 shadow-lg lg:col-span-10 lg:col-start-2 border-heading m-5 md:m-8 p-4 md:py-7 grid grid-cols-12 relative"
      v-show="number_card === 1"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
    >
      <div
        class="col-span-12 md:col-span-6 content-center md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 text-center md:text-start"
      >
        <h4
          class="text-lg font-semibold text-heading border-b-4 border-primary inline pb-2 lg:text-3xl"
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
        class="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center mt-5 md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img src="../assets/img/zapin.png" alt="" class="w-full h-full scale-110" />
            <div
              class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-3 md:hidden block">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="col-span-12 text-center border animate__animated border-opacity-20 shadow-lg lg:col-span-10 lg:col-start-2 border-heading m-5 md:m-8 p-4 md:py-7 grid grid-cols-12 relative"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 2"
    >
      <div
        class="col-span-12 md:col-span-6 content-center md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 text-center md:text-start"
      >
        <h4
          class="text-lg font-semibold text-heading border-b-4 border-primary inline pb-2 lg:text-3xl"
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
        class="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center mt-5 md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img src="../assets/img/tenun.png" alt="" class="w-full h-full scale-110" />
            <div
              class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-3 md:hidden block">
        <p class="text-sm text-justify text-paragraph">
         {{desc_card}}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="col-span-12 text-center border animate__animated border-opacity-20 shadow-lg lg:col-span-10 lg:col-start-2 border-heading m-5 md:m-8 p-4 md:py-7 grid grid-cols-12 relative"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 3"
    >
      <div
        class="col-span-12 md:col-span-6 content-center md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 text-center md:text-start"
      >
        <h4
          class="text-lg font-semibold text-heading border-b-4 border-primary inline pb-2 lg:text-3xl"
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
        class="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center mt-5 md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img src="../assets/img/marwas.png" alt="" class="w-full h-full scale-110" />
            <div
              class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-3 md:hidden block">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="col-span-12 text-center border animate__animated border-opacity-20 shadow-lg lg:col-span-10 lg:col-start-2 border-heading m-5 md:m-8 p-4 md:py-7 grid grid-cols-12 relative"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 4"
    >
      <div
        class="col-span-12 md:col-span-6 content-center md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 text-center md:text-start"
      >
        <h4
          class="text-lg font-semibold text-heading border-b-4 border-primary inline pb-2 lg:text-3xl"
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
        class="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center mt-5 md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img src="../assets/img/bolukomojo.png" alt="" class="w-full h-full scale-110" />
            <div
              class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-3 md:hidden block">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="col-span-12 text-center border animate__animated border-opacity-20 shadow-lg lg:col-span-10 lg:col-start-2 border-heading m-5 md:m-8 p-4 md:py-7 grid grid-cols-12 relative"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 5"
    >
      <div
        class="col-span-12 md:col-span-6 content-center md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 text-center md:text-start"
      >
        <h4
          class="text-lg font-semibold text-heading border-b-4 border-primary inline pb-2 lg:text-3xl"
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
        class="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center mt-5 md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img src="../assets/img/asampedas.png" alt="" class="w-full h-full scale-110" />
            <div
              class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-3 md:hidden block">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->
    <!-- card -->
    <div
      class="col-span-12 text-center border animate__animated border-opacity-20 shadow-lg lg:col-span-10 lg:col-start-2 border-heading m-5 md:m-8 p-4 md:py-7 grid grid-cols-12 relative"
:class="[{ 'animate__backInRight': isRight }, 'animate__backInLeft']"
      v-show="number_card === 6"
    >
      <div
        class="col-span-12 md:col-span-6 content-center md:ps-7 lg:col-span-6 lg:col-start-1 lg:ps-20 text-center md:text-start"
      >
        <h4
          class="text-lg font-semibold text-heading border-b-4 border-primary inline pb-2 lg:text-3xl"
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
        class="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-8 justify-self-center mt-5 md:mt-0"
      >
        <div class="w-full mx-auto">
          <div
            class="border-8 md:border-[10px] border-primary w-48 lg:w-[26rem] lg:h-[26rem] h-52 md:w-72 md:h-72 relative overflow-hidden"
          >
            <img src="../assets/img/serindit.png" alt="" class="w-full h-full scale-110" />
            <div
              class="border-dashed border-4 m-3 border-white absolute top-0 left-0 right-0 bottom-0"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-3 md:hidden block">
        <p class="text-sm text-justify text-paragraph">
          {{ desc_card }}
        </p>
      </div>
    </div>
    <!-- endcard -->

    <div class="col-span-12 flex justify-center items-center gap-3 lg:mt-5 mt-2 md:mt-2">
      <div class="size-4 bg-primary bg-opacity-60 rounded-full cursor-pointer"  @click="backCard()"></div>
      <div class="size-5 bg-primary bg-opacity-60 rounded-full cursor-pointer"></div>
      <div class="size-4 bg-primary bg-opacity-60 rounded-full cursor-pointer"  @click="nextCard()"></div>
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
