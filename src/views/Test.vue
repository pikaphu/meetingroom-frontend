<template>
  <div>TEST</div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
//import "alertifyjs/build/css/themes/default.css";
import "alertifyjs/build/css/alertify.css";
//import alertifyjs from "alertifyjs";

export default {
  created() {
    // from direct import
    //alertifyjs.alert("test", () => alertifyjs.message("TEST1"));

    // from import * from Vue
    this.alertify.warning("กรุณาเลือกภาพที่จะอัพโหลด !");

    axios
      .get("api/account/getuserlogin")
      .then(response => {
        console.log("Success:", response);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scope>
/* @import "alertifyjs/build/css/alertify.css"; */
</style>
