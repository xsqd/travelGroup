<template>
  <div class="postCommentItem">
      <!-- <myPostCommentItem></myPostCommentItem> -->
      <div class="postCommentItem-comtent">
          <div class="usernicktime"><p >地球发动机 <span class="useritem">2019-12-12 9:17</span></p><span>1</span></div>
          <div class="comtent-item clearfix">
              <p>123</p>
              <div class="commentImg" v-for="(v,i) in ['','','']" :key ='i'>
                  <img src="http://img3.imgtn.bdimg.com/it/u=2455100451,3980453752&fm=26&gp=0.jpg" alt="">
              </div>
              
          </div>
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
.clearfix:after{
         content:".";
         display:block;
         height:0;
         visibility:hidden;
         clear:both;
     }
     .clearfix{zoom:1;}
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
            .useritem {
                color:#aaa;
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