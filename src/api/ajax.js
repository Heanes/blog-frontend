import axios from 'axios';

// import {Message, Notification} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 添加一个请求拦截器
axios.defaults.baseURL = '/api/';   // 从api去获取
// axios.defaults.baseURL = 'http://localhost:10086/';   // 从api去获取
// axios.defaults.timeout = 5000;
var loadinginstace;
// axios.defaults.withCredentials=true
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
function handleResponse (response, callback) {
  if (response.data && response.data.code === 0) {
    callback && callback(response.data);
    return response.data;
  } else {
    /* Notification.error({
      title: '提示',
      message: response.data.msg,
      duration: 10000
    }); */
    alert(response.data.msg);

    return null;
  }
}

/**
 * @doc 处理异常
 * @param error
 * @returns {null}
 */
function handleAxiosException (error) {
  let msg = `'${error.config.url}' ${error.message}`;
  /* Notification.error({
    title: '提示',
    message: msg,
    duration: 10000
  }); */
  alert(msg);
  console.log(error);

  return null;
}

export default {
  get (url, params, callback) {
    // params.params.user_token = getToken();
    return axios.get(url, params).then(response => {
      return handleResponse(response, callback);
    }).catch(function (error) {
      return handleAxiosException(error);
    });
  },
  post (url, params, callback) {
    return axios.post(url, params).then(response => {
      return handleResponse(response, callback);
    }).catch(function (error) {
      return handleAxiosException(error);
    });
  }
};
