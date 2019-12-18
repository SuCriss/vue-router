<template>
  <div class="home">
    <router-link to="/home">home</router-link> | 
    <router-link to="/home/detail">detail</router-link> |
    <router-link to="/home/about">about</router-link>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  }
};
</script>
<style lang="less" scoped>
  .home{
    margin-top: 15px;
  }
</style>
