<template>
  <div class="dashboard">
    <div class="header">header section</div>
    <div class="sidebar">Siderbar section</div>
    <main>
      <slot />
    </main>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {};
  },
};
</script>
<style></style>
