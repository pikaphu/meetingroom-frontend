<template>
  <Layout>
    <div slot="buttons" class="form-group">
      <router-link class="btn" :to="{ name: 'equipment-list' }"
        >รายการข้อมูล</router-link
      >
      <router-link class="btn" :to="{ name: 'equipment-form' }"
        >เพิ่มข้อมูลใหม่</router-link
      >
    </div>
    <div class="card">
      <div class="card-body">
        <header class="mb-4">
          <h5><i class="fa fa-list-alt"></i> รายการข้อมูลอุปกรณ์ห้องประชุม</h5>
        </header>
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่ออุปกรณ์ห้องประชุม</th>
              <th>รายละเอียด</th>
              <th>วันที่แก้ไขล่าสุด</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in equipments" :key="item.eq_id">
              <td></td>
              <td>{{ item.eq_name }}</td>
              <td>{{ item.eq_detail || "ไม่มีข้อมูล" }}</td>
              <td>{{ item.eq_updated }}</td>
              <td class="text-right">
                <i class="pointer fa fa-edit text-info mr-2"></i>
                <i class="pointer fa fa-trash text-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["equipments"])
  },
  components: {
    Layout
  },
  created() {
    this.$store.dispatch("set_equipments");
  }
};
</script>

<style scoped>
.btn {
  color: #ffffff;
  background-color: #ced4da;
  margin-right: 7px;
  min-width: 130px;
}
.btn.router-link-active {
  background-color: #17a2b8;
}
</style>
