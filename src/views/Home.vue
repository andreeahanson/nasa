<template>
  <div class="home">
    <img class="nasa-logo" alt="NASA logo" src="https://defaeroreport.com/wp-content/uploads/2019/07/nasa-logo-web-rgb.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
  .nasa-logo {
    height: 300px;
    width: 600px;
  }
</style>