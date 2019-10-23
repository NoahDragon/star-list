<template>
  <div id="app" class="md-layout md-gutter" >
    <div class="md-layout-item md-size-15" />
    <div class="md-layout-item">
      <starlist 
        :stars="stars" 
        @edit:star="editSTAR"
        @add:star="addSTAR"
        @delete:star="deleteSTAR"
        @download="downloadList"
        @update:url="updateURL"
        />
    </div>
    <div class="md-layout-item md-size-15" />
  </div>
</template>

<script>
import starlist from './components/StarList.vue'
import genUUID from './scripts/uuid.js'
import saveToFile from './scripts/file.js'
import getJsonByURL from './scripts/json.js'

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
      var uuid = genUUID();
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
    },

    downloadList() {
      saveToFile(JSON.stringify(this.stars, null, 4), 'star-list.json');
    },

    updateURL(in_url){
      var j = getJsonByURL(in_url);
      if (j)
        this.stars = JSON.parse(j);
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
