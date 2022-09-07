<template>
  <view>
    <van-card :thumb-link="`/subpkg/goods-detail/goods-detail?id=${item.goods_id}`"
      :thumb="item.goods_small_logo||defaultPic" v-for="item in goods" :price="item.goods_price | toFixed"
      :title="item.goods_name" />
    <view style="text-align: center;padding: 10px;" v-if="!isLoading">加载中...</view>
  </view>
</template>

<script>
  import {
    getGoodsList
  } from "@/api/goods.js"
  import toast from "@/utils/toast.js"
  export default {
    data() {
      return {
        queryData: {
          query: '', //关键字
          cid: '', //分类ID
          pagenum: 1, //页码
          pagesize: 10 //每页条数
        },
        total: 0, //总条数
        goods: [], //数据列表
        // 默认的空图片
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
        isLoading: false
      }
    },

    methods: {
      async loadGoodsList(stopPullDown) {
        const {
          goods,
          total
        } = await getGoodsList(this.queryData)
        this.total = total
        this.goods = [...this.goods, ...goods]
        stopPullDown && stopPullDown()
      }
    },

    //页面加载
    onLoad({
      query
    }) {
      this.queryData.query = query
      this.loadGoodsList()
    },

    //下拉刷新
    onPullDownRefresh() {
      this.isLoading = true
      this.queryData = {
        query: this.queryData.query, //关键字
        cid: '', //分类ID
        pagenum: 1, //页码
        pagesize: 10 //每页条数
      }
      this.isLoading = false
      this.goods = []
      this.total = 0

      this.loadGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    },

    //上拉触底加载
    onReachBottom() {
      if (this.queryData.pagesize * this.queryData.pagenum >= this.total) {
        this.isLoading = true
        return toast('所有数据加载完成')
      } else {
        this.isLoading = false
      }
      if (this.isLoading) return
      console.log(1);
      // 让页码值自增 +1
      this.queryData.pagenum += 1
      // 重新获取列表数据
      this.loadGoodsList()
    }


  }
</script>

<style lang="scss">

</style>
