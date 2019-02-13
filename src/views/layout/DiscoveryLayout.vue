<template>
  <div>
    <van-nav-bar
      left-text="返回"
      right-text="按钮"
      left-arrow>
      <div class="nav-search" slot="title">
        <input type="text">
        <div class="nav-search-placeholder">
          <span class="van-icon van-icon-search"></span>
          <span>搜索歌手, 歌曲或者歌单</span>
        </div>
      </div>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="个性推荐" to="/discovery/recommend"></van-tab>
      <van-tab title="主播电台" to="/discovery/djprogram"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'DiscoveryLayout',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>
  .van-nav-bar {
    background-color: #e4463b;
  }
  .nav-search {
    background-color: #eee;
    height: 30px;
    margin-top: 5px;
  }

</style>