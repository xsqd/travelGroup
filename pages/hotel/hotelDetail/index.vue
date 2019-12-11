<template>
  <div class="hotelDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/hotel' }">南京酒店</el-breadcrumb-item>
      <el-breadcrumb-item>好来阁商务酒店</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header">
      <hotelDetailHeader/>
    </div>
    <div class="middle">
      <hotelDetailMiddle/>
    </div>
    <div class="footer">
      <hotelDetailFooter/>
    </div>
  </div>
</template>

<script>
import hotelDetailHeader from '@/components/hotel/hotelDetailHeader.vue'
import hotelDetailMiddle from '@/components/hotel/hotelDetailMiddle.vue'
import hotelDetailFooter from '@/components/hotel/hotelDetailFooter.vue'
export default {
  components:{
    hotelDetailHeader,hotelDetailFooter,hotelDetailMiddle
  }
};
</script>

<style lang="less" scoped>
  .hotelDetail{
    width: 1000px;
    margin: 0 auto;
    .el-breadcrumb{
      padding: 20px 0;
    }
  }
</style>