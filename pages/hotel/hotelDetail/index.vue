<template>
  <div class="hotelDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/hotel' }">
        酒店
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/hotel' }">
        南京酒店
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ hotelData.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header">
      <hotelDetailHeader :hotelData="hotelData" />
    </div>
    <div class="middle">
      <hotelDetailMiddle :hotelData="hotelData" />
    </div>
    <div class="footer">
      <hotelDetailFooter :hotelData="hotelData" />
    </div>
  </div>
</template>

<script>
import hotelDetailHeader from '@/components/hotel/hotelDetailHeader.vue'
import hotelDetailMiddle from '@/components/hotel/hotelDetailMiddle.vue'
import hotelDetailFooter from '@/components/hotel/hotelDetailFooter.vue'
export default {
  components: {
    hotelDetailHeader, hotelDetailFooter, hotelDetailMiddle
  },
  data () {
    return {
      hotelData: []
    }
  },
  mounted () {
    const { id } = this.$route.query
    // console.log(id);
    this.$axios({
      url: `/hotels?id=${id}`
    }).then((res) => {
      // console.log(res);
      this.hotelData = res.data.data[0]
    })
  }
}
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
