<template>
  <div class="detail">
    <div class="left">
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item>
          <a href="/">旅游攻略</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 标题 -->
      <h1>远东行：用好奇心打量这座城 —— 最值得收藏的海参崴出行攻略</h1>
      <div class="post-time">
        <span>攻略: 2019-05-22 10:57</span>
        <span>{{`阅读:${data.watch}`}}</span>
      </div>
      <div class="content" v-html="data.content"></div>
      <div class="post-ctrl">
        <div><span class="iconfont iconpinglun"></span><span class="i-text">{{`评论(100)`}}</span></div>
        <div><span class="iconfont iconpinglun"></span><span class="i-text">收藏</span></div>
        <div><span class="iconfont iconfenxiang"></span><span class="i-text">分享</span></div>
        <div><span class="iconfont iconding"></span><span class="i-text">{{`点赞(${data.like})`}}</span></div>
      </div>
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
  data() {
    return {
      data:{
        likeIds:[]
      }
    };
  },
  components: {
    PostRom
  },
  created() {
    // /post/detail?id=4
    this.$axios({
      url: `/posts/?id=4`
    }).then(res => {
      this.data = res.data.data[0];
      console.log(this.data);
      // console.log(this.data.likeIds.length);
    });
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.detail {
  display: flex;
  width: 1000px;
  margin: 10px auto;
  .left {
    flex: 7;
    width: 700px;
    .post-time{
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      span{
        color: #ccc;
        margin-right: 20px
      }
    }
    .breadcrumb {
      font-size: 18px;
    }
    h1 {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
    }
    .content{
      /deep/img{
        display: block;
        max-width:700px;
        // object-fit: cover;
      }
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