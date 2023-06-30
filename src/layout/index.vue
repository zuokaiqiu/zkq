<template>
  <div class="layout_container">
    <div class="layout_sidder">
      <logo />
    </div>
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <h1 style="height: 1000px">123</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from './logo/index.vue'
</script>
<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_sidder {
    height: 100vh;
    width: $base-sidder-width;
    background: $base-menu-background-color;
  }
  .layout_tabbar {
    height: $base-tabber-height;
    width: calc(100% - $base-sidder-width);
    background: cyan;
    position: fixed;
    top: 0;
    left: $base-sidder-width;
  }
  .layout_main {
    width: calc(100% - $base-sidder-width);
    height: calc(100vh - $base-tabber-height);
    background: yellowgreen;
    position: absolute;
    top: $base-tabber-height;
    left: $base-sidder-width;
    padding: 20px;
    overflow: auto;
  }
}
</style>
