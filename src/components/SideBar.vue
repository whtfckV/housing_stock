<script setup lang="ts">
import Search from './Search.vue';
import Results from './Results.vue';
</script>

<template>
  <aside class="sidebar">
    <Search />
    <Results />
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  // padding: 27px 30px 27px 20px;
  border-right: 1px solid #DEDEDD;
  // max-height: 733px;
  // overflow-y: scroll;
  background-color: #fdfdfd;
}
</style>
