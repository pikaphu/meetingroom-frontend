<template>
  <div class="home">
    <!-- <Navbar /> -->
    <Layout>
      <div class="card">
        <div class="card-body"></div>
      </div>
    </Layout>

    <div
      v-if="isAuth"
      style="margin: 20px;position: absolute;left: 0;top: 25%;"
    >
      <p>User ID: {{ userData.u_id }}</p>
      <p>User Login: {{ userData.u_username }}</p>
      <p>User Firstname: {{ userData.u_firstname }}</p>
      <p>User Lastname: {{ userData.u_lastname }}</p>
      <p>User Role: {{ userData.u_role }}</p>
    </div>
  </div>
</template>

<script>
import Layout from "../components/Layout.vue";
export default {
  name: "home",
  components: {
    Layout
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
