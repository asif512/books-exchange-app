<template>
  <div class="dashboard d-flex">
    <app-sidebar />
    <main style="width: 100%; height: 100%; margin-left: 2rem">
      <b-card>header</b-card>
      <b-card class="h-100 mt-2">
        <slot />
      </b-card>
    </main>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Dashboard",
  components: {
    "app-sidebar": Sidebar,
  },
  data() {
    return {};
  },
};
</script>
<style></style>
