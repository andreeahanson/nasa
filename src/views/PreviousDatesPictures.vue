<template>
  <div>
    <div v-for="date in dates">
      <h3>{{date}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviousDatesPictures",
  props: ["dates"]
}
</script>

