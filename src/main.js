// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../style/theme/index.css'
import axios from "axios";
import qs from 'qs';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VueCookies from 'vue-cookies'
import {
  fetch,
  post,
  patch,
  put
} from '@/utils/http'
import {
  validatePhoneNum,
  validateEmail,
  validateURL,
  validateLowerCase,
  validateUpperCase,
  validatAlphabets
} from '@/utils/validate'

// import Router from 'vue-router'

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(VueCookies);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$validatePhoneNum = validatePhoneNum;
Vue.prototype.$validateEmail = validateEmail;
Vue.prototype.$validateURL = validateURL;
Vue.prototype.$validateLowerCase = validateLowerCase;
Vue.prototype.$validateUpperCase = validateUpperCase;
Vue.prototype.$validatAlphabets = validatAlphabets;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
