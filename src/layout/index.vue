<template>
  <div class="layout_container">
    <div class="layout_siderbar"></div>
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <h1 style="height: 1000px">123</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  background: red;
  .layout_siderbar {
    height: 100vh;
    width: 260px;
    background: #060606;
  }
  .layout_tabbar {
    height: 100px;
    width: calc(100% - 260px);
    background: cyan;
    position: fixed;
    top: 0;
    left: 260px;
  }
  .layout_main {
    width: calc(100% - 260px);
    height: calc(100vh - 100px);
    background: yellowgreen;
    position: absolute;
    top: 100px;
    left: 260px;
    padding: 20px;
    overflow: auto;
  }
}
</style>