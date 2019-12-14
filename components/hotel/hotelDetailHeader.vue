<template>
  <div class="main">
    <el-row>
      <h4>{{hotelData.name}}</h4>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
    </el-row>
    <el-row>
      <span>{{hotelData.alias}}</span>
    </el-row>
    <el-row>
      <span class="iconfont iconlocation"></span>
      <span>{{hotelData.address}}</span>
    </el-row>
    <el-row type="flex" class="imgItem" justify="space-between">
      <el-col>
        <img :src="bigSrc" alt />
      </el-col>
      <el-col>
        <img :src="value.src" alt @click="setBigSrc(value.src)" v-for="(value,index) in imgs" :key="index"/>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="hotelData.products" style="width: 100%" @row-click='clickrow'>
        <el-table-column prop="name" label="价格来源" width="420px"></el-table-column>
        <el-table-column prop="bestType" label="低价房型" width="420px"></el-table-column>
        <el-table-column prop="price" label="最低价格/每晚" width="160px">
        <template slot-scope="scope">
          <span>
            <i class="height-light">
            {{"￥"+scope.row.price}}
          </i>
          </span>
          起
          <span>
            <i class="el-icon-arrow-right height-light"></i>
          </span>
        </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  props:['hotelData'],
  data() {
    return {
      imgs:[
        {
          src:'http://157.122.54.189:9093/images/hotel-pics/1.jpeg'
        },
        {
          src:'http://157.122.54.189:9093/images/hotel-pics/2.jpeg'
        },
        {
          src:'http://157.122.54.189:9093/images/hotel-pics/3.jpeg'
        },
        {
          src:'http://157.122.54.189:9093/images/hotel-pics/4.jpeg'
        },
        {
          src:'http://157.122.54.189:9093/images/hotel-pics/5.jpeg'
        },
        {
          src:'http://157.122.54.189:9093/images/hotel-pics/6.jpeg'
        },
      ],
      tableData: [
        {
          company: "携程",
          size: "高级大床房A",
          price: "￥220"
        },
        {
          company: "艺龙",
          size: "高级大床房A",
          price: "￥220"
        },
        {
          company: "Hotels.com",
          size: "高级大床房A",
          price: "￥220"
        }
      ],
      bigSrc:'http://157.122.54.189:9093/images/hotel-pics/1.jpeg'
    };
  },
  methods:{
    setBigSrc(src){
      this.bigSrc = src
    },
    clickrow(row, column, event){
      location.href = "https://hotels.ctrip.com/hotel/694679.html"
    }
  },
  mounted(){
    console.log(this.hotelData);
  }
};
</script>

<style lang='less' scoped>
.main {
  h4 {
    display: inline;
    font-size: x-large;
    font-weight: normal;
  }
  i {
    font-size: 16px;
    color: #f90;
  }
  .el-row:nth-child(3) {
    span:first-child {
      color: #666;
    }
    span:last-child{
      font-size: 14px;
      color: #666;
    }
  }
  .imgItem {
    padding: 40px 0;
    .el-col:first-child {
      img {
        width: 640px;
        height: 360px;
      }
    }
    .el-col:last-child {
      // width: 355px;
      img {
        width: 160px;
        height: 110px;
        margin-left: 22px;
        margin-bottom: 10px;
        cursor: pointer;
      }
      img:nth-child(5),
      img:nth-child(6) {
        margin-bottom: 0;
      }
      img:nth-child(2n) {
        margin-left: 10px;
      }
    }
  }
  /deep/.el-table__row{
    cursor: pointer;
  }
}
</style>