<template>
  <div class="nav">
    <a-layout-header
      style="
        background: #fff;
        padding: 0 1rem 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      "
    >
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="handleClicked"
      />
      <a-avatar size="large" icon="user" />
    </a-layout-header>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: ["collapsed"],
  methods: {
    handleClicked() {
      this.$emit("handle-collapsed");
    },
  },
};
</script>