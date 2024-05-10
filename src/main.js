import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS untuk AOS

import './assets/css/style.css'; // Import file CSS lainnya jika diperlukan
import 'animate.css'; // Import animate.css jika diperlukan

// Inisialisasi AOS
AOS.init();

// Membuat aplikasi Vue.js dan memasang komponen App ke dalam elemen dengan id 'app'
createApp(App).mount('#app');
