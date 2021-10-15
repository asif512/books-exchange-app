<template>
  <div class="login-wrapper">
    <a-card style="margin: auto">
      <a-form
        layout="inline"
        class="login-form"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item
          style="margin: 0"
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item
          style="margin: 0"
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
          <a-button
            style="margin-top: 10px; width: 100%"
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
          >
            Log in
          </a-button>
        <a-divider>OR</a-divider>
          <a-button type="primary" style="width: 100%" @click="RedirectRegister">Register</a-button>
      </a-form>
    </a-card>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$router.push('dashboard')
          console.log("Received values of form: ", values);
        }
      });
    },
    RedirectRegister() {
      console.log(this.$router)
      this.$router.push('register')
    }
  },
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
}
</style>
