<template>
  <div class="home">
    <app-slider />
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    'app-slider': Slider,
  },
};
</script>
