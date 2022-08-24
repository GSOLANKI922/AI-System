import { createApp,h } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

const app = createApp({
    render: () => h(App)
  });
app.use(PrimeVue);
app.mount('#app')
