<template>
  <div>
    <PreviousDatesPictures v-bind:dates="dates"/> 
  </div>
</template>

<script>

import PreviousDatesPictures from "./PreviousDatesPictures";

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
    let allDates = text.split(',')
    return {
      dates: allDates
    };
  }
};
</script>