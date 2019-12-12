<template>
  <div class="PostComment">
    <div class="commentlist">
      <div class="usernicktime">
        <p>
          <img :src="$axios.defaults.baseURL+replyData.account.defaultAvatar" />
          {{replyData.account.nickname}}
          <span>{{ replyData.account.created_at |gettime}}</span>
        </p>
        <span>1</span>
      </div>
      <div class="content">
        <PostCommentItem></PostCommentItem>
        <div class="userComment clearfix">
          <p>123</p>
          <div class="commentImg" v-for="(v,i) in ['','']" :key="i">
            <img src="http://img3.imgtn.bdimg.com/it/u=2455100451,3980453752&fm=26&gp=0.jpg" alt />
          </div>
        </div>
        <p class="comtent-huifu">
          <span>回复</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PostCommentItem from "@/components/post/postCommentItem.vue";
import moment from "moment";
export default {
  data() {
    return {};
  },
  props: {
    replyData: {
        account:{}
    }
  },
  components: {
    PostCommentItem
  },
  filters: {
    gettime(e) {
      return moment(e).format("YYYY-MM-DD HH:mm:ss"); //2014-09-24 23:36:09
    }
  }
};
</script>

<style lang='less' scoped>
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.PostComment {
  margin-top: 20px;
  border: 1px solid #ddd;
  .commentlist {
    border-bottom: 1px dashed #ddd;
    padding: 20px 20px 5px;
    .content {
      font-size: 12px;
      padding-left: 30px;
      .userComment {
        padding-top: 10px;
        .commentImg {
          width: 80px;
          height: 80px;
          border-radius: 6px;
          overflow: hidden;
          margin-right: 5px;
          margin-top: 10px;
          padding: 5px;
          border: 1px dashed #ddd;
          float: left;
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
      .comtent-huifu {
        height: 20px;
        &:hover {
          span {
            visibility: visible;
          }
        }
        span {
          color: dodgerblue;
          float: right;
          visibility: hidden;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    > .usernicktime {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      > p {
        color: #666;
        > img {
          display: block;
          width: 16px;
          height: 16px;
          float: left;
          margin-right: 5px;
          border-radius: 50%;
        }
        > span {
          color: #aaa;
        }
      }
    }
  }
  .commentlist:last-child {
    border-bottom: none;
  }
}
</style>