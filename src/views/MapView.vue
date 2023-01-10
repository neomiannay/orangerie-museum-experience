<template>
    <div class="MapViewContainer">
        <Header title="The map"></Header>
        <img class="close" src="/media/icons/close.png" alt="close">
        <img class="close-text" src="/media/map/close.png" alt="close">
        <div class="floor-number-wrapper">
            <img class="floor-number" src="/media/map/floorNumber.png" alt="scribble">
            <img class="circle" src="/media/doodles/circles.svg" alt="line">
        </div>
        <img class="map" src="/media/map/maps.png" alt="map">
    </div>
</template>
  
<script>
import Header from "../components/Header.vue"

export default {
    name: 'MapView',
    props: ['id'],
    components: {Header}
}
</script>

<style scoped>

.MapViewContainer{
    position: relative;
    width: 100vw;
    height: 100vh;
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

</style>