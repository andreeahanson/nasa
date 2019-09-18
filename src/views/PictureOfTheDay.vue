
<template>
  <div v-if="expand === false" class="container">
    <div class="day">
      <h3>{{this.picOfTheDay.title}}</h3>
      <span class="pic-of-day">
        Picture
        <br />of
        <br />the
        <br />Day
        <br />
        {{this.picOfTheDay.date}}
      </span>
      <img
        class="nasa-pic"
        v-if="picOfTheDay.media_type === 'image'"
        :src="picOfTheDay.url"
        :alt="picOfTheDay.title"
        @click="toggleExpand"
      />
      <iframe v-else type="text/html" :src="picOfTheDay.url"></iframe>
      <br />
      <small>Copyright: {{this.picOfTheDay.copyright}}</small>
      <p>{{this.picOfTheDay.explanation}}</p>
    </div>
  </div>
  <div v-else>
    <img
      class="large"
      v-if="picOfTheDay.media_type === 'image'"
      :src="picOfTheDay.url"
      :alt="picOfTheDay.title"
      @click="toggleExpand"
    />
    <iframe v-else type="text/html" :src="picOfTheDay.url"></iframe>
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
      picOfTheDay: {},
      expand: false
    };
  },
  methods: {
    toggleExpand() {
      this.expand = !this.expand;
    }
  },
  async created() {
    let picture = await fetchPictureOfTheDay();
    this.picOfTheDay = picture;
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
h3 {
  margin: 0px;
  height: 8%;
}
p {
  font-size: 13px;
  padding: 10px;
  height: 30%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(252, 250, 250);
  padding-bottom: 3%;
  height: 86vh;
}
.day {
  padding: 10px;
  width: 80%;
  height: 74vh;
  margin-top: 2.5em;
  overflow: scroll;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
.pic-of-day {
  position: absolute;
  margin-left: -300px;
  transform: rotate(-20deg);
  font-size: 30px;
  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
}
.large {
  margin-top: 3px;
  width: 100%;
  height: auto;
}
</style>
