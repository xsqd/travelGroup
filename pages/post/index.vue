<template>
  <div>
    <!-- 侧边栏 -->
    <PostAside />
    <PostTJimg />
    <!-- 顶部搜索框 -->
    <PostSearch />
    <!-- 推荐文章列表 -->
    <PostList />
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
  }
}
</script>

<style>
</style>
