<template>
  <div class="home">
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('assets/img/home-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading"
                >Postingan dengan #{{ $route.params.tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <h2>Tag: {{ $route.params.tag }}</h2>
          <div v-if="error">{{ error }}</div>
          <div v-if="postsWithTag.length">
            <PostList :posts="postsWithTag" />
          </div>
          <div v-else>
            <Loading />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import getPosts from "@/composable/getPosts";
import Loading from "@/components/Loading";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Tag",
  components: {
    PostList,
    Loading,
  },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { posts, error, postsWithTag };
  },
  mounted() {
    console.log($(".para").text());
  },
};
</script>
