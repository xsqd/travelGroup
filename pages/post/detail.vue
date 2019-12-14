<template>
  <div class="detail">
    <div class="left">
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/post" class="breadcrumb">
        <el-breadcrumb-item>
          <a href="/">旅游攻略</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 标题 -->
      <h1>{{data.title}}</h1>
      <div class="post-time">
        <span>{{ data.created_at | gettime}}</span>
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
        <div @click="shouchang">
          <span class="iconfont iconpinglun"></span>
          <span class="i-text">收藏</span>
        </div>
        <div>
          <span class="iconfont iconfenxiang"></span>
          <span class="i-text">分享</span>
        </div>
        <div @click="like">
          <span class="iconfont iconding"></span>
          <span class="i-text">{{`点赞(${data.like})`}}</span>
        </div>
      </div>
      <!-- 评论 -->
      <h4>评论</h4>
      <!-- @回复框 -->
      <div class="reply" v-show="userdata.follow">
        {{ "回复@ "+NickName}}
        <span @click="del">x</span>
      </div>
      <!-- 回复框 -->
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="userdata.content" placeholder="说点什么吧。。。"></el-input>
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
            :on-remove="handleRemove"
            name="files"
            :before-upload="screen"
            ref="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>-->
        </el-col>
        <el-col :span="4" class="submit">
          <el-button type="primary" class="sub" @click="setBlck">提交</el-button>
        </el-col>
      </el-row>
      <!-- 递归组件 -->
      <div class="postcomenttop">
        <PostComment
          :replyData="item"
          @userFollow="userFollow"
          v-for="(item,index) in replyData"
          :key="index"
        ></PostComment>
      </div>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 6, 9, 12]"
        :page-size="currentPageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalList"
      ></el-pagination>
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
import moment from "moment";

export default {
  watch: {
    userdata() {
      console.log(this.userdata);
    }
  },
  data() {
    return {
      routerId: "", //路由ID
      data: {
        likeIds: []
      },
      form: {
        name: ""
      },
      url: "",
      replyData: [
        {
          account: {}
        }
      ],
      userdata: {
        follow: "",
        content: "",
        pics: [],
        post: this.$route.query.id
      },
      NickName: "",
      // 当前页码
      currentPage: 1,
      currentPageSize: 3,
      totalList: 0 // 全部数据总数
    };
  },
  filters: {
    gettime(e) {
      console.log(e);
      return moment(e).format("YYYY-MM-DD HH:mm:ss"); //2014-09-24 23:36:09
    }
  },
  methods: {
    //封装 评论ajax
    getReplay() {
      this.$axios({
        url: `/posts/comments`,
        params: {
          post: this.routerId, //文章id
          _limit: this.currentPageSize, // 每页条数 3
          _start: (this.currentPage - 1) * this.currentPageSize // 每一页开始的数据 1
        }
      }).then(res => {
        // console.log(res);
        this.replyData = res.data.data;
        this.totalList = res.data.total;
        console.log(this.replyData);
      });
    },
    // 点赞 收藏
    like() {
      this.$axios({
        headers: {
          Authorization: "Bearer " + this.$store.state.user.userInfo.token
        },
        url: "/posts/like",
        params: {
          id: this.$store.state.user.userInfo.user.id
        }
      }).then(res => {
        console.log(res);
      });
    },
    shouchang(){
      this.$axios({
        headers: {
          Authorization: "Bearer " + this.$store.state.user.userInfo.token
        },
        url: "/posts/star",
        params: {
          id: this.$store.state.user.userInfo.user.id
        }
      }).then(res => {
        console.log(res);
      });
    },
    //上传图片
    uploadImg(res, b) {
      console.log(b);
      this.userdata.pics.push(res[0]);
      console.log(this.userdata.pics);
    },
    //删除图片
    handleRemove(a) {
      console.log(a.response[0].id);
      let b = this.userdata.pics;
      console.log(b);
      for (var i = 0; i < b.length; i++) {
        console.log(b[i].id);
        console.log(b[i].id == a.response[0].id);
        if (b[i].id == a.response[0].id) {
          console.log(123);
          b.splice(i, 1);
          console.log(b);
        }
      }
    },
    //判断上传文件类型
    screen(flies) {
      let table = flies.type.slice(0, 5);
      if (table === "image") {
        return true;
      } else {
        this.$message.success("文件上传失败");
        return false;
      }
    },
    //接收子组件传过来的数据
    userFollow(s) {
      console.log(s);
      this.userdata.follow = s.id;
      this.NickName = s.nickname;
      console.log(this.userdata.follow);
      console.log(this.NickName);
      console.log(this.userdata);
    },
    //发送评论
    setBlck() {
      console.log(this.userdata)
      if (this.userdata.follow === "") {
        delete this.userdata.follow;
      }
      if (!this.userdata.pics.length) {
        delete this.userdata.pics;
      }
      this.$axios({
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.user.userInfo.token
        },
        method: "post",
        url: `/comments`,
        data: this.userdata
      }).then(res => {
        console.log(res);
        this.getReplay();
        setTimeout(()=>{
        this.userdata.follow = "";
        this.NickName = "";
        this.userdata.content = "";
        this.userdata.pics = [];
        this.$refs.upload.clearFiles();
        },200)

      });
    },
    //@按钮的删除
    del() {
      this.userdata.follow = "";
    },
    // 每页显示数据
    handleSizeChange(currentPageSize) {
      this.currentPageSize = currentPageSize;
      this.getReplay();
    },
    // 当前页面
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.getReplay();
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
    this.routerId = this.$route.query.id;
    this.$axios({
      url: `/posts/?id=${this.routerId}`
    }).then(res => {
      this.data = res.data.data[0];
      // console.log(res);
      // console.log(this.data);
      // console.log(this.data.likeIds.length);
    });
    //这个是评论页面数据
    this.getReplay();
  }
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
    // /deep/.el-input__inner {
    //   height: 60px;
    // }
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
    .postcomenttop {
      margin-top: 20px;
      border: 1px solid #ccc;
      /deep/.PostComment:last-child {
        .commentlist {
          border-bottom: none !important;
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