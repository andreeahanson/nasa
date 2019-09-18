<template>
  <div class="month-container">
    <!-- <PreviousDatesPictures v-bind:dates="dates"/>  -->
    <form>
      <select class="date" @change="selectDate($event)">
        <option value>Select a date</option>
        <option v-for="(date, index) in dates" v-bind:value="date" :key="index">{{ date }}</option>
      </select>
    </form>
    <div class="day" v-if="this.dailyPicture.date">
      <h3>{{this.dailyPicture.title}}</h3>
      <!-- <img class="nasa-pic" v-bind:src="`${this.dailyPicture.hdurl}`" alt="nasa-picture-of-the-day" /> -->
      <img
        class="nasa-pic"
        v-if="dailyPicture.media_type === 'image'"
        :src="dailyPicture.url"
        :alt="dailyPicture.title"
      />
      <iframe v-else type="text/html" :src="dailyPicture.url"></iframe>
      <br />
      <small v-if="this.dailyPicture.copyright">Copyright: {{this.dailyPicture.copyright}}</small>
      <small v-else></small>
      <p>{{this.dailyPicture.explanation}}</p>
    </div>
    <div v-else></div>
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
  height: 60%;
  width: 30%;
  cursor: pointer;
}
iframe {
  height: 250px;
  width: 330px;
}
.align-vertically {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  height: 15vh;
}
.day {
  padding: 10px;
  width: 80%;
  height: 74vh;
  margin-top: 0.5em;
  overflow: scroll;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
h3 {
  margin: 0px;
  height: 8%;
}
p {
  font-size: 13px;
  padding: 10px;
  height: 30%;
}
.month-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(252, 250, 250);
  padding-bottom: 3%;
  height: 86vh;
}
.date {
  margin: 15%;
  font-size: 1.1rem;
  background: white;
  box-shadow: inset 0 0 3px 3px;
}
</style>