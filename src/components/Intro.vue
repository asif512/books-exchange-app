<template>
  <div
    class="
      intro
      d-flex
      flex-column
      justify-content-center
      align-items-start
      px-4
    "
  >
    <h4>Swap your old books for exciting new reads</h4>
    <p>
      An easy and fun way to swap books you no longer need for books you want to
      read.
    </p>
    <b-button @click="redirctSigninPage">Get Started</b-button>
  </div>
</template>

<script>
export default {
  name: "Intro",
  methods: {
    redirctSigninPage() {
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
.intro {
  height: 500px;
  background: url("https://bookswap.co.uk/assets/images/bookswap-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
