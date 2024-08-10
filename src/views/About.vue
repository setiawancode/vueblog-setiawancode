<template>
  <div class="About">
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('assets/img/home-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>About Me</h1>
              <span class="subheading">Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <h3>This Is Free Blog Website</h3>
            <p>
              Hello and welcome to my blog, Setiawancode! I'm Veri, a beginner
              developer excited to share my journey and experiences with you.
              This blog is where I'll be posting updates, tutorials, and
              insights into the world of coding and web development
            </p>
            <h3>About Me</h3>
            <p>
              As a beginner developer, I'm passionate about learning and growing
              in the tech industry. I'm eager to share my knowledge and skills
              with others, and I hope to inspire and motivate fellow developers
              to keep pushing forward
            </p>
            <h3>Get in Touch</h3>
            <p>
              Want to stay updated on my latest posts and projects? Follow me on
              social media or subscribe to my newsletter!
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import getPosts from "@/composable/getPosts";
import Loading from "@/components/Loading";
export default {
  name: "About",
  components: {
    Loading,
  },
  setup() {
    const { error, load } = getPosts();

    load();

    return { error };
  },
  mounted() {
    console.log($(".para").text());
  },
};
</script>
