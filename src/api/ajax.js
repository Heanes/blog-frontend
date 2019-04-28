import axios from 'axios';
import siteConfig from '../config/index.js';

// import {Message, Notification} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 添加一个请求拦截器
axios.defaults.baseURL = siteConfig.getApiServerUrl();
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.timeout = 5000;
var loadinginstace;
// axios.defaults.withCredentials=true

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // element ui Loading方法
    // loadinginstace = Loading.service({ fullscreen: true })
    return config;
  },
  error => {
    loadinginstace.close();
    /* Message.error({
     message: '加载超时'
     }); */
    alert('加载超时');
    return Promise.reject(error);
  }
);

// 添加一个响应拦截器
axios.interceptors.response.use(
  function (res) {
    // loadinginstace.close()
    // 在这里对返回的数据进行处理
    return res;
  },
  function (err) {
    // Do something with response error
    return Promise.reject(err);
  }
);

/**
 * @doc 处理返回结果
 * @param response
 * @param callback
 * @returns {*}
 */
function handleAxiosResponse (response, callback) {
  if (response.data && response.data.code === 0) {
    callback && callback(response.data);
    return response.data;
  } else {
    let msg = `query '${response.config.url}' error: ${response.data.msg}`;
    /* Notification.error({
     title: '提示',
     message: response.data.msg,
     duration: 10000
     }); */
    // alert(msg);

    return response;
  }
}

/**
 * @doc 处理异常
 * @param error
 * @returns {null}
 */
function handleAxiosException (error) {
  let msg = `query '${error.config.url}' error: ${error.message}`;
  /* Notification.error({
   title: '提示',
   message: msg,
   duration: 10000
   }); */
  // alert(msg);
  console.log(error);

  return error;
}

export default {
  // 允许的ajax方法
  allowMethod: ['get', 'post'],
  get (url, params, callback) {
    return axios.get(url, params).then(response => {
      return handleAxiosResponse(response, callback);
    }).catch(function (error) {
      return handleAxiosException(error);
    });
  },
  post (url, params, callback, config) {
    return axios.post(url, params, config).then(response => {
      return handleAxiosResponse(response, callback);
    }).catch(function (error) {
      return handleAxiosException(error);
    });
  },
  /**
   * @doc 根据配置生成api方法
   * @param source url
   * @param serverBasePath 基础地质
   * @param target 绑定目标
   * @param method 请求类型，get、post等
   */
  makeApiMethod (source, serverBasePath = '/', target, method) {
    let getApiNames = Object.keys(source);
    getApiNames.forEach(apiName => {
      // 生成一个方法，params为参数，callback为回调函数，config为调用的其他配置
      target[apiName] = (params, callBack, config) => {
        method = this.allowMethod.includes(method) ? method : this.allowMethod[0];
        // method = 'get';

        // axios调用get时，需要包一层{params: param}，这里统一一下
        if(method === 'get'){
          params = {'params': params};
        }
        return this[method](serverBasePath + source[apiName], params, callBack, config);
      }
    });
  }
};
