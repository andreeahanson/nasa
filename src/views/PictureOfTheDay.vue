
<template>
  <div class="day">
    <h1>This is the picture of the day</h1>
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
    // var currentDate = new Date();
    // var formatedDate = new Date()
    //   .toJSON()
    //   .slice(0, 10)
    //   .replace(/-/g, "-");
    // console.log(formatedDate);
    let picture = await fetchPictureOfTheDay()
    console.log(picture)
  }
};
</script>
