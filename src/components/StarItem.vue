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
        <div class="md-list-item-text md-headline" @keydown="keyPressed($event)">
            <md-field md-inline v-if="startype === 'S'">
                <label>Situation</label>
                <md-textarea v-model="star.s" md-autogrow @dblclick="editMode(star, startype)" :readonly="editing ? false : true"/>
            </md-field>
            <md-field md-inline v-if="startype === 'T'">
                <label>Task</label>
                <md-textarea v-model="star.t" md-autogrow @dblclick="editMode(star, startype)" :readonly="editing ? false : true"/>
            </md-field>
            <md-field md-inline v-if="startype === 'A'">
                <label>Action</label>
                <md-textarea v-model="star.a" md-autogrow @dblclick="editMode(star, startype)" :readonly="editing ? false : true"/>
            </md-field>
            <md-field md-inline v-if="startype === 'R'">
                <label>Result</label>
                <md-textarea v-model="star.r" md-autogrow @dblclick="editMode(star, startype)" :readonly="editing ? false : true"/>
            </md-field>
            <md-field md-inline v-if="startype === 'title'">
                <label>Title</label>
                <md-textarea v-model="star.title" md-autogrow @dblclick="editMode(star, startype)" :readonly="editing ? false : true"/>
            </md-field>
        </div>
        <div v-if="editing">
            <md-button class="md-icon-button md-raised" @click="editSTAR(star)">
                <md-icon>save</md-icon>
            </md-button>
            <md-button class="md-icon-button md-raised" @click="cancelEdit(star, startype)">
                <md-icon>cancel</md-icon>
            </md-button>
        </div>
        <div v-if="startype === 'title'">
            <md-button class="md-icon-button md-raised md-accent" @click="active = true">
                <md-icon>delete</md-icon>
            </md-button>
            <md-button class="md-icon-button" disabled>
                <md-icon>swap_vert</md-icon>
            </md-button>
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
            if (type === 'S')
                this.cachedSTAR = star.s;
            if (type === 'T')
                this.cachedSTAR = star.t;
            if (type === 'A')
                this.cachedSTAR = star.a;
            if (type === 'R')
                this.cachedSTAR = star.r;
            if (type === 'title')
                this.cachedSTAR = star.title;

            this.editing = star.id;
            this.type = type;
        },

        cancelEdit(star, type){
            if (type === 'S')
                star.s = this.cachedSTAR;
            if (type === 'T')
                star.t = this.cachedSTAR;
            if (type === 'A')
                star.a = this.cachedSTAR;
            if (type === 'R')
                star.r = this.cachedSTAR;
            if (type === 'title')
                star.title = this.cachedSTAR;

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

        onCancel() {},

        keyPressed(e) {
            if(e.getModifierState("Control") && e.key == "Enter")
                this.editSTAR(this.star);
            else if (e.key == "Enter"){
                e.preventDefault();
                this.editMode(this.star, this.startype);
            }
            if(e.key == "Escape")
                this.cancelEdit(this.star, this.startype);   
        },

        preventSpaceScroll(e) {
            if(e.target == document.getElementById("itemdiv"))
                e.preventDefault();
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
.cursor {
    cursor: pointer;
}
span { 
    display:block;
    width:500px;
    word-break:break-all;
}
</style>