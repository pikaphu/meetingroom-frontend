<template>
  <Layout>
    <div slot="buttons" class="form-group">
      <router-link class="btn" :to="{ name: 'equipment-list' }"
        >List</router-link
      >
      <router-link class="btn" :to="{ name: 'equipment-form' }"
        >Add Item</router-link
      >
    </div>

    <div class="card">
      <div class="card-body">
        <header class="mb-4">
          <Search :types="search_types" @onSearch="onSearch($event)" />
          <h5><i class="fa fa-list-alt"></i> Equipment List</h5>
        </header>
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Detail</th>
              <th>Last Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="equipments != null">
            <tr v-for="item in equipments.result" :key="item.eq_id">
              <td>
                <div class="img-container">
                  <img :alt="item.eq_name" :src="getImgUrl(item.eq_image)" />
                </div>
              </td>
              <td>{{ item.eq_name }}</td>
              <td>{{ item.eq_detail || "No Data." }}</td>
              <td>{{ item.eq_updated }}</td>
              <td class="text-right">
                <i
                  @click="onUpdate(item)"
                  class="pointer fa fa-edit text-info mr-2"
                ></i>
                <i
                  @click="onDelete(item)"
                  class="pointer fa fa-trash text-danger"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- :page="page" this will raise "error please avoid mutating direct prop values on rendering" -->
        <Pagination :data="equipments" @onPage="onPage($event)"></Pagination>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import { mapState } from "vuex";
import { api } from "../../services/api";
export default {
  components: {
    Layout,
    Search,
    Pagination
  },
  data() {
    return {
      page: 1,
      search: {},
      search_types: [
        { name: "Name", value: "eq_name" },
        { name: "Detail", value: "eq_detail" }
      ]
    };
  },
  created() {
    // console.log("cookie:", document.cookie);
    this.$store.dispatch("set_equipments"); // Fetch data from DB
  },
  computed: {
    ...mapState(["equipments"])
  },
  methods: {
    getImgUrl(name) {
      return `${process.env.VUE_APP_CONTENT_URL ||
        "localhost"}/uploads/equipments/${name}`;
    },
    // Update an item
    onUpdate(item) {
      this.$router.push({ name: "equipment-form", query: { id: item.eq_id } });
    },
    // Delete an item
    onDelete(item) {
      this.alertify.confirm(
        "Delete a data",
        "Confirm, Do you want to delete this?",
        () => {
          console.log("OK");
          api
            .delete(`/api/equipment/${item.eq_id}`)
            .then(() => this.$store.dispatch("set_equipments"))
            .catch(error => this.alertify.error(error.response.data.message));
        },
        () => {
          console.log("Cancel");
        }
      );
    },
    // Pagination
    onPage(page) {
      console.log("page:", page);
      this.page = page;
      this.$store.dispatch("set_equipments", {
        page: this.page,
        ...this.search
      });
    },
    // Filter
    onSearch(search) {
      console.log("Search:", search);
      this.search = search;
      this.page = 1;
      this.$store.dispatch("set_equipments", {
        page: this.page,
        ...this.search
      });
    }
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
