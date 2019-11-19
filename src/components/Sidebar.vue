<template>
  <div class="sidebar">
    <SidebarNav :item="admin" class="sidebar-nav" />
    <SidebarNav :item="user" class="sidebar-nav" />
    <SidebarNav :item="setting" class="sidebar-nav" />
  </div>
</template>

<script>
import SidebarNav from "./SidebarNav";
export default {
  data() {
    return {
      admin: {
        header: "<i class='fas fa-user-lock'></i> Admin Panel",
        navs: [
          { name: "Booking Info." },
          { name: "Equipment List", link: { name: "equipment-list" } },
          { name: "Meeting Room Info." }
        ]
      },
      user: {
        header: "<i class='fas fa-user'></i> User ",
        navs: [
          { name: "User Booking Info." },
          { name: "Edit Profile" },
          { name: "Change Password" }
        ]
      },
      setting: {
        header: "<i class='fas fa-cog'></i> Settings",
        navs: [
          { name: "User Settings" },
          { name: "Notification" },
          { name: "Upgrade Account" }
        ]
      }
    };
  },
  components: {
    SidebarNav
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
