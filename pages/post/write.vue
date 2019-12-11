<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <div class="main">
        <h2>发表新攻略</h2>
        <p>分享你的个人游记，让更多人看到哦！</p>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input placeholder="请输入标题" />
          </el-form-item>
          <el-form-item>
            <VueEditor ref="vueEditor" :config="config" style="height:458px;margin-bottom:50px" />
          </el-form-item>
          <el-form-item label="选择城市">
            <el-input placeholder="请搜索游玩城市" style="width:200px" />
          </el-form-item>
        </el-form>
        <div class="creat-button">
          <el-button type="primary" style="padding:9px 15px;font-size:12px">发布</el-button>
          <span>
            或者
            <a href="javascript:;">保存到草稿</a>
          </span>
        </div>
      </div>
      <div class="aside">
        <div class="draft-box">
          <h4 class="draft-title">草稿箱（0）</h4>
          <div class="draft-list" />
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      form: {
        input: ""
      },
      config: {
        // 上传图片的配置
        uploadImage: {
          // 处理文件上传的服务器地址
          url: "http://localhost:3000/upload",
          // 后台需要的参数名称
          name: "file",
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: "http://localhost:3000/upload",
          name: "file",
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        }
      }
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  .main {
    width: 750px;
    h2 {
      font-weight: 400;
      font-size: 22px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: #999;
      margin-bottom: 10px;
    }
    .creat-button {
      span {
        margin-left: 10px;
        font-size: 14px;
        a {
          color: orange;
        }
      }
    }
  }
  .aside {
    width: 200px;
    .draft-box {
      border: 1px solid #ddd;
      padding: 10px;
    }
    .draft-title {
      margin-bottom: 10px;
      font-weight: 400;
      color: #666;
    }
  }
}
</style>
