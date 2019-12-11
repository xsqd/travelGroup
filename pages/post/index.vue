<template>
  <div>
    旅游攻略首页
    <!-- 顶部搜索框 -->
    <!-- 侧边栏 -->
    <PostAside />
    <!-- 推荐文章列表 -->
    <PostList />
    <PostTJimg />
  </div>
</template>

<script>
import PostList from '@/components/post/postList'
import PostAside from '@/components/post/postAside'
import PostTJimg from '@/components/post/postTJimg'
export default {
  components: {
    PostList,
    PostAside,
    PostTJimg
  }
}
</script>

<style>
</style>
