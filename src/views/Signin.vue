<template>
  <div class="signin-form h-100" style="overflow: hidden">
    <b-row align-v="center" align-h="center" class="h-100">
      <b-col cols="10" sm="8" md="5">
        <b-card>
          <b-alert show v-if="showMessage && showMessage !== null">{{
            showMessage
          }}</b-alert>
          <b-form @submit="onSubmit">
            <b-form-group class="my-3" label="User email:" label-for="email">
              <b-form-input
                id="email"
                class="mt-1"
                v-model="user.email"
                type="email"
                placeholder="Enter user email"
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
import { projectAuth } from "@/firebase/config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { mapActions } from "vuex";
export default {
  name: "Signin",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      showMessage: null,
    };
  },
  methods: {
    ...mapActions(["setActiveUser"]),
    onSubmit(event) {
      signInWithEmailAndPassword(
        projectAuth,
        this.user.email,
        this.user.password
      )
        .then(() => {
          this.setActiveUser();
          this.$router.push("/");
        })
        .catch((error) => {
          this.showMessage = "user not found";
          console.log({ error });
        });
      event.preventDefault();
    },
    redirctSignupPage() {
      this.$router.push("/signup");
    },
  },
};
</script>
