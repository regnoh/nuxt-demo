import Vue from 'vue';
import VueI18n from 'vue-i18n';
import GleafLocale from 'gleaf/lib/locale';
import CookieHelper from '@/utils/cookieHelper';
import { getI18nLanguage } from '@/utils/lang';
import langs from '@/i18n/config.json';
import constant from '@/utils/constant';
Vue.use(VueI18n);

let lang = process.client ? getI18nLanguage() : 'zh';
const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: lang
});
langs.forEach(lag => {
  let uiLang = lag.lang;
  if (lag.lang === 'zh') {
    uiLang = 'zh-CN';
  }
  i18n.setLocaleMessage(lag.lang, {...require(`@/i18n/lang/${lag.fileName}`).default, ...require(`gleaf/lib/locale/lang/${uiLang}.js`).default});
});
export default (context) => {
  if (process.server) {
    let cookieLang = '';
    let cookies = context.req.headers['cookie'] || '';
    let arrCookie = cookies.split("; ");
    for (let i = 0; i < arrCookie.length; i++) {
      let arr = arrCookie[i].split("=");
      if (arr[0] === 'language') {
        cookieLang = arrCookie[i].substring(arrCookie[i].indexOf("=") + 1);
      }
    }
    if (cookieLang === '') {
      let browserLang = context.req.headers['accept-language'] || '';
      if (browserLang.length > 1) {
        if (browserLang.indexOf('zh-TW') === 0) {
          lang = 'tw';
        } else {
          lang = browserLang.substr(0, 2);
        }
        i18n.locale = lang;
      }
    } else {
      lang = cookieLang;
      i18n.locale = lang;
    }
  }
  context.app.i18n = i18n;
  GleafLocale.i18n((key, value) => context.app.i18n.t(key, value));
  if (process.client) {
    CookieHelper.setCookie(constant.LANGUAGE, lang); 
  }
  return i18n;
}

export const $t = i18n.t.bind(i18n);
