import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import request from './utils/request';
Vue.config.productionTip = false;

// get
export function get(params: any) {
  return request({
    url: '/api/getSomething',
  });
}

// post
export function post(params: any) {
  return request({
    url: '/api/postSomething',
    method: 'post',
    data: params,
  });
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
