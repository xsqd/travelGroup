<template>
  <div class="postCommentItem">
      <!-- <myPostCommentItem></myPostCommentItem> -->
      <div class="postCommentItem-comtent">
          <p class="usernicktime"><span>地球发动机 2019-12-12 9:17</span><span>1</span></p>
          <p class="comtent-item">123</p>
          <p class="comtent-huifu"><a href="#">回复</a></p>
      </div>
  </div>
</template>

<script>
export default {
    name:'myPostCommentItem'
}
</script>

<style lang='less' scoped>
.postCommentItem {
    width: 100%;
    background: #f9f9f9;
    border: 1px solid #ddd;
    padding: 2px;
    .postCommentItem-comtent {
        padding: 5px 10px 0;
        .usernicktime {
            display: flex;
            justify-content: space-between;
        }
        .comtent-item {
            margin-top: 10px;
        }
        .comtent-huifu {
            height: 20px;
            &:hover {
                a {
                    visibility: visible;
                }
            }
            a {
                float: right;
                visibility: hidden;
            }
        }
    }
}
</style>