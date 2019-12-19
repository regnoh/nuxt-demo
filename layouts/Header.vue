<template>
  <div class="top-nav-container" ref="mobileNavRef">
    <div class="nav-logo cursor">
      <i class="iconfont icon-annotation_help"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style lang='scss'>
  .top-nav-container {
    height: 64px;
    background: #fff;
    .nav-logo {
      flex: none;
      display: inline-block;
      margin-right: 80px;

      .iconfont {
        font-size: 42px;
        color: $--color-primary;
      }
    }
    .cursor {
      cursor: pointer;
    }
  }
</style>