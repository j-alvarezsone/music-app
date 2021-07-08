import { createApp } from 'vue';
import Music from './Music.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

createApp(Music).use(store).use(router).mount('#app');
