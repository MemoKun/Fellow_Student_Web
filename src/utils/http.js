import axios from 'axios'
import router from '../router/index.js'
import store from '../store/index.js'
import {
  Message
} from 'element-ui'
import {
  setToken,
  removeToken
} from './auth.js';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://39.100.52.175:8080';
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    //登录和注册不需要加token
    if(config.url==="/account/login"||config.url==="/account/register"){}
    else{
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('Authorization')}`;
      }
    }
    
    // console.log('config',config);
    return config
  },
  error => {
    if (error.response) {
      Message({
        message: "加载超时",
        type: 'error'
      });
      return Promise.reject(error)
    }
  }
);

/* http response 拦截器 */
axios.interceptors.response.use(
  response => {
    let token;
    if (response.headers.authorization) {
      token = response.headers.authorization;
    }
    if (token) {
      // store.dispatch('refreshToken',token)
      this.$store.dispatch('refreshToken', token)
    }
    return response.data
  },
  error => {
     if (error.response) {
       //只要报错就清空token
       switch (error.response.status) {
         case 401:
           console.log(error.response.data.extra.message);
           // removeToken();
           //可以监控到所有的401错误
           // console.log(error.response);
           //清空cookie和token
           store.dispatch('DelToken');
           Message.error({
             message: '身份验证已过期，请重新登录'
           });
           router.replace({
             path: '/login',
             query: {redirect: router.currentRoute.fullPath}
           });

        case 500:
            console.log(error.response.data.base.extra.message);
            Message.error({
              message: error.response.data.base.extra.message
            });
       }
       // store.dispatch('DelToken');
     }else{
       return Promise.reject(error)
     }
    // console.log(error.response);
    if (error.response) {
      if (error.response.data.message == "The token has been blacklisted") {
        // store.dispatch('DelToken');
        this.$store.dispatch('DelToken');
        /*router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        });*/
        router.replace("/login");
        Message.error('身份验证已过期，请重新登录');
        return
      } else {
        return Promise.reject(error)
      }
    }
  });

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, this.$qs.stringify(data))
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    // axios.put(url,{data: this.$qs.stringify(data)})
    axios.put(url, this.$qs.stringify(data))
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function del(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
        data: this.$qs.stringify(data)
      })
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
