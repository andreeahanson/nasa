<template>
  <div class="home">
    <img
      class="nasa-logo"
      alt="NASA logo"
      src="https://defaeroreport.com/wp-content/uploads/2019/07/nasa-logo-web-rgb.png"
    />
    <Landing msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "home",
  components: {
    Landing
  }
};
</script>

<style scoped>
.nasa-logo {
  height: auto;
  width: 80%;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(252, 250, 250);
  padding-bottom: 5%;  
}
</style>