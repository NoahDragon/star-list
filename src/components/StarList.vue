<template>
  <div id="star-table">
    <md-field md-inline>
      <label>Load STARs from file</label>
      <md-file  v-model="filename" 
                accept=".json" 
                @md-change="onFileChange($event)"/>
    </md-field>
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
    <md-button class="md-icon-button md-raised button" @click="download()">
        <md-icon>cloud_download</md-icon>
    </md-button>
    <md-button class="md-icon-button md-raised button" @click="active=true">
        <md-icon>link</md-icon>
    </md-button>
    <!-- Dialogs -->
    <md-dialog-prompt
        :md-active.sync="active"
        v-model="starURL"
        md-title="URL to Load STARs"
        md-input-maxlength="1024"
        md-input-placeholder="URL Link"
        md-confirm-text="Done" 
        @md-confirm="onLinkConfirm"/>
  </div>
</template>

<script>
import staritem from "./StarItem.vue"
import getJsonByTextFile from "../scripts/json.js"

export default {
  name: 'starlist',
  props: {
    stars: Array,
  },
  data() {
    return {
      active: false,
      starURL: null,
      filename: null,
    }
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

    remove(id) {
      this.$emit('delete:star', id);
    },

    download() {
      this.$emit('download');
    },

    onLinkConfirm() {
      this.$emit('update:url', this.starURL);
    },

    onFileChange(files) {
      var response = getJsonByTextFile(files[0]);
      this.$emit('update:file', response);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
