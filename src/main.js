import { createApp } from "vue";
import App from "./App.vue";
import { loadFonts } from "./plugins/webfontloader";
import vuetify from './plugins/vuetify';
// router
import { createRouter, createWebHistory } from 'vue-router';
// material-desgin 套件
import "@material/web/all"
import '@material/web/field/filled-field'
//material icon 
import "material-symbols/outlined.css";
import "material-symbols/rounded.css";
import "material-symbols/sharp.css";

import "bootstrap/scss/bootstrap-grid.scss";

// router連結
import LoginPage from './components/login.vue';
import HomePage from './components/homepage.vue';

const routes = [
    { path: '/', component: LoginPage },
    { path: '/HomePage', component: HomePage },
   
  ];
  
  const router = createRouter({
    history: createWebHistory('/operator/'),
    routes,
  });


loadFonts();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
