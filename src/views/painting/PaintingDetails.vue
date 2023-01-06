<template>
    <div v-if="painting">
        <h1>Painting by id</h1>
        <p>Id: {{ id }}</p>
        <p>Painting untiltled <b>{{ painting.title }}</b> made by <b>{{ painting.artist }}</b> in <b>{{ painting.year }}</b> </p>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            painting: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/paintings/' + this.id)
            .then(res => res.json())
            .then(data => this.painting = data)
    },
}
</script>

<style>
</style>