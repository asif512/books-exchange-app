<template>
  <div class="dashboard">
    <app-header />
    <div class="body mt-5">
      <b-row class="w-100 m-0">
        <b-col cols="12" md="3">
          <app-sidebar />
        </b-col>
        <b-col cols="12" md="9" class="p-0">
          <main>
            <b-card class="h-100" style="min-height: 400px !important">
              <slot />
            </b-card>
          </main>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Dashboard",
  components: {
    "app-sidebar": Sidebar,
    "app-header": Header,
  },
  data() {
    return {};
  },
};
</script>
<style></style>
