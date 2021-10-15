<template>
  <div class="register-wrapper">
    <a-card style="margin: auto">
      <div class="register-form">
        <a-input
          v-model="user.username"
          placeholder="Username"
          style="margin: 4px 0"
        >
          <a-icon slot="prefix" type="user" />
        </a-input>
        <a-input
          v-model="user.email"
          placeholder="Email"
          style="margin: 4px 0"
        >
          <a-icon slot="prefix" type="mail" />
        </a-input>
        <a-input
          v-model="user.password"
          placeholder="Password"
          type="password"
          style="margin: 4px 0"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input>
        <a-button
          type="primary"
          style="margin-top: 10px"
          @click="handleRegister"
        >
          Sign up
        </a-button>
        <a-divider>OR</a-divider>
        <a-button type="primary" @click="RedirectLogin">Login</a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleRegister() {
      console.log({ user: this.user });
    },
    RedirectLogin() {
        this.$router.push('login')
    }
  },
};
</script>

<style scoped>
.register-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.register-form {
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
}
</style>