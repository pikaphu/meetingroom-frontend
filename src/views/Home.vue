<template>
  <div class="home">
    <Navbar />
    <div v-if="isAuth">
      <p>User ID: {{ userData.u_id }}</p>
      <p>User Login: {{ userData.u_username }}</p>
      <p>User Firstname: {{ userData.u_firstname }}</p>
      <p>User Lastname: {{ userData.u_lastname }}</p>
      <p>User Role: {{ userData.u_role }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "home",
  components: {
    Navbar
  },
  data() {
    return {
      userData: "",
      u_username: ""
    };
  },
  computed: {
    isAuth() {
      return this.userData != null;
    }
  },
  created() {
    console.log("Store User:");
    console.table(Object.entries(this.$store.state.user));
    this.userData = this.$store.state.user;
  }
};
</script>
