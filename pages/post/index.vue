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
          <PostSearch />
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
        <el-row>
          <PostList v-for="(item,index) in postList" :key="index" :listContent="item" />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PostList from '@/components/post/postList'
import PostAside from '@/components/post/postAside'
import PostTJimg from '@/components/post/postTJimg'
import PostSearch from '@/components/post/postSearch'
export default {
  components: {
    PostList,
    PostAside,
    PostTJimg,
    PostSearch
  },
  data () {
    return {
      postList: [],
      postLists: []
    }
  },
  mounted () {
    // 获取列表数据
    this.$axios({
      url: '/posts'
    }).then((res) => {
      console.log(res)
      this.postList = [...res.data.data]
      this.postLists = res.data.data
      console.log(this.postList)
    })
  },
  methods: {
    // 左侧选项筛选
    postlistAsides (item) {
      this.postList = item
    }
  }
}
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
