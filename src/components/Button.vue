<template>
  <div class="button-wrapper d-flex justify-content-center">
    <b-button variant="outline-primary" @click="handleClicked">
      <slot />
    </b-button>
  </div>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handleClicked() {
      this.$emit("show-more");
    },
  },
};
</script>
