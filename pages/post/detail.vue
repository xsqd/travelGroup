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
      <!-- 内容 -->
      <div class="content" v-html="data.content"></div>
      <!-- 点赞页面 -->
      <div class="post-ctrl">
        <div>
          <span class="iconfont iconpinglun"></span>
          <span class="i-text">{{`评论(100)`}}</span>
        </div>
        <div>
          <span class="iconfont iconpinglun"></span>
          <span class="i-text">收藏</span>
        </div>
        <div>
          <span class="iconfont iconfenxiang"></span>
          <span class="i-text">分享</span>
        </div>
        <div>
          <span class="iconfont iconding"></span>
          <span class="i-text">{{`点赞(${data.like})`}}</span>
        </div>
      </div>
      <!-- 评论 -->
      <h4>评论</h4>
      <!-- @回复框 -->
      <div class="reply">
        回复 @地球发动机
        <span>x</span>
      </div>
      <!-- 回复框 -->
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="说点什么吧。。。"></el-input>
        </el-form-item>
      </el-form>
      <!-- 上传文件 -->
      <el-row type="flex" justify="space-between" class="botom">
        <el-col :span="20">
          <el-upload
            :limit="3"
            :action="$axios.defaults.baseURL+'/upload'"
            list-type="picture-card"
            :on-success="uploadImg"
            name="files"
            :before-upload="screen"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>-->
        </el-col>
        <el-col :span="4" class="submit">
          <el-button type="primary" class="sub">提交</el-button>
        </el-col>
      </el-row>
      <!-- 递归组件 -->
      <el-row>
        <!-- <PostComment :replyData="replyData[0]"></PostComment> -->
      </el-row>
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
import PostComment from "@/components/post/postComment.vue";

export default {
  data() {
    return {
      data: {
        likeIds: []
      },
      form: {
        name: ""
      },
      url: "",
      replyData:''
    };
  },
  methods: {
    uploadImg(res) {
      console.log(res);
      this.url = res[0].url;
    },
    screen(flies) {
      // console.log(flies);
      let table = flies.type.slice(0, 5);
      // console.log(table);
      if (table === "image") {
        return true;
      } else {
        this.$message.success("文件上传失败");
        return false;
      }
    }
  },
  //组件
  components: {
    PostRom,
    PostComment
  },
  //生命钩子函数
  created() {
    // /post/detail?id=4
    //这个是页面内容数据
    this.$axios({
      url: `/posts/?id=4`
    }).then(res => {
      this.data = res.data.data[0];

      // console.log(this.data.likeIds.length);
    });
    //这个是评论页面数据
     this.$axios({
       url:`/posts/comments`,
       params:{
         post:  4  ,//文章id
         _limit: 3 ,
         _start:0,
       }
     }).then((res)=>{
      console.log(res);
      this.replyData = res.data.data
      console.log(this.replyData);
     })
  },
};
</script>

<style lang="less" scoped>
@color: #aaa;
@mhb: 20px;
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
    .post-time {
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      span {
        color: @color;
        margin-left: 20px;
      }
    }
    .breadcrumb {
      font-size: 18px;
    }
    h1 {
      padding: 20px 0;
      border-bottom: 1px solid @color;
    }
    .content {
      /deep/img {
        display: block;
        max-width: 700px;
        // object-fit: cover;
      }
    }
    .post-ctrl {
      padding: 50px;
      display: flex;
      justify-content: center;
      div {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        text-align: center;
        .i-text {
          color: @color;
        }
        .iconfont {
          color: #ffa707;
          font-size: 30px;
          margin-bottom: 5px;
        }
      }
    }
    h4 {
      font-size: 18px;
      margin-bottom: @mhb;
      font-weight: normal;
    }
    .submit {
      display: flex;
      justify-content: flex-end;
      .sub {
        text-align: center;
        width: 80px;
        height: 32px;
        padding: 0px;
        line-height: 32px;
      }
    }
    /deep/.el-input__inner {
      height: 60px;
    }
    .reply {
      position: relative;
      font-size: 10px;
      padding: 0 10px;
      width: 130px;
      height: 30px;
      margin-bottom: @mhb;
      line-height: 30px;
      border: 1px solid #dddddd;
      background-color: #f4f4f5;
      border-radius: 3px;
      span {
        line-height: 10px;
        text-align: center;
        font-size: 8px;
        position: absolute;
        top: 9px;
        right: 6px;
        color: #aaa;
        width: 12px;
        height: 12px;
        float: right;
        border-radius: 50%;
        &:hover {
          color: #fff;
          background-color: #aaa;
        }
      }
    }
  }
  .right {
    padding-left: 10px;
    flex: 3;
    font-size: 18px;
    .title {
      padding: 20px 0;
      border-bottom: 1px solid @color;
    }
  }
}
</style>