<template>
    <md-list-item class="row md-elevation-1">
        <md-icon>{{ startype }}</md-icon>
        <div v-if="editing === star.id && type === startype">
            <md-field md-inline v-if="startype === 'S'">
                <label>Situation</label>
                <md-input v-model="star.s" />
            </md-field>
            <md-field md-inline v-if="startype === 'T'">
                <label>Task</label>
                <md-input v-model="star.t" />
            </md-field>
            <md-field md-inline v-if="startype === 'A'">
                <label>Action</label>
                <md-input v-model="star.a" />
            </md-field>
            <md-field md-inline v-if="startype === 'R'">
                <label>Result</label>
                <md-input v-model="star.r" />
            </md-field>
        </div>
        <div v-else>
            <span class="md-list-item-text md-headline" v-if="startype === 'S'">
                {{ star.s }}
            </span>
            <span class="md-list-item-text md-headline" v-if="startype === 'T'">
                {{ star.t }}
            </span>
            <span class="md-list-item-text md-headline" v-if="startype === 'A'">
                {{ star.a }}
            </span>
            <span class="md-list-item-text md-headline" v-if="startype === 'R'">
                {{ star.r }}
            </span>
        </div>
        <div v-if="editing === star.id && type === startype">
            <button @click="editSTAR(star)">Save</button>
            <button class="muted-button" @click="cancelEdit(star)"> Cancel </button>
        </div>
        <div v-else>
            <button @click="editMode(star, startype)" class="button">Edit</button>
        </div>
    </md-list-item>
</template>
<script>
export default {
    name: "staritem",
    props: {
        star: Object,
        startype: String
    },
    data() {
        return {
            editing: null,
            type: null,
        }
    },
    methods: {
        editMode(star, type){
            this.cachedSTAR = Object.assign({}, star);
            this.editing = star.id;
            this.type = type;
        },

        cancelEdit(star){
            Object.assign(star, this.cachedSTAR);
            this.editing = null;
            this.type = null;
        },

        editSTAR(star) {
            this.$emit('update:star', star.id, star);
            this.editing = null;
            this.type = null;
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
    display: none;
}
.row:hover .button, .button:hover {
    display: inline-block;
}
</style>