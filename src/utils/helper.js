/**
 * @doc 帮助类
 * @returns {any}
 * @constructor
 */

/**
 * @doc 获取URL参数
 * @param name
 * @returns {string | null}
 * @author Heanes
 * @time 2019-02-24 19:44:33 周日
 */
export function getUrlKey(name) {
  return decodeURIComponent(
    (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [null, ''])[1].replace(/\+/g, '%20')
  ) || null;
}

/**
 * @doc 解析url相关信息
 * @returns {Object}
 * @constructor
 * @author Heanes
 * @time 2017-08-21 20:14:21 周一
 */
export function parseURLInfo (url) {
  let a = document.createElement('a');
  a.href = url;
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function () {
      let ret = {};
      let seg = a.search.replace(/^\?/, '').split('&');
      let len = seg.length; let i = 0; let s;
      for (; i < len; i++) {
        if (!seg[i]) {
          continue;
        }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
      }
      return ret;
    })()
  }
}
