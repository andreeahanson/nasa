<template>
  <div>
    <div>
      <p v-on:click="selectDate">{{date}}</p>
    </div>
    <div class="day" v-if="this.dailyPicture.date">
    <h2>{{this.dailyPicture.date}}</h2>
    <img v-bind:src="`${this.dailyPicture.hdurl}`" alt="nasa-picture-of-the-day" />
    <p>{{this.dailyPicture.explanation}}</p>
    </div>
    <div v-else>
    </div>
  </div>
</template>

<script>

import { fetchPictureOfTheMonth } from "../../apiCalls";

export default {
  name: "SinglePreviousDate",
  props: ["date"],
  data() {
    return {
      dailyPicture: {}
    };
  },
  methods: {
    async selectDate(date) {
      date = this.date
      let picture = await fetchPictureOfTheMonth(date);
      this.dailyPicture = picture;
    }
  }
};
</script>

<style scoped>
.day {
  background: red;
}
</style>


