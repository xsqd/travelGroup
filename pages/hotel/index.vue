<template>
  <div>
    <div class="container">
      <div class="nav">
        酒店
        <i class="el-icon-arrow-right"></i> 南京市酒店预定
      </div>
      <el-form ref="form" :model="form" label-width="80px" class="cityFrom">
        <el-row class="selectCityInput">
          <el-col :span="5">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
          <el-col :span="9">
            <div class="selDate">
                <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </div>
          </el-col>
          <el-col :span="6" class="selNum">
                <i class="el-input__icon iconfont iconuser"></i>
            <el-input v-model="input" placeholder="请输入内容" readonly="readonly">
            </el-input>
          </el-col>
          <el-col :span="3" class="priceBtn">
            <el-button type="primary">查看价格</el-button>
          </el-col>
        </el-row>
        <div class="selNumTooltip">
            <div class="clearfix">
                <span class="clearfix">每间</span>
                <el-select v-model="value" size="mini" class="Fllr" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>   
                <el-select v-model="value" size="mini" class="Fllr" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>    
            </div>
            <el-button type="primary" class="el-button el-button--primary el-button--mini">确定</el-button>
        </div>
      </el-form>
      <div class="hotelContact borderButton">
        <el-row :gutter="1">
          <el-col :span="14">
            <el-row :gutter="10" class="mt">
              <el-col :span="3">区域：</el-col>
              <el-col :span="21">
                <div class="areaPath hiddenAea">
                  <span>全部</span> <a>华侨城江浦东屏镇南京</a><a>万辰苏果珠江路沿线南站/明发北岭路沿线苜蓿园弘阳广场/新一城新街口地区紫金山/孝陵卫火车站/玄武湖东坝镇禄口机场奥体中心雨润大街新模范马路将军山国际慢城云鼎时尚街区百家湖湖南路竹山路沿线南大/南师大江宁滨江开发区湖熟镇南大和园君临紫金商业街大西门建邺万达江宁科学园顾家欧亚达高淳老街谷里汤山镇雄州</a>
                </div>
                <div class="areahidden">
                    <i class="el-icon-d-arrow-right iup"></i>
                等43个区域
                </div>
              </el-col>
            </el-row>
             <el-row :gutter="10"  class="mt">
              <el-col :span="3">攻略:</el-col>
              <el-col :span="21">
                <div class="strategyText">
                  北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。
                </div>
                
              </el-col>
            </el-row>
            <el-row :gutter="10"  class="mt mb">
              <el-col :span="3">均价 <sup>?</sup> :</el-col>
              <el-col :span="21">
                <div class="avaragePrice">
                <div><i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i><span>¥332</span></div>
                <div><i class="iconfont iconhuangguan"></i><span>¥332</span></div>
                <div><i class="iconfont iconhuangguan"></i><span>¥332</span></div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8"><div class="map mt">
              <img src="../../assets/snipaste_20191211_104705.png" alt="">
              </div></el-col>
        </el-row>
      </div>
    </div>
    <HotelFilters />
  </div>
</template>

<script>
import HotelFilters from '@/components/hotel/hotelFilters.vue'
export default {
  components:{
    HotelFilters
  }
};
</script>

<style lang='less' scoped>
.clearfix:after { 
	content:"";
	display:block;
	height:0;
	clear:both;
	visibility:hidden;
}
.container {
  width: 1000px;
  margin: 0 auto;
  color: #606266;
  font-weight: 400;
  font-size: 14px;
  .nav {
    margin: 16px 0;
  }
  .cityFrom {
      position: relative;
    .selectCityInput {
      /deep/.el-input__inner {
      }
    }
    .selDate {
      margin-left: 15px;
      margin-right: 3px;
      /deep/.el-date-editor--datetimerange.el-input__inner {
        width: 349px;
      }
    }
    .selNum {
      margin-left: -5px;
      position: relative;
      i{
          position: absolute;
          z-index: 2;
          top: 0;
          right: 27px;
          font-size: 16px;
          color: #c0c4cc;
      }
      /deep/.el-input__inner {
        width: 89%;
      }
    }
    .selNumTooltip{
        position: absolute;
        top: 51px;
        left: 578px;
        width: 326px;
        height: 123px;
        color: #606266;
        background: #fff;
        padding: 12px;
        box-sizing: border-box;
        z-index: 2;
        border: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        border-radius:4px;
        div{
            height: 28px;
            padding-bottom: 20px;
            border-bottom: 1px solid #ddd;
            span{
                float: left;
                margin-top: 5px;
            }
            .el-select{
                float: right;
                margin-left: 5px;
            }
        }
        /deep/.el-input__inner{
            width: 91.5px;
        }
        .el-button{
            margin-top: 20px;
            float: right;
        }
    }
    .priceBtn {
      margin-left: -11px;
    }
  }
   .mt{
          margin-top: 23px;
      }
    .borderButton{
        padding-bottom: 23px;
    }
  .hotelContact{
     
       font-size: 14px;
      sup{
          background: #ccc;
          color: #fff;
          font-size: 12px;
          width: 1.2em;
          display: inline-block;
          height: 1.2em;
          border-radius: 100%;
          text-align: center;
      }
      .areaPath{
          margin-left: -10px;
          span{
              background-color: rgb(238,238,238);
              color: #999;
              margin-right: 18px;
              border-radius: 4px;
              padding: 0 2px;
          }
          a{
              cursor: pointer;
              margin-right: 19px;
          }
          
      }
      .strategyText{
           margin-left: -10px;
      }
      .avaragePrice{
          div{
              float: left;
              width: 33.3%;
              i{
                  float: left;
              }
              span{
                  margin-left: 5px;
              }
          }
           margin-left: -10px;
           .iconhuangguan{
               color: #f90;
               font-size: 16px;
           }
      }
      //隐藏类
      .hiddenAea{
          height: 41px;
          overflow: hidden;
      }
      .areahidden{
          margin-left: -10px;
                //上收  
            .iup{
                        transform:rotate(270deg);
                        color: #f90;
                    }
                  //下拉  
            .idown{
                        transform:rotate(90deg);
                        color: #f90;
            }        
      }
      .map{

          width: 420px;
          height: 260px;
          img{
              width: 100%;
              height: 100%;
          }
      }
  }
}
</style>
