import Vue       from 'vue'
import App        from './App.vue'
import VueRouter  from 'vue-router';
import { routes } from './router';

Vue.use(VueRouter);


const router = new VueRouter({
  mode:'history',
  routes:routes
});


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
