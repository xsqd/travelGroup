<template>
  <div class="postSearch">
    <div class="list">
      <ul>
        <li v-for="(value,index) in posthotel" :key="index" @mouseover="selectStyle (index) ">
          <span>{{ value.type }}</span><i class="el-icon-arrow-right" />
        </li>
      </ul>
    </div>
    <div class="pschildren">
      <ul>
        <li v-for="(value,index) in posthotel[pstabindex].children" :key="index">
          <span>{{ index+1 }}</span>
          <span><a href="#">{{ value.city }}</a></span>
          <span><a href="#">{{ value.desc }}</a></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posthotel: [{
        type: [],
        children: []
      }],
      pstabindex: 0
    }
  },
  async mounted () {
    // 发送请求获取列表数据
    const res = await this.$axios({
      url: '/posts/cities'
    })
    // console.log(res)
    this.posthotel = res.data.data
  },
  methods: {
    // 停留在上时 切换数据
    selectStyle (index) {
      this.pstabindex = index
    }
  }
}
</script>

<style lang='less'>
.postSearch{
  width: 260px;
  position: relative;
  .list {
    width: 261px;
    >ul{
       border-bottom: 1px solid #ccc;
      >li {
        box-sizing: border-box;
        padding: 0 20px;
        width: 100%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        height: 40px;
        border: 1px solid #ccc;
        border-bottom: none;
        font-size:17px;
        >i {
          font-size:24px;
          color:#ccc;
        }
        &:hover{
          >i {
          color:darkorange;
        }
          color:darkorange;
          position: relative;
          z-index: 3;
          border-right: 1px solid #fff;
        }
      }
    }
  }
  &:hover {
    >.pschildren{
      display: block;
    }
  }
  .pschildren {
    display: none;
    position: absolute;
    z-index: 1;
    left: 259px;
    top: 0;
    border: 1px solid #ccc;
    width: 380px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 5px 15px;
    >ul{
      >li{
        height: 40px;
        line-height: 40px;
        display:flex;
        align-items: center;
        span:nth-child(1){
          font-size: 24px;
        }
        span:nth-child(1),span:nth-child(2){
          color:darkorange;
          padding-right: 15px;
        }
        span:nth-child(3){
          color:#999;
        }
        span:nth-child(2),span:nth-child(3){
          &:hover{
            text-decoration: underline ;
          }
        }
      }
    }
  }
}
</style>
