<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-preview">
      <!-- Post preview-->
      <div class="post-preview"></div>
      <!-- Divider-->
      <hr class="my-4" />
      <!-- Post preview-->
      <div>
        <PostSingle :post="post" />
      </div>
      <!-- Divider-->
    </div>
    <hr class="my-4" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import PostSingle from "./PostSingle";
export default {
  props: ["posts"],
  components: {
    PostSingle,
  },
  setup(props) {
    onMounted(() => {
      console.log("component mounted");
    });
    onUnmounted(() => {
      console.log("component unmounted");
    });
    onUpdated(() => {
      console.log("component updated");
    });
  },
};
</script>
<style></style>
