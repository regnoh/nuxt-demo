class CookieHelper {
  static deleteCookie(name) {
    let date = new Date();
    date.setTime(date.getTime() - 10000); // !已过期，自动删除
    // document.cookie = name + "=v; expires=" + date.toGMTString() + ";path=/";// !toGMTString is deprecated, use toUTCString() instead.
    document.cookie = name + "=v; expires=" + date.toUTCString() + ";path=/";// ! toUTCString: 返回使用UTC时区表示给定日期的字符串
  }

  static setCookie(name, value, expiresDays = 10) {
    //设置之前先删除
    CookieHelper.deleteCookie(name);
    //获取当前时间
    let date = new Date();
    //将date设置为10天以后的时间
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
    //cookie设置为10天后过期
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + ";path=/";  // !cookie格式
  }

  static getCookie(name) {
    let strCookie = document.cookie;
    let arrCookie = strCookie.split("; ");
    for (let i = 0; i < arrCookie.length; i++) {
      let arr = arrCookie[i].split("=");
      if (arr[0] === name) {
        return arr[1];
      }
    }
    return "";
  }

  static getCookies(name) {
    let strCookie = document.cookie;
    let arrCookie = strCookie.split("; ");
    for (let i = 0; i < arrCookie.length; i++) {
      let arr = arrCookie[i].split("=");
      if (arr[0] === name) {
        return arrCookie[i].substring(arrCookie[i].indexOf("=") + 1);
      }
    }
    return "";
  }
}

export default CookieHelper;
// !由于服务器指定Cookie后，浏览器的每次请求都会携带Cookie数据，会带来额外的性能开销（Cookie渐渐被淘汰), 现在使用localStorage代替