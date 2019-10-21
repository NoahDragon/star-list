<template>
    <tr class="row">
        <td>{{ startype }}</td>
        <td v-if="editing === star.id && type === startype">
            <div v-if="startype === 'S'">
                <input type="text" v-model="star.s" />
            </div>
            <div v-if="startype === 'T'">
                <input type="text" v-model="star.t" />
            </div>
            <div v-if="startype === 'A'">
                <input type="text" v-model="star.a" />
            </div>
            <div v-if="startype === 'R'">
                <input type="text" v-model="star.r" />
            </div>
        </td>
        <td v-else>
            <div v-if="startype === 'S'">
                {{ star.s }}
            </div>
            <div v-if="startype === 'T'">
                {{ star.t }}
            </div>
            <div v-if="startype === 'A'">
                {{ star.a }}
            </div>
            <div v-if="startype === 'R'">
                {{ star.r }}
            </div>
        </td>
        <td v-if="editing === star.id && type === startype">
            <button @click="editSTAR(star)">Save</button>
            <button class="muted-button" @click="cancelEdit(star)"> Cancel </button>
        </td>
        <td v-else>
            <button @click="editMode(star, startype)" class="button">Edit</button>
        </td>
    </tr>
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