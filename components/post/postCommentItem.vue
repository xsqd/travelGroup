<template>
  <div class="postCommentItem">
    <myPostCommentItem @follow="follow" v-if="parent.parent" :parent="parent.parent"></myPostCommentItem>
    <div class="postCommentItem-comtent">
      <div class="usernicktime">
        <p>
          {{parent.account.nickname}}
          <span class="useritem">{{parent.account.created_at |gettime}}</span>
        </p>
        <span>{{parent.level}}</span>
      </div>
      <div class="comtent-item clearfix">
        <p>{{parent.content}}</p>
        <div class="commentImg" v-for="(item,index) in parent.pics" :key="index">
          <img :src="$axios.defaults.baseURL+item.url" alt />
        </div>
      </div>
      <p class="comtent-huifu">
        <span @click="back">回复</span>
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "myPostCommentItem",
  props: {
    parent: {}
  },
  filters: {
    gettime(e) {
      return moment(e).format("YYYY-MM-DD HH:mm:ss"); //2014-09-24 23:36:09
    }
  },
  methods: {
    back() {
      this.$emit("follow", {id:this.parent.id,nickname:this.parent.account.nickname});
    },
    follow(s) {
      this.$emit("follow", s);
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
.postCommentItem {
  box-sizing: border-box;
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  .postCommentItem-comtent {
    padding: 5px 10px 0;
    .usernicktime {
      display: flex;
      justify-content: space-between;
      > p {
        margin-right: 5px;
      }
      .useritem {
        color: #aaa;
      }
    }
    .comtent-item {
      margin-top: 10px;
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
          display: block;
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
        float: right;
        color: dodgerblue;
        cursor: pointer;
        visibility: hidden;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>