<template>
  <form @submit.prevent="onSearch()" class="search-form form-inline">
    <select class="form-control" v-model="formData.search_key">
      <option v-for="item in types" :key="item.value" :value="item.value"
        >Search {{ item.name }}</option
      >
    </select>

    <input
      type="text"
      class="form-control"
      v-model.trim="formData.search_text"
      placeholder="search..."
    />

    <button type="submit" class="btn btn-secondary">
      <i class="fa fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  props: {
    types: {
      type: Array
      // required: true
    }
  },
  data() {
    return {
      formData: {
        search_key: "",
        search_text: ""
      }
    };
  },
  mounted() {
    if (this.types && this.types.length > 0) {
      this.formData.search_key = this.types[0].value;
    }
  },
  methods: {
    onSearch() {
      this.$emit("onSearch", this.formData);
    }
  }
};
</script>

<style scoped>
.search-form {
  float: right;
  margin-bottom: 15px;
}
.form-control {
  margin-right: 5px;
}
.form-control:first-child {
  width: 140px;
}
.form-control:nth-child(2) {
  width: 200px;
}
</style>
