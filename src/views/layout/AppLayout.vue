<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">发现</van-tabbar-item>
      <van-tabbar-item icon="search" dot>视屏</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">我的</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">朋友</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">账号</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>