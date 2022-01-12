import axios from 'axios';
import vvic from 'vvic-common';

// 创建axios实例
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const config = {
  baseURL: window.location.protocol + '//' + window.location.host, // api的base_url
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};
const http = axios.create(config);

// request拦截器
http.interceptors.request.use(
  (config) => {
    config.cancelToken = source.token;
    //该处为以后token使用

    // if (process.env.NODE_ENV === 'development' && !vvic.cookie.get('ltoken')) {
    //     source.cancel();
    //     return axios.post('/apic/login', `username=${process.env.VUE_APP_LOGIN_USERNAME}&password=${process.env.VUE_APP_LOGIN_PWD}`, {
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //     }).then(res => {
    //         return config;
    //     })
    //     .finally(() => {
    //         config.cancelToken = null;
    //     });
    // } else {
    //     return config;
    // }

    if (config.url.indexOf('/shopc/xggg') > -1 || config.url.indexOf('/shopc/shop') > -1) {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    } else if (config.headers['Content-Type'] != 'application/json;charset=UTF-8') {
      config.transformRequest = [
        function (data) {
          let ret = '';
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
          }
          return ret.replace(/&$/g, '');
        },
      ];
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// respone拦截器
http.interceptors.response.use(
  (response) => {
    // 页面拦截
    if (response.headers['content-type'] === 'text/html;charset=UTF-8') {
      window.location.href = response.request.responseURL;
      return Promise.reject(response);
    }

    const res = response.data,
      showErr = Object.prototype.hasOwnProperty.call(response.config, 'showErr')
        ? response.config.showErr
        : true;
    if (res.code == 401) {
      vvic.utils.goLogin(location.href);
      return Promise.reject(res);
    }
    //档口侧，余额不足，对工单进行拆包验货，刷新页面
    if (res.code == 201) {
      return Promise.reject(res);
    }
    // 档口发货特殊验证码 不显示
    if (res.code == 3007 || res.code == 4007 || res.code == 1007) {
      return Promise.reject(res);
    }
    if (Object.prototype.hasOwnProperty.call(res, 'code') && parseInt(res.code) !== 200) {
      // showErr && Message.error(res.message || '系统错误，请联系管理员')
      showErr && console.error(res.message || '系统错误，请联系管理员');
      return Promise.reject(res);
    } else {
      return response.config.responseAll || !response.data.data
        ? response.data
        : response.data.data;
    }
  },
  (error) => {
    if (error.response.status == 401) {
      vvic.utils.goLogin(location.href);
    }
    return Promise.reject(error);
  },
);

window.http = http;
