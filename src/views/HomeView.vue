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
              <h1>Free Blog</h1>
              <span class="subheading">This Is My First Website</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7"></div>
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
          <PostList :posts="posts" />
        </div>
        <div v-else>
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "../components/posts/PostList";
import getPosts from "../composable/getPosts";
import Loading from "@/components/Loading";
export default {
  name: "Home",
  components: {
    PostList,
    Loading,
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
  mounted() {
    console.log($(".para").text());
  },
};
</script>
