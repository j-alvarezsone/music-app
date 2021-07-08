import { createApp } from 'vue';
import Music from './Music.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';

const app = createApp(Music);

app.use(store);
app.use(router);

app.mount('#app');
