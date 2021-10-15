<template>
  <a-layout-header
    :style="{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }"
  >
    <div class="logo" :style="{ color: '#fff' }">logo</div>
    <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
      <a-menu-item key="1" @click="redirectLogin"> login </a-menu-item>
      <a-menu-item key="2" @click="redirectRegister"> Register </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    redirectRegister() {
      this.$router.push("register");
    },
    redirectLogin() {
      this.$router.push("login");
    },
  },
};
</script>