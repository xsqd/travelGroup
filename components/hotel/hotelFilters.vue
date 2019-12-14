<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        <div class="live-filters">
          <div class="price">
            <div>价格</div>
            <div>0-4000</div>
          </div>
          <div class="block">
            <el-slider v-model="value" :max="4000"></el-slider>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="live-filters">
          <div class="live">住宿等级</div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{placeholder}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,index) in options.levels" :key="index" :command="item.name">
                <i class="iconfont iconcircle"></i>{{item.name}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="live-filters">
          <div class="live">住宿类型</div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{placeholder}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="width:150px;">
              <el-dropdown-item v-for="(item,index) in options.types" :key="index" :command="item.name">
                <i class="iconfont iconcircle"></i>{{item.name}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="live-filters">
          <div class="live">酒店设施</div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{placeholder}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="width:150px;">
              <el-dropdown-item v-for="(item,index) in options.assets" :key="index" :command="item.name">
                <i class="iconfont iconcircle"></i>{{item.name}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="live-filters" style="border:none;">
          <div class="live">酒店品牌</div>
          <el-dropdown >
            <span class="el-dropdown-link">
              {{placeholder}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="width:150px;overflow:auto;max-height:230px;">
              <el-dropdown-item v-for="(item,index) in options.brands" :key="index" :command="item.name">
                <i class="iconfont iconcircle"></i>{{item.name}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="space-between"
      align-items="center"
      style="padding:25px 0;border-bottom:1px solid #eee;"
      v-for="(item,index) in hotelInfo.data" :key="index"
    >
      <el-col :span="8">
        <nuxt-link :to="`/hotel/hotelDetail?id=${item.id}`">
           <img
            :src="`${item.photos}`"
            :alt="`${item.name}`"
            width="320"
            height="210"
          />
        </nuxt-link>
      </el-col>
      <el-col :span="10">
        <el-row>
          <nuxt-link :to="`/hotel/hotelDetail?id=${item.id}`">
            <h2 style="font-weight:normal;font-size:24px;color:#000;">{{item.name}}</h2>
          </nuxt-link>
        </el-row>
        <el-row class="hotelLevel">
          <span style="font-size:16px;">{{item.alias}}</span>
          <span title="3星级" id="star">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>{{item.hoteltype.name}}</span>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="10" style="padding:0 5px;">
            <el-rate
              v-model="item.stars"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分">
            </el-rate>
          </el-col>
          <el-col :span="7" style="padding:0 5px;font-size:16px;color:#000;">
            <span class="hight-light">{{item.all_remarks}}</span> 条评论
          </el-col>
          <el-col :span="7" style="padding:0 5px;font-size:16px;color:#000;">
            <span class="hight-light">{{item.common_remarks}}</span> 篇游记
          </el-col>
        </el-row>
        <div class="hotel-summary-row"></div>
        <div class="location-row">
          <i class="iconfont iconlocation"></i>
          位于: {{item.address}}
        </div>
      </el-col>
      <el-col :span="6">
        <!-- <ul style="margin-top:20px;padding:0 10px;">
          <li v-for="(value,index) in item.products" :key="index">
            <nuxt-link to="/">
              <span>{{item.products[index].name}}</span>
              <div>
                <span class="hight-light larger">￥{{item.products[index].price}}</span>起
                <i class="el-icon-arrow-right"></i>
              </div>
            </nuxt-link>
          </li> -->
          <div class="link">
            <!-- <nuxt-link to="https://hotels.ctrip.com/hotel/694679.html" v-for="(value,index) in item.products" :key="index">
              <div class="lianjie">
                <span style="width:120px; display:inline-block;">{{item.products[index].name}}</span>
                <span class="hight-light larger">￥{{item.products[index].price}}</span>起
                <i class="el-icon-arrow-right"></i>
              </div>
            </nuxt-link> -->
            <a href="https://hotels.ctrip.com/hotel/694679.html" target="view_frame" v-for="(value,index) in item.products" :key="index">
               <div class="lianjie">
                <span style="width:120px; display:inline-block;">{{item.products[index].name}}</span>
                <span class="hight-light larger">￥{{item.products[index].price}}</span>起
                <i class="el-icon-arrow-right"></i>
              </div>
            </a>
          </div>
          <!-- <li>
            <span>{{item.products[1].name}}</span>
            <div>
              <span class="hight-light larger">￥{{item.products[1].price}}</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>{{item.products[2].name}}</span>
            <div>
              <span class="hight-light larger">￥{{item.products[2].price}}</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li> -->
        <!-- </ul> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props:['hotelInfo','options'],
  data() {
    return {
      value: 4000,
      placeholder:'不限'
    };
  },
  methods:{
    handleCommand(command){
      console.log(command)
      this.placeholder=command
    }
  }
};
</script>

<style lang="less" scoped>
.el-dropdown-menu{
  width:180px !important;
}
.filters-top {
  padding: 5px 0;
  border: 1px solid #ddd;
  color: #666;
  .live-filters {
    padding: 5px 20px;
    border-right: 1px solid #ddd;
    .price {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .live {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .el-dropdown {
      width: 100%;
      height: 38px;
      line-height: 38px;
      cursor: pointer;
    }
    .el-dropdown-link {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.hotelLevel {
  color: #999;
  margin-bottom: 0.5em;
}
#star {
  .iconhuangguan {
    color: #f90 !important;
  }
}
.el-rate__icon {
  margin-right: 0;
}
.hight-light {
  color: #f90;
}
.location-row {
  font-size: 14px;
  color: #666;
}
.hotel-summary-row {
  margin: 1em 0;
}
// ul>li{
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid #ebeef5;
//   padding: 12px 10px;
//   color: #606266;
//   font-size: 14px;
// }
.larger {
  font-size: larger;
}
.link{
  margin-top: 20px;
  padding: 0 10px;
}
.lianjie{
  border-bottom: 1px solid #ebeef5;
  padding: 12px 0;
}
</style>