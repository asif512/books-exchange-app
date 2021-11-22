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
        <b-nav-item-dropdown right v-if="activeUser">
          <template #button-content>
            <em>{{ username }}</em>
          </template>
          <b-dropdown-item href="#" @click="redirctDashboard"
            >Dashboard</b-dropdown-item
          >
          <b-dropdown-item href="#" @click="handleLogout"
            >Sign Out</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { projectAuth } from "@/firebase/config.js";
import { signOut } from "@firebase/auth";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["activeUser"]),
    username() {
      return this.activeUser?.displayName;
    },
  },
  methods: {
    ...mapActions(["setActiveUser"]),
    handleLogout() {
      signOut(projectAuth)
        .then(() => {
          this.setActiveUser();
          if (location.pathname !== "/") {
            this.$router.push("/");
          }
          console.log("logout..");
        })
        .catch((error) => console.log(error));
    },
    redirctDashboard() {
      this.$router.push("/dashboard");
    },
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
