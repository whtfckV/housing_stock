<script setup lang="ts">
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import Profile from './components/Profile.vue';
</script>

<template>
  <Header />
  <main class="main">
    <SideBar />
    <Profile />
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 291px 1fr;
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px #0000001A;
}
</style>
