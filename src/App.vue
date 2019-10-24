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
        @updateByUrl="updateURL"
        @updateByFile="updateFile"
        />
    </div>
    <div class="md-layout-item md-size-15" />
  </div>
</template>

<script>
import starlist from './components/StarList.vue'
import genUUID from './scripts/uuid.js'
import saveToFile from './scripts/file.js'
import validURL from './scripts/utils.js'
import jn from './scripts/json.js'

export default {
  name: 'app',
  components: {
    starlist,
  },
  data() {
    return {
        temp: null,
        stars:[],
    };
  },
  mounted() {
    this.updateURL(new URLSearchParams(window.location.search).get("u"));
  },
  methods: {
    editSTAR(id, updatedSTAR) {
      this.stars = this.stars.map(star => star.id === id ? updatedSTAR : star);
    },
    
    addSTAR() {
      var uuid = genUUID();
      this.stars.push({
        id: uuid,
        s: '',
        t: '',
        a: '',
        r: '',
        title: '',
      });
    },

    deleteSTAR(id) {
        this.stars = this.stars.filter(d => d.id !== id);  
    },

    downloadList() {
        saveToFile(JSON.stringify(this.stars, null, 4), 'star-list.json');
    },

    updateURL(in_url) {
        if(validURL(in_url))
            jn.getJsonByURL(in_url, (e, d) => {
                if(!e)
                    this.stars = d;
            });
    },
    updateFile(res) {
        this.temp = res;
        this.stars = JSON.parse(res);
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
