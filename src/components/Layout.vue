<template>
  <div class="layout">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <slot></slot>
        </div>
        <div class="col-sm-4">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}
</style>
