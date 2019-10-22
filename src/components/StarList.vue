<template>
  <div id="star-table">
    <md-list v-for="star in stars" :key="star.id">
        <staritem
          :star="star"
          :startype="'title'"
          @update:star="update"
          @delete:star="remove"
          class="md-primary"
        />
        <md-divider />  
        <staritem 
          :star="star"
          :startype="'S'"
          @update:star="update"
         />
        <md-divider />
        <staritem 
          :star="star"
          :startype="'T'"
          @update:star="update"
         />
        <md-divider />
        <staritem 
          :star="star"
          :startype="'A'"
          @update:star="update"
         />
        <md-divider />
        <staritem 
          :star="star"
          :startype="'R'"
          @update:star="update"
         />
        <md-divider />
    </md-list>
    <md-button class="md-icon-button md-raised button" @click="add()">
        <md-icon>add</md-icon>
    </md-button>
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
    },
    add(){
      this.$emit('add:star');
    },
    remove(id){
      this.$emit('delete:star', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
