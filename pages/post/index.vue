<template>
  <div class="container">
    <el-row type="flex" justify="space-bwtween">
      <el-col :span="7" class="aside">
        <!-- 侧边栏 -->
        <PostAside :postList="postLists" @postlistAside="postlistAsides" />
        <PostTJimg />
      </el-col>
      <el-col :span="17" class="search-article">
        <!-- 顶部搜索框 -->
        <el-row>
          <PostSearch :postList="postLists" @postlistsearch="postlistAsides" />
        </el-row>
        <!-- 推荐攻略和写游记按钮 -->
        <el-row type="flex" justify="space-bwtween" class="post-title">
          <el-col :span="4">
            <h4>推荐攻略</h4>
          </el-col>
          <el-col :span="4" :offset="16" class="btn">
            <el-button type="primary">
              <i class="el-icon-edit" />
              <span>写游记</span>
            </el-button>
          </el-col>
        </el-row>
        <!-- 推荐文章列表 -->
        <PostList v-for="(item,index) in dataList" :key="index" :listContent="item" />
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[3, 6, 9, 12]"
          :page-size="3"
          layout="total, sizes, prev, pager, next, jumper"
          :total="postList.length"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PostList from "@/components/post/postList";
import PostAside from "@/components/post/postAside";
import PostTJimg from "@/components/post/postTJimg";
import PostSearch from "@/components/post/postSearch";
export default {
  data() {
    return {
      postList: [], // 渲染列表的数据
      currentPage: 1, // 当前页
      currentPageSize: 3, // 当前每页显示条数
      postLists: []
    };
  },
  components: {
    PostList,
    PostAside,
    PostTJimg,
    PostSearch
  },
  computed: {
    // 计算一个变量，这个变量是用来进行分页的
    dataList() {
      // 列表开始的索引
      var start = (this.currentPage - 1) * this.currentPageSize;
      // 列表结束的索引
      var end = start + this.currentPageSize;
      return this.postList.slice(start, end);
    }
  },
  mounted() {
    this.loadPage();
  },
  methods: {
    // 请求数据加载封装
    loadPage() {
      // 获取列表数据
      this.$axios({
        url: "/posts"
      }).then(res => {
        // console.log(res);
        this.postList = res.data.data;
        this.postLists = [...res.data.data];
        console.log(this.postList);
      });
    },
    // 每页显示的文章条数
    handleSizeChange(currentPageSize) {
      console.log(currentPageSize);
      this.currentPageSize = currentPageSize;
    },
    // 当前页面是第几页
    handleCurrentChange(currentPage) {
      console.log(currentPage);
      this.currentPage = currentPage;
    },
    postlistAsides(item) {
      this.postList = item
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  .aside {
    // width: 260px;
    margin-right: 40px;
  }
  .search-article {
    .post-title {
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
      h4 {
        font-weight: normal;
        font-size: 18px;
        color: orange;
      }
      .btn {
        text-align: right;
      }
    }
  }
}
</style>
