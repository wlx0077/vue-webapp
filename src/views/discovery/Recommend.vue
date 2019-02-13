<template>
  <div>
    <div class="swipe-container">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(banner,index) of banners"
                        :key="index">
          <img :src="banner.imageUrl" class="swipe-banner">
          <van-tag class="swipe-label"
                   :style="{backgroundColor: banner.titleColor}">
            {{banner.typeTitle}}
          </van-tag>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="tabs-container">
      <van-row>
        <van-col span="6">
          <span class="van-icon van-icon-cart"></span><p>私人FM</p>
        </van-col>
        <van-col span="6">
          <span></span><p>私人FM</p>
        </van-col>
        <van-col span="6">
          <span></span><p>私人FM</p>
        </van-col>
        <van-col span="6">
          <span></span><p>私人FM</p>
        </van-col>
      </van-row>
    </div>
    <div class="songlist-container">
      <h3 class="heading"><a href="#">推荐歌单 <span class="van-icon van-icon-arrow"></span></a></h3>
      <van-row gutter="4" v-for="(row, i) of songRows" :key="i">
        <van-col span="8" v-for="song of row" :key="song.id">
          <div class="top">
            <img :src="song.picUrl" width="100%">
            <span class="song-count"><i></i>{{song.playCount | omitCount}}</span>
          </div>
          <p class="song-name ellipsis-2">{{song.name}}</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { fetchBanner, fetchSongList } from "../../api/recommend"

export default {
  name: 'Recommend',
  data () {
    return {
      banners: [],
      songList: []
    }
  },
  filters: {
    omitCount (val) {
      val = val.toFixed(0)
      return val.length > 4 ? Math.round(parseInt(val) / Math.pow(10, 4)) + '万' : val
    }
  },
  computed: {
    songRows () {
      let size = 3
      let pages = Math.ceil(this.songList.length / size)
      let rt = []
      for (let i = 0; i < pages; i++) {
        rt[i] = this.songList.slice(i * size, i * size + size)
      }
      console.log(rt)
      return rt
    }
  },
  methods: {
    getBanners () {
      fetchBanner().then(res => {
        let data = res.data
        if (data.code === 200) {
          this.banners = data.banners
        }
      })
    },
    getSongList () {
      fetchSongList().then(res => {
        let data = res.data
        if (data.code === 200) {
          this.songList = data.result
        }
      })
    }
  },
  created () {
    this.getBanners()
    this.getSongList()
  }
}
</script>

<style scoped lang="scss">
  .swipe-container {
    height: 140px;
    margin: 0 8px;
    border-radius: 2px;
    overflow: hidden;
  }

  .van-swipe {
    height: 100%;
  }

  .swipe-banner {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .swipe-label {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 4px 0 0 0;
  }

  .nav-tabs {
    position: static;
  }

  .songlist-container {
    margin: 8px;
    .heading {
      a span::before {
        vertical-align: middle;
      }
    }
    .van-col {
      height: 146px;
      .top {
        border-radius: 2px;
        overflow: hidden;
        margin-bottom: 4px;
        position: relative;
        .song-count {
          position: absolute;
          top: 0;
          right: 4px;
          font-size: 10px;
          color: #ffffff;
        }
        img {
          vertical-align: middle;
        }
      }
      .song-name {
        font-size: 10px;
        color: #333;
        padding: 2px;
      }
    }
  }

  .tabs-container {
    text-align: center;
    font-size: 10px;
  }

</style>