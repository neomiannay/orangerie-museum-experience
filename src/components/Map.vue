<template>
    <div class="MapViewContainer">
        <Header title="The map"></Header>

        <router-link v-if="type === 'page'" :to="'/talking/start/' + nextPage">
            <img class="close" src="/media/icons/close.png" alt="close page">
        </router-link>

        <button v-if="type === 'pop'">
            <img class="close" src="/media/icons/close.png" alt="close pop" @click.self="closeMap">
        </button>

        <img class="close-text" src="/media/map/close.png" alt="close">
        <div class="floor-number-wrapper">
            <img class="floor-number" src="/media/map/floorNumber.png" alt="scribble">
            <img class="circle" src="/media/doodles/circles.svg" alt="line">
        </div>
        <div class="artworksContainer">
            <h2>Artworks<br>0{{ id }}/09</h2>
        </div>
        <img class="map" :src="'/media/anecdote/' + id + '/map.png'" alt="map">
    </div>
</template>
  
<script>
import Header from "../components/Header.vue"

export default {
    name: 'Map',
    props: ['id', 'type'],
    components: { Header },
    data() {
        return {
            nextPage: 0,
        }
    },
    mounted() {
        this.setPageNumber();
    },
    methods: {
        setPageNumber() {
            this.nextPage = parseInt(this.id)
        },
        closeMap() {
            this.$emit("close");
        },
    }
}
</script>

<style scoped>
.MapViewContainer {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: var(--white);
    z-index: 10;
}

.map {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    max-height: 75%;
    z-index: 3;
}

.close {
    position: absolute;
    top: 5%;
    right: 8%;
    z-index: 2;
    width: 56px;
}

.close-text {
    position: absolute;
    top: calc(5% + 56px);
    right: 4%;
    width: 148px;
    z-index: 2;
}

.floor-number-wrapper {
    position: absolute;
    top: 25%;
    left: 8%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
}

.floor-number {
    width: 70px;
    position: absolute;
    z-index: 2;
}

.circle {
    position: absolute;
    width: 100px;
}

.artworksContainer {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: rotate(-20deg);
}
</style>