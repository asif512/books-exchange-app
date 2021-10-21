<template>
  <div class="sidebar">
    <!-- <router-link to="profile">Profile</router-link>
        <router-link to="setting">Setting</router-link> -->
    <div
      @click="redirectPage('dashboard')"
      class="nav-item d-flex align-items-center justify-content-start px-2 py-2"
    >
      <b-icon icon="eye-fill"></b-icon>
      <span style="margin-left: 8px">Dashbaord</span>
    </div>
    <div
      @click="redirectPage('profile')"
      class="nav-item d-flex align-items-center justify-content-start px-2 py-2"
    >
      <b-icon icon="eye-fill"></b-icon>
      <span style="margin-left: 8px">Profile</span>
    </div>
    <div
      @click="redirectPage('setting')"
      class="nav-item d-flex align-items-center justify-content-start px-2 py-2"
    >
      <b-icon icon="eye-fill"></b-icon>
      <span style="margin-left: 8px">Setting</span>
    </div>
    <div
      @click="redirectPage('posts')"
      class="nav-item d-flex align-items-center justify-content-start px-2 py-2"
    >
      <b-icon icon="eye-fill"></b-icon>
      <span style="margin-left: 8px">Post Books</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    redirectPage(link) {
      this.$router.push(`/${link}`);
    },
  },
};
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
.nav-item:hover {
  background-color: #f2f2f2;
}
</style>
