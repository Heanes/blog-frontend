/**
 * @doc localStorage 处理工具
 * @type {Storage | {}}
 * @author Heanes
 * @time 2019-05-12 15:46:49 周日
 */

const localStorage = window.localStorage || {};

class LocalStorage {
  /**
   * @doc 设置值
   * @param key
   * @param data
   * @author Heanes
   * @time 2019-04-24 23:12:55 周三
   */
  static setItem (key, data) {
    if (Object.prototype.toString.apply(data) === '[object Object]') {
      data = JSON.stringify(data);
    }
    localStorage[key] = data;
  }

  /**
   * @doc 获取值
   * @param key
   * @returns {any | null}
   * @author Heanes
   * @time 2019-04-24 23:13:12 周三
   */
  static getItem (key) {
    let value = localStorage[key] || null;
    if (value) {
      try {
        value = JSON.parse(value);
      } catch (e) {
        value = null;
      }
    }
    return value;
  }

  /**
   * @doc 移除某项存储
   * @param key
   * @author Heanes
   * @time 2019-05-11 21:50:25 周六
   */
  static removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.log('localStorage removeItem key: "' + key + '" error ', e);
    }
  }

  /**
   * @doc 清除所有localStorage
   * @author Heanes
   * @time 2019-05-11 21:51:18 周六
   */
  static clear(){
    try {
      localStorage.clear();
    } catch (e) {
      console.log('localStorage clear error ', e);
    }
  }

  /**
   * @doc 测试是否能使用localStorage
   * @returns {boolean}
   * @author Heanes
   * @time 2019-04-24 23:13:58 周三
   */
  static get enable () {
    if (!window.localStorage) return false;
    let e = true;
    try {
      window.localStorage.setItem('test', 'enable');
    } catch (ex) {
      e = false;
    }

    return e;
  }
}

/**
 * @see 计算localStorage size https://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage
 */

export default LocalStorage;
