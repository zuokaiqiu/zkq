<template>
  <div class="logo">
    <img :src="Setting.logo" />
    <p>{{ Setting.title }}</p>
  </div>
</template>
<script setup lang="ts">
import Setting from '../setting'
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 50px;
  color: white;
  font-size: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
}
</style>
