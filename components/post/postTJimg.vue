<template>
  <div class="postTJimg">
    <div class="title">
      推荐城市
    </div>
    <div class="constent">
      <img src="https://ww1.sinaimg.cn/large/005SiNxygw1f5bvywplbtj30fk078wf5.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .postTJimg {
    padding-top: 20px;
    width: 260px;
    .title {
      font-size: 18px;
      height: 30px;
      border-bottom: 1px solid #ccc;
    }
    .constent {
      padding-top: 10px;
      width: 260px;
      img {
        width: 100%;
        cursor: pointer;
        display: block;
        object-fit: cover;
        padding-bottom: 10px;
      }
    }
  }
</style>
