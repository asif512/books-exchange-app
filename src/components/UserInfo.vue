<template>
  <div class="user-info mt-3">
    <h4>User Contact Informaiton</h4>
    <b-avatar class="my-2" :src="userInfo.avatar" size="6rem"></b-avatar>
    <div>
      Username: <strong>{{ userInfo.name }}</strong>
    </div>
    <div>
      Email: <strong>{{ userInfo.email }}</strong>
    </div>
    <div>
      Address: <strong>{{ userInfo.address }}</strong>
    </div>
    <div>
      Phone:
      <strong
        ><a :href="`tel:+92${userInfo.phone}`">{{ userInfo.phone }}</a></strong
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: {
        avatar:
          "https://www.aljazeera.com/wp-content/uploads/2021/05/366420282.jpg?resize=770%2C513",
        name: "Asif",
        email: "asif@gmail.com",
        address: "danyore",
        phone: "000-1111-22222",
      },
    };
  },
};
</script>
