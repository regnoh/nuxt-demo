<template>
  <div class="top-nav-container" ref="mobileNavRef">
    <!-- logo -->
    <div class="nav-logo">
      <i class="iconfont icon-logowenzi" />
    </div>
    <!-- 展开的导航： pc -->
    <div class="nav-menu-expand">
      <!-- 左侧: SPA -->
      <div class="nav-left">
        <yl-menu :default-active="activeIndex" mode="horizontal" router @select="handleSelect">
          <yl-submenu index="1">
            <template slot="title">产品</template>
            <yl-menu-item index="2-1">选项1</yl-menu-item>
            <yl-menu-item index="2-2">选项2</yl-menu-item>
            <yl-menu-item index="2-3">选项3</yl-menu-item>
          </yl-submenu>
          <yl-menu-item index="3">消息中心</yl-menu-item>
          <yl-menu-item index="4">消息中心</yl-menu-item>
          <yl-menu-item>
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </yl-menu-item>
        </yl-menu>
      </div>
      <!-- 右侧: MPA -->
      <div class="nav-right">
        <a class='nav-right-item' href="https://www.ele.me" target="_blank">订单管理</a>
        <a class='nav-right-item' href="https://www.ele.me" target="_blank">订单管理</a>
        <yl-dropdown class='cursor' @command="setLang" trigger="click">
          <span class="language-title">{{currentLangName}}<i class="yl-icon-arrow-down"></i></span>
          <yl-dropdown-menu slot="dropdown">
              <yl-dropdown-item v-for="(language, index) in languages" :key="index" :command="language.lang">
                  {{language.name}}
              </yl-dropdown-item>
          </yl-dropdown-menu>
        </yl-dropdown>
        <yl-button type="primary" round size="medium">免费注册</yl-button>
      </div>
    </div>
    <!-- 折叠的导航： mobile -->
    <div class="nav-menu-collapse">
      <!-- 左侧注册按钮 -->
      <yl-button type="primary" size="large">免费注册</yl-button>
      <!-- 右侧折叠菜单icon -->
      <i class="iconfont icon-list"></i>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: this.$route.path,
      currentLangName: '简体中文',
      languages: [
        {
          name: '简体中文',
          lang: 'zh'
        },
        {
          name: '英文',
          lang: 'en'
        },
      ]
    };
  },
  computed: {
    ...mapState({
      topLeftNav: state => state.common.topLeftNav,
      topRightNav: state => state.common.topRightNav
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    setLang(lang){
      // i18n.setI18nLanguage(lang, true) // !内部调用 i18n.locale = lang;... 动态切换语言
      console.log(this.languages.filter(_ => _.lang === lang));
      this.currentLangName = this.languages.filter(_ => _.lang === lang)[0].name
    }
  }
};
</script>
<style lang='scss'>
a {
  text-decoration: none;
}
.cursor {
  cursor: pointer;
}
.top-nav-container {
  height: 64px;
  background: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .nav-logo {
    margin-right: 80px;
    .iconfont {
      font-size: 42px;
      color: $--color-primary;
    }
  }
  .nav-menu-expand {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .nav-left {
      flex: none;
      font-weight: 600;
    }
    .nav-right {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .nav-right-item {
        color: #000;
        border-right: 1px solid $--color-primary;
        display: inline-block;
        padding: 0 14px;
        &:nth-child(3) {
          border-right: none;
          margin-right: 20px
        }
      }
    }
  }
  .nav-menu-collapse {
    display: none;
  }
}
@media screen and (max-width: 1350px) {
    .top-nav-container {
      padding: 0 20px;
      .nav-logo {
        margin-right: 40px;
      }
      
      .yl-submenu__title {
        padding: 0 15px;
      }
      

    }
  }
@media screen and (max-width: 768px) {
  .top-nav-container {
    .nav-menu-expand {
      display: none;
    }
    .nav-menu-collapse {
      width: 150px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon-list {
        font-size: 30px;
      }
    }
  }
}
</style>