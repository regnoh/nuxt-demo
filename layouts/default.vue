<template>
  <div class="default-containder">
    <Header/>
    <!-- 在布局文件中添加 <nuxt/> 组件用于显示页面的主体内容。 -->
    <nuxt />
  </div>
</template>
<script>
import Header from '~/layouts/Header';
export default {
  components: {
    Header
  },
}
</script>
<style lang='scss'>
</style>
