<template>
  <div id="star-table">
    <md-field md-inline>
      <label>Load STARs from file</label>
      <md-file  v-model="filename" 
                accept=".json" 
                @md-change="onFileChange"/>
    </md-field>
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
    <md-button class="md-icon-button md-raised button" @click="add()">
        <md-icon>add</md-icon>
    </md-button>
    <md-button class="md-icon-button md-raised button" @click="download()">
        <md-icon>cloud_download</md-icon>
    </md-button>
    <md-button class="md-icon-button md-raised button" @click="active=true">
        <md-icon>link</md-icon>
    </md-button>
    <!-- Dialogs -->
    <md-dialog-prompt
        :md-active.sync="active"
        v-model="textUrl"
        md-title="URL to Load STARs"
        md-input-maxlength="1024"
        md-input-placeholder="URL Link"
        md-confirm-text="Done" 
        @md-confirm="onLinkConfirm"/>
  </div>
</template>

<script>
import staritem from "./StarItem.vue"
import jn from "../scripts/json.js"

export default {
  name: 'starlist',
  props: {
    stars: Array,
    starUrl: String
  },
  components: {
    staritem,
  },
  data() {
    return {
      active: false,
      filename: null,
      textUrl: null,
    };
  },
  methods: {
    update(star) {
      this.$emit('edit:star', star.id, star);
    },

    add(){
      this.$emit('add:star');
    },

    remove(id) {
      this.$emit('delete:star', id);
    },

    download() {
      this.$emit('download');
    },

    onLinkConfirm() {
      this.$emit('updateByUrl', this.textUrl);
    },

    async onFileChange(files) {
      var response = await jn.getJsonByTextFile(files[0]);
      this.$emit('updateByFile', response);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
