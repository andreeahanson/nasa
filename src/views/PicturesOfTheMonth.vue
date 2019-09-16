<template>
  <div>
    <!-- <PreviousDatesPictures v-bind:dates="dates"/>  -->
    <form>
      <select v-model="selected" @change="selectDate($event)">
        <option disabled value>Select a date</option>
        <option v-for="(date, index) in dates" v-bind:value="date" :key="index">{{ date }}</option>
      </select>
    </form>
       <div class="day" v-if="this.dailyPicture.date">
    <h2>{{this.dailyPicture.date}}</h2>
    <img class="nasa-pic" v-bind:src="`${this.dailyPicture.hdurl}`" alt="nasa-picture-of-the-day" />
    <p>{{this.dailyPicture.explanation}}</p>
    </div>
    <div v-else>
    </div>
  </div>
</template>

<script>
import PreviousDatesPictures from "./PreviousDatesPictures";
import { fetchPictureOfTheMonth } from "../../apiCalls";

export default {
  name: "PicturesOfTheMonth",
  components: {
    PreviousDatesPictures
  },
  data() {
    let todayDate = new Date().toISOString().slice(0, 10);
    let yearMonth = todayDate.slice(0, 8);
    let day = todayDate.slice(8, 10);

    let text = "";
    let i;
    for (i = 1; i < day; i++) {
      text += `${yearMonth}${i},`;
    }
    // return text
    let allDates = text.split(",");
    return {
      dates: allDates,
      dailyPicture: {}
    };
  },
  methods: {
    async selectDate($event) {
      let date = $event.target.value;
      let picture = await fetchPictureOfTheMonth(date);
      this.dailyPicture = picture;
    }
  }
};
</script>

<style scoped>
.nasa-pic {
    height: 400px;
    width: 400px;
  }
</style>