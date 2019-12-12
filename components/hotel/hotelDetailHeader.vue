<template>
  <div class="main">
    <el-row>
      <h4>古南都大桥饭店</h4>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
    </el-row>
    <el-row>
      <span>gu nan du da qiao hotel</span>
    </el-row>
    <el-row>
      <span class="iconfont iconlocation"></span>
      <span>建宁路255号(紧邻长江大桥)</span>
    </el-row>
    <el-row type="flex" class="imgItem" justify="space-between">
      <el-col>
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
      </el-col>
      <el-col>
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%" @row-click='clickrow'>
        <el-table-column prop="company" label="价格来源" width="420px"></el-table-column>
        <el-table-column prop="size" label="低价房型" width="420px"></el-table-column>
        <el-table-column prop="price" label="最低价格/每晚" width="160px">
        <template slot-scope="scope">
          <span>
            <i class="height-light">
            {{scope.row.price}}
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
  data() {
    return {
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
      ]
    };
  },
  methods:{
    clickrow(row, column, event){
      location.href = "https://hotels.ctrip.com/hotel/694679.html"
    }
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