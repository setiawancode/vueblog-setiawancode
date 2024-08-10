<template>
  <div class="Intro">
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('assets/img/home-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Introduction</h1>
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
            <h3>Welcome to Setiawancode</h3>
            <p>
              Welcome to Setiawancode, a platform where developers and tech
              enthusiasts come together to share their knowledge, experiences,
              and insights. This website is a culmination of my passion for
              coding and web development, and I'm excited to share it with you.
              On this platform, you'll have the ability to create your own blog,
              where you can share your thoughts, tutorials, and projects with
              the community. You'll also be able to browse and discover blogs
              from other developers, learning from their experiences and gaining
              new perspectives
            </p>
            <p>
              But that's not all - our platform also allows you to explore blogs
              by tags, making it easy to find content that resonates with your
              interests. Whether you're looking for tutorials on a specific
              programming language, insights into the latest industry trends, or
              simply wanting to connect with like-minded individuals, our tag
              system has got you covered. With features like creating, editing,
              and deleting your own blog posts, as well as the ability to browse
              and engage with others, Setiawancode is the perfect platform for
              anyone looking to connect, learn, and grow in the world of tech.
              So what are you waiting for? Start exploring, creating, and
              connecting today! Let me know if you'd like me to make any
              changes!
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
  name: "Intro",
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
