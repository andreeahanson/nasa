<template>
  <div>
    <div v-bind:key="date" v-for="date in dates">
      <SinglePreviousDate v-bind:date="date"/>
    </div>
  </div>
</template>

<script>

import SinglePreviousDate from "./SinglePreviousDate";

export default {
  name: "PreviousDatePictures",
  components: {
    SinglePreviousDate
  },
  props: ["dates"]
}
</script>

