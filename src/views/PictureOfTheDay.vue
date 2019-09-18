
<template>
  <div class="container">
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
      <!-- <img class="nasa-pic" v-bind:src="`${this.picOfTheDay.hdurl}`" alt="nasa-picture-of-the-day" /> -->
      <img
        class="nasa-pic"
        v-if="picOfTheDay.media_type === 'image'"
        :src="picOfTheDay.url"
        :alt="picOfTheDay.title"
      />
      <iframe v-else type="text/html" :src="picOfTheDay.url"></iframe>
      <br />
      <small>Copyright: {{this.picOfTheDay.copyright}}</small>
      <p>{{this.picOfTheDay.explanation}}</p>
    </div>
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
      picOfTheDay: {
        // date: "2019-09-15",
        // explanation:
        //   "It was one of the largest and longest lived storms ever recorded in our Solar System. First seen in late 2010, the above cloud formation in the northern hemisphere of Saturn started larger than the Earth and soon spread completely around the planet. The storm was tracked not only from Earth but from up close by the robotic Cassini spacecraft currently orbiting Saturn. Pictured here in false colored infrared in February, orange colors indicate clouds deep in the atmosphere, while light colors highlight clouds higher up. The rings of Saturn are seen nearly edge-on as the thin blue horizontal line. The warped dark bands are the shadows of the rings cast onto the cloud tops by the Sun to the upper left. A source of radio noise from lightning, the intense storm was thought to relate to seasonal changes when spring emerges in the north of Saturn. After raging for over six months, the iconic storm circled the entire planet and then tried to absorb its own tail -- which surprisingly caused it to fade away.",
        // hdurl:
        //   "https://apod.nasa.gov/apod/image/1909/longstorm_cassini_977.jpg",
        // media_type: "image",
        // service_version: "v1",
        // title: "A Long Storm System on Saturn",
        // url: "https://apod.nasa.gov/apod/image/1909/longstorm_cassini_960.jpg"
      }
    };
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
  /* color: rgb(27, 27, 158); */
  font-size: 30px;
  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
}
</style>
