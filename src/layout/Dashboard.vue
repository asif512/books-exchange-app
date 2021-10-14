<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <app-sidebar :collapsed="collapsed" />
    <a-layout>
      <app-nav
        :collapsed="collapsed"
        @handle-collapsed="() => (collapsed = !collapsed)"
      />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Nav from "../components/Nav.vue";
export default {
  name: "Dashboard",
  components: {
    "app-sidebar": Sidebar,
    "app-nav": Nav,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
