<template>
  <div class="main">
    <el-row type="flex" justify="space-between">
      <el-col class="map">
        <div id="map"></div>
      </el-col>
      <el-col style="width:330px">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="风景" name="first">
            <ul id="scenicList">
              <li v-for="(value,index) in poiList.scenic" :key="index" @mouseover="onhover(value)">
                <span>{{value.name}}</span>
                <span>{{value.distance1}}</span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="交通" name="second">
            <ul id="scenicList">
              <li v-for="(value,index) in poiList.traffic" :key="index" @mouseover="onhover(value)">
                <span>{{value.name}}</span>
                <span>{{value.distance1}}</span>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["hotelData"],
  watch: {
    hotelData() {
      // console.log(this.hotelData);
      this.position = [
        this.hotelData.location.longitude,
        this.hotelData.location.latitude
      ];
    }
  },
  data() {
    return {
      activeName: "first",
      position: [],
      poiList: {
        scenic: [],
        traffic: []
      },
      searchNearBy: {
        scenic: "风景名胜",
        traffic: "交通设施服务"
      }
    };
  },
  methods: {
    //鼠标hover事件
    onhover(value) {
      var map = this.map;
      // 添加信息窗口
      new AMap.InfoWindow({
        content: '<span style="font-size: 12px;color: #333">'.concat(
          value.name,
          "</span>"
        ),
        offset: new AMap.Pixel(0, -32)
      }).open(map, value.location.split(","));
      // maker居中
      map.setCenter(value.location.split(","));
    },
    //tab栏目切换事件
    handleClick(tab, event) {
      var map = this.map;
      if (tab.index === "1") {
        // 清除地图原有标记
        map.clearMap();
        this.hotelMarker()
        this.search("traffic");
      } else {
        map.clearMap();
        this.hotelMarker()
        this.search("scenic");
      }
    },
    // 根据 类别搜索周边
    search(poiKey) {
      let this_ = this;
      var map = this.map;
      this.$axios({
        url: "https://restapi.amap.com/v3/place/text",
        params: {
          //查询城市
          city: this.real_city,
          //经纬度
          location: `${this.position[0]},${this.position[1]}`,
          // 兴趣点类型
          types: this.searchNearBy[poiKey],
          output: "json",
          page: 1,
          offset: 10,
          key: "79041dfa1c752f49599e2b507c64da42"
        }
      }).then(function(e) {
        // t.list[t.poiKey] = e.data,
        // t.addMarks()
        var makerList = [];
        let res = [];
        // 遍历搜索结果
        e.data.pois.forEach((el, i) => {
          // console.log(el.location);
          // console.log(typeof el.location);
          // console.log(el);
          // console.log(i + 1);
          // 将每个坐标转换成数组
          var arr = el.location.split(",");
          // 存入每个 搜索出来的结果 到 res中 方便渲染
          res.push({
            // id: el.id,
            // position: arr,
            // desc: el.name,
            //计算两点间的距离
            distance1:
              (AMap.GeometryUtil.distance(arr, this_.position) / 1000).toFixed(
                2
              ) + "公里",
            ...el
          });
          // console.log(res);
          // 将搜索结果赋给 列表 渲染左侧列表
          this_.poiList[poiKey] = res;
          // maker的样式
          var content = '<span id="marker" style="display: inline-block;width: 22px;height: 36px;background-image: url(https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png);background-size: 22px 36px;text-align: center;line-height: 24px;color: #fff;" data-id='
            .concat(i + 1, ">")
            .concat(i + 1, "</span>");
            // 新建maker
          var marker = new AMap.Marker({
            position: arr, //位置,
            title: el.name,
            content: content
          });
          // 创建maker 的mouseover事件
          marker.on("mouseover", e => {
            // console.log(e);
            new AMap.InfoWindow({
              content: '<span style="font-size: 12px;color: #333">'.concat(
                el.name,
                "</span>"
              ),
              offset: new AMap.Pixel(0, -32)
            }).open(map, arr);
            map.setCenter(marker.getPosition());
          });
          // console.log(makerList);
          // 把所有marker存入数组
          makerList.push(marker);
        });
        // 添加所有marker
        map.add(makerList);
        //保证所有覆盖物都在视野范围内
        map.setFitView();
      });
    },
    // 获取酒店的marker 添加酒店的信息窗口
    hotelMarker() {
      var this_ = this;
      var map = this.map
      var content = '<span id="marker" style="display: inline-block;width: 22px;height: 36px;background-image: url(http://157.122.54.189:9093/images/mark_b.png);background-size: 22px 36px;text-align: center;z-index:9999;line-height: 24px;color: #fff;" data-id='.concat(
        0,
        "></span>"
      );
      var marker = new AMap.Marker({
        position: this_.position, //位置
        content: content
      });
      // console.log(this_.position);
      marker.on("mouseover", e => {
        // console.log(e);
        new AMap.InfoWindow({
          content: '<span style="font-size: 12px;color: #333">'.concat(
            this_.hotelData.name,
            "</span>"
          ),
          offset: new AMap.Pixel(0, -32)
        }).open(map, this_.position);
        map.setCenter(this_.position);
      });
      map.add(marker);
    }
  },
  mounted() {
    let this_ = this;
    setTimeout(() => {
      window.onLoad = function() {
        // console.log(this_.position);
        // console.log(this_.hotelData);
        var map = new AMap.Map("map");
        this_.map = map;
        this_.hotelMarker()
        this_.search("scenic");
      };
      var url =
        "https://webapi.amap.com/maps?v=1.4.15&key=5b8d2153031276947f40a141875a9cb8&callback=onLoad";
      var jsapi = document.createElement("script");
      jsapi.charset = "utf-8";
      jsapi.src = url;
      document.head.appendChild(jsapi);
    }, 1000);
  }
};
</script>

<style lang="less" scoped>
.main {
  padding: 40px 0;
  .el-row {
    .map {
      width: 650px;
      height: 360px;
      #map {
        width: 100%;
        height: 100%;
      }
    }
    .el-col:nth-child(2) {
      ul {
        width: 330px;
        height: 302px;
        //文本溢出加滚动条
        overflow-y: auto;
        li {
          display: flex;
          padding: 0 10px 20px 10px;
          font-size: 14px;
          justify-content: space-between;
          cursor: pointer;
        }
      }
    }
  }
}
</style>