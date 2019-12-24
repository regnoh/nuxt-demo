import languages from '@/i18n/config.json';
import CookieHelper from '@/utils/cookieHelper';

/***
 * 获取当前语言值
 * @returns {*}
 */
export const getI18nLanguage = () => {
  const DEFAULT_LANGUAGE = 'zh';

  // 首先使用cookie当中的lang配置
  let lang = CookieHelper.getCookie('language');

  // 其次使用url传参中的lang
  if (!lang) {
    const REG = window.location.search.substr(1).match(new RegExp("(^|&)" + 'language' + "=([^&]*)(&|$)", "i"));
    lang = REG !== null ? unescape(REG[2]) : null;
  }

  // 再者使用浏览器中默认语言
  // 最后使用默认lang：English
  if (!lang) {
    if (window.navigator.language) {
      if (window.navigator.language === 'zh-TW') {
        lang = 'tw';
      } else if (window.navigator.language === 'zh-CN') {
        lang = 'zh';
      } else {
        lang = window.navigator.language;
      }
    } else {
      lang = DEFAULT_LANGUAGE;
    }
  }

  return languages.some(x => x.lang === lang) ? lang : DEFAULT_LANGUAGE;
};
