<template>
  <div class="signup-form h-100" style="overflow: hidden">
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
            <b-form-group class="my-3" label="Email:" label-for="email">
              <b-form-input
                id="email"
                class="mt-1"
                v-model="user.email"
                type="email"
                placeholder="info@gmail.com"
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
              <b-button type="submit" variant="primary">Sign up</b-button>
              <strong class="mx-2" style="font-size: 12px">OR</strong>
              <b-button @click="redirectSigninPage" variant="primary"
                >Sign in</b-button
              >
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Signup",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit(event) {
      try {
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.user.email,
          this.user.password
        );
        console.log({ createUser });
        // const dataBase = db.collection("users").doc(createUser.user.uid);
        // await dataBase.set({
        //   username: this.username,
        //   email: this.email,
        //   password: this.password,
        // });
        // this.$router.push('/');
      } catch (error) {
        console.log({ error });
      }
      event.preventDefault();
      alert(JSON.stringify(this.user));
    },
    redirectSigninPage() {
      this.$router.push("/signin");
    },
  },
};
</script>
