<template>
  <div id="app" class="md-layout md-gutter" >
    <div class="md-layout-item" />
    <div class="md-layout-item">
      <starlist 
        :stars="stars" 
        @edit:star="editSTAR"
        @add:star="addSTAR"
        @delete:star="deleteSTAR"
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
          id: 555,
          s: "Situation",
          t: "Task",
          a: "Action",
          r: "Results",
          title: "Title",
        },
      ],
    }
  },
  methods: {
    editSTAR(id, updatedSTAR) {
      this.stars = this.stars.map(star => star.id === id ? updatedSTAR : star);
    },
    addSTAR(){
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
      });
      this.stars.push({
        id: uuid,
        s: 'Situation',
        t: 'Task',
        a: 'Action',
        r: 'Result',
        title: 'Title',
      })
    },
    deleteSTAR(id) {
      this.stars = this.stars.filter(d => d.id !== id);  
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
