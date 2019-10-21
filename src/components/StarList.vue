<template>
  <div id="star-table">
    <table v-for="star in stars" :key="star.id">
      <tbody>
        <staritem 
          :star="star"
          :startype="'S'"
          @update:star="update"
         />
        <staritem 
          :star="star"
          :startype="'T'"
          @update:star="update"
         />
        <staritem 
          :star="star"
          :startype="'A'"
          @update:star="update"
         />
        <staritem 
          :star="star"
          :startype="'R'"
          @update:star="update"
         />
      </tbody>
    </table>
  </div>
</template>

<script>
import staritem from "./StarItem.vue"

export default {
  name: 'starlist',
  props: {
    stars: Array,
  },
  components: {
    staritem,
  },
  methods: {
    update(star) {
      this.$emit('edit:star', star.id, star);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
