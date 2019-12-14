<template>
  <div>
    <div class="container">
      <div class="nav">
        酒店
        <i class="el-breadcrumb__separator el-icon-arrow-right" />南京市酒店预定
      </div>
      <el-form ref="conditionsForm" :model="conditionsForm" label-width="80px" class="cityFrom">
        <el-row class="selectCityInput">
          <el-col :span="5">
            <el-autocomplete
              v-model="destinationCity"
              :fetch-suggestions="getCity"
              @select="selectDepartCity"
              :trigger-on-focus="false"
              :highlight-first-item="true"
              placeholder="目的地"
              class="el-autocomplete"
            />
          </el-col>
          <el-col :span="9">
            <div class="selDate">
              <el-date-picker
                v-model="selDate"
                @change="getDate"
                type="daterange"
                range-separator="-"
                start-placeholder="入住日期"
                end-placeholder="离店日期"
                value-format="yyyy-MM-dd"
              />
            </div>
          </el-col>
          <el-col :span="6" class="selNum">
            <i class="el-input__icon iconfont iconuser" />
            <div @click="isShowperson=!isShowperson">
              <el-input v-model="personNo.num" placeholder="人数未定" readonly="readonly" />
            </div>
          </el-col>
          <el-col :span="3" class="priceBtn">
            <el-button @click="selPrice" type="primary">
              查看价格
            </el-button>
          </el-col>
        </el-row>
        <div v-if="isShowperson" class="selNumTooltip">
          <div class="clearfix">
            <span class="clearfix">每间</span>
            <el-select
              v-model="personNo.children"
              :value="personNo.children"
              size="mini"
              class="Fllr"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in personNo.childrenOp"
                :key="index"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
            <el-select v-model="personNo.adult" size="mini" class="Fllr" placeholder="请选择">
              <el-option
                v-for="(item,index) in personNo.adultOp"
                :key="index"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.value }}</span>
              </el-option>
            </el-select>
          </div>
          <el-button
            @click="getpersonNo"
            type="primary"
            class="el-button el-button--primary el-button--mini"
          >
            确定
          </el-button>
        </div>
      </el-form>
      <div class="hotelContact borderButton">
        <el-row :gutter="1">
          <el-col :span="14">
            <el-row :gutter="10" class="mt">
              <el-col :span="3">
                区域：
              </el-col>
              <el-col :span="21">
                <div class="areaPath">
                  <div :class="{hiddenAea:isareahidden}">
                    <span :class="{myfocus:-1===ismyfocus}" @click="initScenic">全部</span>
                    <a
                      @click="changeSin(index,item.id)"
                      :class="{myfocus:index===ismyfocus}"
                      v-for="(item,index) in destinationCityData.scenics"
                      :key="index"
                    >{{ item.name }}</a>
                  </div>
                  <div @click="isareahidden=!isareahidden">
                    <i
                      :class="{iup:!isareahidden,idown:isareahidden}"
                      class="el-icon-d-arrow-right"
                    />
                    等{{ destinationCityData.scenics.length }}个区域
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10" class="mt">
              <el-col :span="3">
                攻略:
              </el-col>
              <el-col :span="21">
                <div
                  class="strategyText"
                >
                  北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10" class="mt mb">
              <el-col :span="3">
                均价
                <sup>?</sup> :
              </el-col>
              <el-col :span="21">
                <div class="avaragePrice">
                  <el-tooltip :visible-arrow="false" class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="left-end">
                    <div>
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <span>¥332</span>
                    </div>
                  </el-tooltip>
                  <el-tooltip :visible-arrow="false" class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="left-end">
                    <div>
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <span>¥521</span>
                    </div>
                  </el-tooltip>
                  <el-tooltip :visible-arrow="false" class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="left-end">
                    <div class="price4">
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <i class="iconfont iconhuangguan" />
                      <span>¥768</span>
                    </div>
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <div id="mymap" class="mymap mt" />
          </el-col>
        </el-row>
      </div>
      <HotelFilters :hotelInfo="hotels" :options="options" />
    </div>
    <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=b90f3894dde280b2f3ac4318bbf68e10" />
  </div>
</template>
<script>
import HotelFilters from '@/components/hotel/hotelFilters.vue'
export default {
  directives: {
    myfocus: {
      // 当添加了当前指令的元素生成好，加到父节点的时候就会自动的触发
      inserted (el) {
        // console.log(el)
        el.style = `background-color: rgb(238, 238, 238);
        color: #999;
        margin-right: 18px;
        border-radius: 4px;
        padding: 0 2px;`
      }
    }
  },
  components: {
    HotelFilters
  },
  data () {
    return {
      scenicId: '',
      mapData: [{}],
      ismyfocus: -1,
      hotels: [{}],
      options: {},
      isareahidden: true,
      isShowperson: false,
      personNo: {
        adult: '2 成人',
        adultOp: [
          {
            value: '1',
            label: '1 成人'
          },
          {
            value: '2',
            label: '2 成人'
          },
          {
            value: '3',
            label: '3 成人'
          },
          {
            value: '4',
            label: '4 成人'
          },
          {
            value: '5',
            label: '5 成人'
          },
          {
            value: '6',
            label: '6 成人'
          },
          {
            value: '7',
            label: '7 成人'
          }
        ],
        children: '0 儿童',
        childrenOp: [
          {
            value: '0',
            label: '0 儿童'
          },
          {
            value: '1',
            label: '1 儿童'
          },
          {
            value: '2',
            label: '2 儿童'
          },
          {
            value: '3',
            label: '3 儿童'
          },
          {
            value: '4',
            label: '4 儿童'
          }
        ],
        num: ''
      },
      selDate: '',
      destinationCity: '南京',
      destinationCityData: {
        scenics: []
      },
      conditionsForm: {
        city: '',
        enterTime: '',
        leftTime: '',
        scenic: ''
      }
    }
  },
  computed: {},
  async mounted () {
    await this.getCity(this.destinationCity)
    // console.log('这是酒店')
    this.$router.push({
      path: '/hotel',
      query: { city: this.conditionsForm.city
      } })
    await this.$axios({
      url: '/hotels',
      params: {
        city: this.conditionsForm.city
      }
    }).then((res) => {
      const data = res.data
      // 上面为传送数据部分
      this.createMap(data.data)
      this.hotels = data
      return data
    })

    this.$axios({
      url: '/hotels/options'
    }).then((res) => {
      console.log('这是')
      console.log(res)
      this.options = res.data.data
    })
  },
  methods: {
    // 根据条件筛选酒店
    filterHotel (value) {
      const condition = {
        assets: [],
        brand: [],
        levels: [],
        types: []
      }
      const newCodition = {}
      condition.forEach((key) => {
        if(condition[key]){
          newCodition.push(
            key:condition[key]
          )
        }
      })
      const hotels = this.hotels
      const newHotels = hotels.map((value, index) => {

      })
    },
    changeRouter () {},
    initScenic () {
      this.ismyfocus = -1
      if (this.conditionsForm.enterTime) {
        this.$router.push({
          path: '/hotel',
          query: { city: this.conditionsForm.city,
            enterTime: this.conditionsForm.enterTime,
            leftTime: this.conditionsForm.leftTime
          }
        })
      } else {
        this.$router.push({
          path: '/hotel',
          query: { city: this.conditionsForm.city
          }
        })
      }
    },
    // 查看价格按钮
    selPrice () {
      if (this.conditionsForm.enterTime) {
        this.$router.push({
          path: '/hotel',
          query: { city: this.conditionsForm.city,
            enterTime: this.conditionsForm.enterTime,
            leftTime: this.conditionsForm.leftTime
          }
        })
      } else {
        this.$router.push({
          path: '/hotel',
          query: { city: this.conditionsForm.city
          }
        })
      }
      this.ismyfocus = -1
    },
    async createMap (mapData) {
      console.log(mapData)
      const map = new AMap.Map('mymap', {
        resizeEnable: true,
        center: [118.87603, 31.730244],
        zoom: 8 // 级别
      })
      // closeInfoWindow()

      // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
      mapData.forEach((item, index) => {
        // console.log(item, index)
        map.clearInfoWindow()
        const marker = new AMap.Marker({
          map,
          position: [item.location.longitude, item.location.latitude],
          title: item.address,
          content: `<span class="marker">${index + 1}</span>`
        })
        marker.content = item.address
        marker.on('mouseout', closeInfoWindow)
        marker.emit('mouseout', { target: marker })
        marker.on('mouseover', markerClick)
        // marker.emit('mouseover', { target: marker })
      })
      function markerClick (e) {
        const infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) })
        infoWindow.setContent(e.target.content)
        infoWindow.open(map, e.target.getPosition())
      }
      function closeInfoWindow () {
        map.clearInfoWindow()
      }
    },
    // 改变选择改变地图
    changeSin (index, id) {
      this.ismyfocus = index
      this.scenicId = id
      if (this.conditionsForm.enterTime) {
        this.$router.push({
          path: '/hotel',
          query: { city: this.conditionsForm.city,
            scenic: this.scenicId,
            enterTime: this.conditionsForm.enterTime,
            leftTime: this.conditionsForm.leftTime
          }
        })
      } else {
        this.$router.push({
          path: '/hotel',
          query: { city: this.conditionsForm.city,
            scenic: this.scenicId
          }
        })
      }
    },
    shouArea () {},
    getpersonNo () {
      this.personNo.num = ''
      if (!this.personNo.adult.includes('成人')) {
        // this.personNo.adult = this.personNo.adult
        this.personNo.num = this.personNo.adult + '成人'
      } else {
        this.personNo.num = this.personNo.adult.replace(' ', '')
      }
      if (!this.personNo.children.includes('0')) {
        // this.personNo.children = this.personNo.children + '儿童'
        // console.log(this.personNo.children)
        this.personNo.num += ' ' + this.personNo.children + '儿童'
        // console.log(this.personNo.num)
      }
      this.isShowperson = false
    },
    getDate () {
      // console.log(this.selDate)
      this.conditionsForm.enterTime = this.selDate[0]
      this.conditionsForm.leftTime = this.selDate[1]
      console.log(this.conditionsForm)
    },
    async selectDepartCity (value) {
      // console.log(value)
      this.conditionsForm.city = value.id
      if (this.conditionsForm.enterTime) {
        this.$router.push({
          path: '/hotel',
          query: { city: this.conditionsForm.city,
            enterTime: this.conditionsForm.enterTime,
            leftTime: this.conditionsForm.leftTime
          }
        })
      } else {
        this.$router.push({
          path: '/hotel',
          query: { city: this.conditionsForm.city
          }
        })
      }
      this.destinationCityData = value
      console.log('这是选择后城市数据')
      console.log(this.destinationCityData)
      await this.$axios({
        url: '/hotels',
        params: {
          city: this.conditionsForm.city
        }
      }).then((res) => {
        const data = res.data
        // 上面为传送数据部分
        this.createMap(data.data)
        this.hotels = data
        return data
      })
    },
    // 输入返回，城市列表
    async getCity (value, showList) {
      const cityList = await this.getCityList(value)
      console.log(cityList)
      if (showList) {
        showList(cityList)
      }
      this.conditionsForm.city = cityList[0].id
      console.log('下面是城市Id')

      console.log(this.conditionsForm.city)
      this.destinationCityData = cityList[0]
    },
    getCityList (value) {
      return this.$axios({
        url: '/cities',
        params: {
          name: value
        }
      }).then((res) => {
        console.log(res)
        const { data } = res.data
        const citys = data
          .map((e) => {
            return {
              ...e,
              value: e.name
            }
          })
        // citys.split(7, 10)
        const cityList = citys.filter(element => element.id)
        // 准备建议数据,然后时候 showList 回调返回到 组件当中显示
        return cityList
      })
    }
  }
}
</script>

<style lang='less' scoped>

/deep/.amap-maps{
.marker{
    display: inline-block;
    width: 22px;
    height: 36px;
    background-image: url(https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png);
    background-size: 22px 36px;
    text-align: center;
    line-height: 24px;
    color: #fff;
}
.amap-overlays{
  .amap-info{
    .amap-info-contentContainer{
      font-size: 12px !important;
      color: #333
    }
  }
}
}
//上收
.iup {
  transform: rotate(270deg);
  color: #f90;
}
//下拉
.idown {
  transform: rotate(90deg);
  color: #f90;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
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
      i {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 27px;
        font-size: 16px;
        color: #c0c4cc;
      }
      /deep/.el-input {
        width: 89%;
      }
    }
    .selNumTooltip {
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
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      div {
        height: 28px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
        span {
          float: left;
          margin-top: 5px;
        }
        .el-select {
          float: right;
          margin-left: 5px;
        }
      }
      /deep/.el-input__inner {
        width: 91.5px;
      }
      .el-button {
        margin-top: 20px;
        float: right;
      }
    }
    .priceBtn {
      margin-left: -11px;
    }
  }
  .mt {
    margin-top: 23px;
  }
  .borderButton {
    padding-bottom: 23px;
  }
  .hotelContact {
    font-size: 14px;
    sup {
      background: #ccc;
      color: #fff;
      font-size: 12px;
      width: 1.2em;
      display: inline-block;
      height: 1.2em;
      border-radius: 100%;
      text-align: center;
    }
    .areaPath {
      margin-left: -10px;
      span{
        margin-right: 18px;
        border-radius: 4px;
        padding: 0 2px;
      }
      .myfocus {
        background-color: rgb(238, 238, 238);
        color: #999;

      }
      a {
        cursor: pointer;
        margin-right: 10px;
        &:hover {
          color: #09f;
          text-decoration: underline;
        }
      }
    }
    .strategyText {
      margin-left: -10px;
    }
    .avaragePrice {
      div {
        float: left;
        width: 24.6%;
        i {
          float: left;
        }
        span {
          margin-left: 5px;
        }
      }
      .price4 {
        width: 34.6%;
      }
      margin-left: -10px;
      .iconhuangguan {
        color: #f90;
        font-size: 16px;
      }
    }
    //隐藏类
    .hiddenAea {
      height: 41px;
      overflow: hidden;
    }
    .areahidden {
      margin-left: -10px;
    }
    #mymap {
      width: 420px;
      height: 260px;
    }
  }
}
</style>
