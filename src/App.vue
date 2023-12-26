<style lang="scss" rel="stylesheet/scss">
  @import "assets/scss/color";
  @import "assets/scss/style";
  @import "assets/scss/form-elemets";
</style>

<script setup>
  import { RouterView, useRoute } from 'vue-router'
  import HeaderComp from './components/HeaderComp.vue'
  import SidebarComp from './components/SidebarComp.vue';
  const route = useRoute();
</script>

<template>
  <router-view v-if="route.path === '/'"/>
  <div class="wrapper" v-if="route.path !== '/'">
    <header-comp />
    <sidebar-comp />
    <div class="main-content">
      <router-view />
    </div>
    <footer class="footer">V 1.1.0 | Copyright 2023. All rights reserved</footer>
  </div>
</template>



