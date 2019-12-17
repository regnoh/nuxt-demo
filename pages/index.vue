<template>
  <div class="container">
    <img src="../assets/images/login.gif" />
     <img src="@/assets/images/wxPay.png" alt="">
    <yl-button type="primary">yl按钮</yl-button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import '@/assets/styles/views/home.scss';// !1. 页面外部样式
export default {
  components: {
    Logo
  }
}
</script>
// !2. lang='scss'
<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
