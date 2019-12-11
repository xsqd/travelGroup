<template>
  <div>
    旅游攻略首页
    <PostList />旅游攻略首页
    <PostSearch />
  </div>
</template>

<script>
import PostList from "@/components/post/postList";
import PostSearch from "@/components/post/postSearch";
export default {
  components: {
    PostList,
    PostSearch
  }
};
</script>

<style>
</style>
