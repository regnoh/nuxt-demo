<template>
  <div class="top-nav-container" ref="mobileNavRef">
    <!-- logo -->
    <div class="nav-logo">
      <i class="iconfont icon-logowenzi" />
    </div>
    <!-- 展开的导航： pc -->
    <div class="nav-menu-expand">
      <!-- 左侧 -->
      <div class="nav-left">ads</div>
      <!-- 右侧 -->
      <div class="nav-right">
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
export default {
  name: "Header"
};
</script>
<style lang='scss'>
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
      width: 500px;
      background: red;
    }
    .nav-right {
      width: 300px;
      background: green;
    }
  }
  .nav-menu-collapse {
    display: none;
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