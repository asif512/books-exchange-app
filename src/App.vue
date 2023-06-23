<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Default from "./layout/Default.vue";
import Dashboard from "./layout/Dashboard.vue";
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions(["setActiveUser"]),
  },
  mounted() {
    this.setActiveUser();
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
  background: #f8f9fa !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
}
.default-layout,
.dashboard {
  height: 100%;
}
</style>
