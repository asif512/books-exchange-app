<template>
  <div class="signin-form h-100" style="overflow: hidden">
    <b-row align-v="center" align-h="center" class="h-100">
      <b-col cols="10" sm="8" md="5">
        <b-card>
          <b-form @submit="onSubmit">
            <b-form-group class="my-3" label="Username:" label-for="username">
              <b-form-input
                id="username"
                class="mt-1"
                v-model="user.name"
                type="text"
                placeholder="Enter username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group class="my-3" label="Password:" label-for="password">
              <b-form-input
                id="password"
                class="mt-1"
                type="password"
                v-model="user.password"
                placeholder="Enter password"
                required
              ></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-end align-items-center">
              <b-button type="submit" variant="primary">Sign in</b-button>
              <strong class="mx-2" style="font-size: 12px">OR</strong>
              <b-button @click="redirctSignupPage" variant="primary"
                >Sign up</b-button
              >
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.user));
    },
    redirctSignupPage() {
      this.$router.push("/signup");
    },
  },
};
</script>
