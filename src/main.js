import { createApp } from 'vue';
import Music from './Music.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import './includes/firebase';
import './assets/tailwind.css';
import './assets/main.css';

const app = createApp(Music);

app.use(store);
app.use(router);
app.use(VeeValidatePlugin);

app.mount('#app');
