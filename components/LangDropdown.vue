<template>
  <yl-dropdown class='cursor' @command="switchLang" trigger="click">
      <span>{{currentLangName}}<i class="yl-icon-arrow-down"></i></span>
      <yl-dropdown-menu slot="dropdown">
          <yl-dropdown-item v-for="({lang, name}, index) in langs" :key="index" :command="lang">
              {{name}}
          </yl-dropdown-item>
      </yl-dropdown-menu>
    </yl-dropdown>
</template>
<script>
import langs from '@/i18n/config.json'; // !1.0 获取所有可选语言langs
import { getI18nLanguage } from '@/utils/lang'; // !2.0 获取当前语言值lang
import CookieHelper from '@/utils/cookieHelper';
import constant from '@/utils/constant';
export default {
  data() {
    return {
      currentLangName: '',
      langs,
    }
  },
  created () {
    if (!this.$isServer) {
      const lang = getI18nLanguage();
      this.setCurrentLangName(lang)
    }
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
      CookieHelper.setCookie(constant.LANGUAGE, lang, 0.83);
      this.setCurrentLangName(lang)

    },
    setCurrentLangName(lang) {
      this.currentLangName = langs.find(_ => _.lang === lang).name
    },
  }
}
</script>
<style lang='scss'>
</style>