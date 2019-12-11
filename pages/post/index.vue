<template>
  <div class="container">
    <el-row type="flex" justify="space-bwtween">
      <el-col class="aside" :span="7">
        <!-- 侧边栏 -->
        <PostAside />
        <PostTJimg />
      </el-col>
      <el-col class="search-article" :span="17">
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
              <i class="el-icon-edit"></i>
              <span>写游记</span>
            </el-button>
          </el-col>
        </el-row>
        <!-- 推荐文章列表 -->
        <el-row>
          <PostList />
        </el-row>
      </el-col>
    </el-row>
  <div>
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
