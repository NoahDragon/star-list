<template>
  <div id="star-table">
    <draggable :list="stars" group="star" @start="drag=true" @end="drag=false">
      <md-list v-for="star in stars" :key="star.id">
          <staritem
            :star="star"
            :startype="'title'"
            @update:star="update"
            @delete:star="remove"
            class="md-primary"
          />
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
      </md-list>
    </draggable>
  </div>
</template>

<script>
import staritem from "./StarItem.vue"
import draggable from 'vuedraggable'

export default {
  name: 'starlist',
  props: {
    stars: Array,
    starUrl: String
  },
  components: {
    staritem,
    draggable
  },
  data() {
    return {
    };
  },
  methods: {
    update(star) {
      this.$emit('edit:star', star.id, star);
    },

    remove(id) {
      this.$emit('delete:star', id);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
