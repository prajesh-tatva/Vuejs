<script setup>
import { ref } from 'vue'
const search = ref('')

const toggleMenu = () => {
  document.body.classList.toggle('show-menu');
}
</script>

<template>
  <header class="header">
    <div class="hamburger" id="hamburger" @click="toggleMenu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <el-input placeholder="Search" class="search-text" v-model="search" />

    <el-button circle class="ic-btn"> <el-badge is-dot><img src="@/assets/images/ic-noty.svg" /></el-badge> </el-button>
    <el-dropdown trigger="click" popper-class="profile-popper">
      <div class="profile-block">
        <el-avatar :size="50" :fit="cover"><img src="@/assets/images/dp.png" /> </el-avatar>
        <div class="_info">
          <span>Admin</span>
          <p>Martin Smith</p>
        </div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item><em><img src="@/assets/images/ic-profile.svg" /></em>My Profile</el-dropdown-item>
          <el-dropdown-item @click="$router.push('/')"><em><img
                src="@/assets/images/ic-logout.svg" /></em>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </header>
  <div class="overlap" @click="toggleMenu"></div>
</template>


