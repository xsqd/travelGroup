<template>
  <div class="main">
    <!-- 酒店信息区 -->
    <div class="information">
      <el-row :gutter="24">
        <el-col :span="4">
          <span>基本信息</span>
        </el-col>
        <div class="informationDexter">
          <el-col :span="5">
            <span>入住时间: 14:00之后</span>
          </el-col>
          <el-col :span="5">
            <span>离店时间: 12:00之前</span>
          </el-col>
          <el-col :span="5">
            <!-- <span>{{ hotelData.creation_time }}年开业/{{ hotelData.renovat_time }}年装修</span> -->
            <span>{{ hotelData.creation_time }}</span>/
            <span>{{ hotelData.renovat_time }}</span>
          </el-col>
          <el-col :span="5">
            <span>酒店规模: {{ hotelData.roomCount }}间客房</span>
          </el-col>
        </div>
      </el-row>
      <el-divider />
      <el-row :gutter="24">
        <el-col :span="4">
          <span>主要设施</span>
        </el-col>
        <div class="facility">
          <span v-for="(item,index) in hotelData.hotelassets" :key="index">{{ item.name }}</span>
          <!-- <span>电梯</span>
          <span>洗衣服务</span>
          <span>热水壶</span>-->
        </div>
      </el-row>
      <el-divider />
      <el-row :gutter="24">
        <el-col :span="4">
          <span>停车服务</span>
        </el-col>
        <span>{{ hotelData.parking }}</span>
      </el-row>
      <el-divider />
      <el-row :gutter="24">
        <el-col :span="4">
          <span>品牌信息</span>
        </el-col>
        <span>{{ hotelData.hotelbrand && hotelData.hotelbrand.name }}</span>
      </el-row>
      <el-divider />
    </div>
    <!-- 评论区 -->
    <div class="critical">
      <h4>0条真实用户评论</h4>
      <div class="zuidi">
        <el-row :gutter="20">
          <el-col :span="4">
            <p>总评数: {{ hotelData.all_remarks }}</p>
            <p>好评数: {{ hotelData.good_remarks }}</p>
            <p>差评数: {{ hotelData.bad_remarks }}</p>
          </el-col>
          <el-col :span="5" class="grade">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分"
            />
            <span class="tuiJian">推荐</span>
          </el-col>
          <div class="you">
            <el-col :span="3">
              <div>环境</div>
              <el-progress
                :percentage="8*10"
                type="circle"
                width="80"
                color="#ff9900"
                text-inside="true"
                stroke-width="2"
                class="progress"
              />
              <span class="score">{{ hotelData.stars }}分</span>
            </el-col>
            <el-col :span="3">
              <div>产品</div>
              <el-progress
                :percentage="8.5*10"
                type="circle"
                width="80"
                color="#ff9900"
                text-inside="true"
                stroke-width="2"
                class="progress2"
              />
              <span class="score2">{{ hotelData.stars }}分</span>
            </el-col>
            <el-col :span="3">
              <div>
                服务
              </div>
              <el-progress
                :percentage="8*10"
                type="circle"
                width="80"
                color="#ff9900"
                text-inside="true"
                stroke-width="2"
                class="progress3"
              />
              <span class="score3">{{ hotelData.stars }}分</span>
            </el-col>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hotelData'],
  data () {
    return {
      // // 评论星星分数
      value: ''
      // hotUpdate: {
      //   creationTime: ''
      // }
    }
  },
  watch: {
    hotelData () {
      // console.log(this.hotelData)
      this.value = this.hotelData.stars
    }
  }
}
</script>

<style lang="less" scoped>
// 酒店信息样式
.information {
  .informationDexter {
    font-size: 14px;
  }
  .facility > span {
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 4px 10px;
    margin-right: 4px;
    background-color: #eee;
    color: #666;
    font-size: 14px;
  }
}
// 评论样式
.critical {
  .zuidi {
    margin: 30px 0;
    height: 74px;
    //评论星星样式
    .grade {
      position: relative;
      height: 74px;
      line-height: 74px;
      color: rgb(255, 153, 0);
      top: 20px;
      .tuiJian {
        position: absolute;
        top: -25px;
        left: 38px;
        font-size: 20px;
        border: 2px solid #fa3;
        line-height: 70px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        opacity: 0.25;
        transform: rotate(-30deg);
      }
    }
    //评论右边的 产品 环境 服务 样式
    .you,
    .tuiJian {
      position: relative;
      height: 74px;
      line-height: 74px;
      font-size: 16px;
      text-align: center;
      color: rgb(255, 153, 0);
      .progress {
        position: absolute;
        top: 5px;
        left: 406px;
      }
      .score{
        position: absolute;
        top: 24px;
        left: 435px;
      }
      .progress2 {
        position: absolute;
        top: 5px;
        left: 534px;
      }
      .score2{
        position: absolute;
        top: 24px;
        left: 560px;
      }
      .progress3 {
        position: absolute;
        top: 5px;
        left: 660px;
      }
      .score3{
        position: absolute;
        top: 24px;
        left: 688px;
      }
    }
  }
}
</style>
