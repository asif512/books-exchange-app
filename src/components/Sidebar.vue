<template>
  <div class="sidebar" style="width: 200px">
    <b-card class="h-100">
      <!-- <router-link to="profile">Profile</router-link>
        <router-link to="setting">Setting</router-link> -->
      <b-card-text>Dashboard</b-card-text>
      <b-card-text @click="redirectPage('profile')">Profile</b-card-text>
      <b-card-text @click="redirectPage('setting')">Setting</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    redirectPage(link) {
      this.$router.push(`/${link}`);
      console.log(link);
    },
  },
};
</script>
