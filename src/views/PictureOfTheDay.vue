
<template>
  <div class="day">
    <h2>{{this.picOfTheDay.date}}</h2>
    <img v-bind:src="`${this.picOfTheDay.hdurl}`" alt="nasa-picture-of-the-day">
    <p>{{this.picOfTheDay.explanation}}</p>
  </div>
</template>

<script>
import { fetchPictureOfTheDay } from "../../apiCalls";

export default {
  name: "PictureOfTheDay",
  props: {
    msg: Object
  },
  data() {
    return {
      picOfTheDay: {}
    };
  },
  async created() {
    let picture = await fetchPictureOfTheDay()
    this.picOfTheDay = picture
  }
};
</script>

<style scoped>
  img {
    height: 400px;
    width: 400px;
  }
</style>
