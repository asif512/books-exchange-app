<template>
  <div class="home">
    <app-header />
    <app-slider />
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    "app-slider": Slider,
    "app-header": Header
  }
};
</script>
