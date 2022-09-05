<template>
  <view>
    <view class="topSearch">
      <view class="search_btn">
        搜索
      </view>
    </view>
  </view>
</template>

<script>
  import { getBanners } from "@/api/home.js"
  export default {
    data() {
      return {
        
      };
    },
    methods:{
     async loadBanners(){
        const res =await getBanners()
        console.log(res);
      }
    },
    onLoad() {
      this.loadBanners()
    }
  }
</script>

<style lang="scss">
.topSearch {
  width: 750rpx;
  height: 65px;
  background-color: #c00000;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .search_btn {
    width: 400rpx;
    height: 30px;
    margin-top: 25px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>