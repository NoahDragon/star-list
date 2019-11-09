<template>
  <div id="app" class="md-layout md-gutter" >
    <div class="md-layout-item md-size-15" />
    <div id="main" class="md-layout-item">
      <md-field md-inline>
        <label>Load STARs from file</label>
        <md-file  v-model="filename" 
                  accept=".json" 
                  @md-change="onFileChange"/>
      </md-field>
      <starlist 
        :stars="stars" 
        @edit:star="editSTAR"
        @add:star="addSTAR"
        @delete:star="deleteSTAR"
        @download="downloadList"
        @updateByUrl="updateURL"
        @updateByFile="updateFile"
        />
      <md-button class="md-icon-button md-raised md-primary" @click="addSTAR()">
          <md-icon>add</md-icon>
      </md-button>
      <md-button class="md-icon-button md-raised md-primary" @click="downloadList()">
          <md-icon>cloud_download</md-icon>
      </md-button>
      <md-button class="md-icon-button md-raised md-primary" @click="linkPopupActive=true">
          <md-icon>link</md-icon>
      </md-button>
    </div>
    <div class="md-layout-item md-size-15">
    </div>
    <!-- Dialogs -->
    <md-dialog-prompt
        :md-active.sync="linkPopupActive"
        v-model="textUrl"
        md-title="URL to Load STARs"
        md-input-maxlength="1024"
        md-input-placeholder="URL Link"
        md-confirm-text="Done" 
        @md-confirm="updateURL"
      />
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
        textUrl: null,
        linkPopupActive: false,
        filename: null,
        sizeChanged: false,
    };
  },
  mounted() {
    this.updateURL(new URLSearchParams(window.location.search).get("u"));
    let scriptWrapper = document.createElement('div');
    scriptWrapper.setAttribute('class', 'md-layout-item');
    let carbonScript = document.createElement('script');
    carbonScript.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CE7DP27M&placement=abnerchoume');
    carbonScript.setAttribute('id', '_carbonads_js');
    carbonScript.async = true;
    scriptWrapper.appendChild(carbonScript);
    document.getElementById('app').appendChild(scriptWrapper);
  },
  updated() {
    this.updateScroll();
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
      this.sizeChanged = true;
    },

    deleteSTAR(id) {
        this.stars = this.stars.filter(d => d.id !== id);  
    },

    downloadList() {
        saveToFile(JSON.stringify(this.stars, null, 4), 'star-list.json');
    },

    async onFileChange(files) {
      var response = await jn.getJsonByTextFile(files[0]);
      this.updateFile(response);
    },

    updateURL() {
        if(validURL(this.textUrl))
            jn.getJsonByURL(this.textUrl, (e, d) => {
                if(!e)
                    this.stars = d;
            });
    },

    updateFile(res) {
        this.temp = res;
        this.stars = JSON.parse(res);
    },

    updateScroll() {
      if(this.sizeChanged){
        var objdiv = document.body;
        objdiv.scrollIntoView(false);
        this.sizeChanged = false;
      }
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
