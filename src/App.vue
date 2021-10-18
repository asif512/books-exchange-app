<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Dashboard from "./layout/Dashboard.vue";
import Default from "./layout/Default.vue";
export default {
  name: "App",
  components: {
    Dashboard,
    Default,
  },
  data() {
    return {
      defaultLayout: "Default",
    };
  },
  computed: {
    layout() {
      return this.$route.meta.layout || this.defaultLayout;
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
body {
  background: #f2f7f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
}
</style>
