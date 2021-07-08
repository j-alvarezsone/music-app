import { createApp } from 'vue';
import Music from './Music.vue';
import router from './router';
import store from './store';

createApp(Music).use(store).use(router).mount('#app');
