<template>
  <div></div>
</template>

<script>
import "alertifyjs/build/css/themes/default.css";
import "alertifyjs/build/css/alertify.css";
import alertifyjs from "alertifyjs";

export default {
  created() {
    alertifyjs.alert("test", () => alertifyjs.message("TEST1"));
  }
};
</script>

<style scope>
/* @import "alertifyjs/build/css/alertify.css"; */
</style>
