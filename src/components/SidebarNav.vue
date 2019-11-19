<template>
  <section class="card">
    <header class="card-header text-center">
      <h5 class="m-0" v-html="item.header"></h5>
    </header>
    <div class="card-body">
      <router-link
        class="sidebar-link"
        v-for="(subitem, index) in item.navs"
        :to="subitem.link || ''"
        :key="index"
      >
        <i class="fa fa-chevron-circle-right"></i>
        {{ subitem.name }}
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item"],
  mounted: function() {
    // console.log(item);
  }
};
</script>

<style scoped>
h5 {
  font-size: 1rem;
}
.card {
  background: none;
  border: none;
}
.card-body {
  padding: 0.8rem 0;
}
.sidebar-link {
  display: block;
  padding: 0.55rem 1rem;
  margin-bottom: 2px;
  color: #525b62;
  font-weight: 400;
  text-decoration: none;
}
.fa-chevron-circle-right {
  color: #17a2b8;
  margin-right: 4px;
}
.sidebar-link:hover,
.sidebar-link.active {
  background-color: #dee2e6;
}
.sidebar-link.active,
.sidebar-link.active .fa-chevron-circle-right,
.sidebar-link:hover,
.sidebar-link:hover .fa-chevron-circle-right {
  color: #212529;
}
</style>
