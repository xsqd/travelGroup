<template>
  <div class="detail">
    <div class="left">
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item>
          <a href="/">旅游攻略</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <h1>远东行：用好奇心打量这座城 —— 最值得收藏的海参崴出行攻略</h1>
    </div>
    <div class="right">
      <div class="title">相关攻略</div>
      <!-- 这里是右侧组件 -->
      <PostRom></PostRom>
       <PostRom></PostRom>
    </div>
  </div>
</template>

<script>
import PostRom from "@/components/post/postRom.vue";

export default {
  components: {
    PostRom
  }
};
</script>

<style lang="less" scoped>
*{
  box-sizing: border-box;
}
.detail {
  display: flex;
  width: 1000px;
  margin: 10px auto;
  .left {
    flex: 7;
    .breadcrumb {
      font-size: 18px;
    }
    h1 {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
    }
  }
  .right {
    padding-left: 10px;
    flex: 3;
    font-size: 18px;
    .title {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>