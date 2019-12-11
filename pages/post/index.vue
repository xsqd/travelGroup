<template>
  <div>
    旅游攻略首页
    <!-- 顶部搜索框 -->
    <!-- 侧边栏 -->
    <PostAside />
    <!-- 推荐文章列表 -->
    <PostList />
    
  </div>
</template>

<script>
import PostList from "@/components/post/postList";
import PostAside from "@/components/post/postAside";
export default {
  components: {
    PostList,
    PostAside
  }
};
</script>

<style>
</style>
