<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="px-4">
    <b-navbar-brand style="cursor: pointer" @click="redirectHomePage"
      >Books Exchange App</b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="d-flex justify-content-end">
      <b-navbar-nav class="ml-auto" right>
        <b-nav-item @click="redirctSigninPage">Sign in</b-nav-item>
        <b-nav-item @click="redirctSignupPage">Sign up</b-nav-item>
        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Header",
  methods: {
    redirectHomePage() {
      console.log(123);
      this.$router.push("/");
    },
    redirctSigninPage() {
      this.$router.push("/signin");
    },
    redirctSignupPage() {
      this.$router.push("/signup");
    },
  },
};
</script>
