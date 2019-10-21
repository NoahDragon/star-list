<template>
  <div id="app" class="md-layout md-gutter" >
    <div class="md-layout-item" />
    <div class="md-layout-item">
      <starlist 
        :stars="stars" 
        @edit:star="editSTAR"
        />
    </div>
    <div class="md-layout-item" />
  </div>
</template>

<script>
import starlist from './components/StarList.vue'

export default {
  name: 'app',
  components: {
    starlist,
  },
  data() {
    return {
      stars:[
        {
          id: 1,
          s: "situation",
          t: "task",
          a: "action",
          r: "results",
        },
        {
          id: 2,
          s: "test s",
          t: "test t",
          a: "test a",
          r: "test r",
        },
      ],
    }
  },
  methods: {
    editSTAR(id, updatedSTAR) {
      this.stars = this.stars.map(star => star.id === id ? updatedSTAR : star);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
