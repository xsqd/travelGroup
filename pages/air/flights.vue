<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :flightsData="cacheFlightsData" @setFlightsData="setFlightsData"/>

        <!-- 航班头部布局 -->
        <div>
          <FlightsListHead />
        </div>

        <!-- 航班信息 -->
        <div>
          <!-- 航班列表 -->
          <FlightsItem :flight="item" v-for="(item,index) in dataList" :key="index" />
          <!-- 分页 -->
          <!-- size-change：切换条数时候触发 -->
          <!-- current-change：选择页数时候触发 -->
          <!-- current-page: 当前页数 -->
          <!-- page-size：当前条数 -->
          <!-- total：总条数 -->
          <el-pagination 
            
            layout="prev, pager, next, jumper, sizes, total"
           :total="flightsData.flights.length"
           :page-sizes="[5, 10, 15, 20]"
           :current-page="pageIndex"
           :page-size="pageSize"
           @size-change="sizeChange"
            @current-change="changePageIndex"
            v-if="dataList.length > 0"
           ></el-pagination>
           <div v-else-if="!loading">本页暂无数据</div>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
        <FlightsAside/>
      </div>
    </el-row>
  </section>
</template>

<script>
import moment from "moment";
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue"
import FlightsAside from "@/components/air/flightsAside.vue"

export default {
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  data() {
    return {
      loading:true,
      cacheFlightsData: {
        flights: [],
        info: {},
        options: {}
      }, // 缓存原始航班总数据
      flightsData: {
        flights: [],
        info: {},
        options: {}
      }, // 航班总数据
      // dataList 可以放在计算属性里面,无需每次都调用函数进行计算
      // dataList: [], // 航班列表数据，用于循环flightsItem组件，单独出来是因为要分页
      pageIndex:1,//当前页数
      pageSize:5//显示条数
    };
  },
  computed: {
    dataList(){
      var start = (this.pageIndex-1)*this.pageSize
      var end = start + this.pageSize
      //数组slice方法接受两个参数，第一个是切割的开始（包括当前index），第二个是切割的结束（不g包括当前index）
      return this.flightsData.flights.slice(start,end)
    }
  },
  methods: {
    changePageIndex(pageIndex){
      this.pageIndex = pageIndex
    },
    sizeChange(pageSize){
      this.pageSize = pageSize
    },
    setFlightsData(newFlightsList){
      console.log("修改机票筛选参数被触发");
      //接受到新的机票数据
      this.flightsData.flights = newFlightsList
    }
  },
  mounted() {
    // console.log(this.$route.query);
    // 对于路由,两种参数分别是 params 和 query
    // 对于 axios 两种参数分别是 data 和 params
    this.$axios({
      url: "/airs",
      //参数可以通过 this.$route.query
      // 这里面数据本来就是一个对象,所以无需自己拼接
      params: this.$route.query
    }).then(res => {
      console.log(res);
      this.flightsData = res.data;
      // 这里是分页, 我们需要拿到数据的开始index 和结尾的 index
      // this.dataList = this.flightsData.flights;
      // 为了避免引用类型数据污染问题,需要进行深拷贝
      this.cacheFlightsData = { ...this.flightsData };
      
      this.loading = false
    });
  },
  watch: {
    $route(){
      this.$axios({
      url: "/airs",
      //参数可以通过 this.$route.query
      // 这里面数据本来就是一个对象,所以无需自己拼接
      params: this.$route.query
    }).then(res => {
      console.log(res);
      this.flightsData = res.data;
      // 这里是分页, 我们需要拿到数据的开始index 和结尾的 index
      // this.dataList = this.flightsData.flights;
      // 为了避免引用类型数据污染问题,需要进行深拷贝
      this.cacheFlightsData = { ...this.flightsData };
      
      this.loading = false
    });
    }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>