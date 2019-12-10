<template>
  <div class="hotelDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/hotel' }">南京酒店</el-breadcrumb-item>
      <el-breadcrumb-item>好来阁商务酒店</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header"></div>
    <div class="middle"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {};
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