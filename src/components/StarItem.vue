<template>
    <md-list-item class="row">
        <md-dialog-confirm
            :md-active.sync="active"
            md-title="Delete a STAR?"
            md-content="This action will permentally detete the STAR.<br> Are you sure?"
            md-confirm-text="Confirm"
            md-cancel-text="Cancel"
            @md-cancel="onCancel"
            @md-confirm="onConfirm" />
        <md-icon v-if="startype !== 'title'">{{ startype }}</md-icon>
        <div v-if="editing === star.id && type === startype">
            <md-field md-inline v-if="startype === 'S'">
                <label>Situation</label>
                <md-input v-model="star.s" v-on:keyup.enter="editSTAR(star)" v-focus/>
            </md-field>
            <md-field md-inline v-if="startype === 'T'">
                <label>Task</label>
                <md-input v-model="star.t" v-on:keyup.enter="editSTAR(star)" v-focus/>
            </md-field>
            <md-field md-inline v-if="startype === 'A'">
                <label>Action</label>
                <md-input v-model="star.a" v-on:keyup.enter="editSTAR(star)" v-focus/>
            </md-field>
            <md-field md-inline v-if="startype === 'R'">
                <label>Result</label>
                <md-input v-model="star.r" v-on:keyup.enter="editSTAR(star)" v-focus/>
            </md-field>
            <md-field md-inline v-if="startype === 'title'">
                <label>Title</label>
                <md-input v-model="star.title" v-on:keyup.enter="editSTAR(star)" v-focus/>
            </md-field>
        </div>
        <div v-else @click="editMode(star, startype)" class="md-list-item-text md-headline cursor">
            <span v-if="startype === 'S'"> {{ star.s }} </span>
            <span v-if="startype === 'T'"> {{ star.t }} </span>
            <span v-if="startype === 'A'"> {{ star.a }} </span>
            <span v-if="startype === 'R'"> {{ star.r }} </span>
            <span v-if="startype === 'title'"> {{ star.title }} </span>
        </div>
        <div v-if="editing === star.id && type === startype">
            <md-button class="md-icon-button md-raised" @click="editSTAR(star)">
                <md-icon>save</md-icon>
            </md-button>
            <md-button class="md-icon-button md-raised" @click="cancelEdit(star)">
                <md-icon>cancel</md-icon>
            </md-button>
            <md-button v-if="startype === 'title'" class="md-icon-button md-raised" @click="active = true">
                <md-icon>delete</md-icon>
            </md-button>
        </div>
        <!--
        <div v-else>
            <md-button class="md-icon-button md-raised button" @click="editMode(star, startype)">
                <md-icon>edit</md-icon>
            </md-button>
        </div>
        -->
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
            active: false,
            editing: null,
            type: null,
        }
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
                el.focus()
                }
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
        },

        onConfirm() {
            this.$emit('delete:star', this.star.id);
            this.editing = null;
            this.type = null;
        },

        onCancel() {}

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
.cursor {
    cursor: pointer;
}
</style>