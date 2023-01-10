<template>
    <div class="headerContainer">
        <div class="titleContainer">
            <h1 class="title">{{ title }}</h1>
        <img class="scribble" src="/media/doodles/scribble.svg" alt="scribble">
        </div>
        <img class="line" src="/media/doodles/line.svg" alt="">
        <img class="grid" src="/media/bg/grid.png" alt="grid">
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.headerContainer {
    position: relative;
    width: 100vw;
    height: 20%;
}

.titleContainer {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 40%;
    left: 0;
    width: fit-content;
    height: fit-content;
    z-index: 2;
    background-image: url(/media/bg/bande-bleu.png);
    background-repeat: no-repeat;
    background-size: cover;
    transform: skew(0deg, -3deg);
}

.title {
    color: white;
    margin: 0;
    padding: 0 2rem;
    transform: translateY(10px);
    /* padding: 1.5rem 1rem .5rem 1rem; */
}

.scribble {
    position: absolute;
    top: -15px;
    right: 5px;
    width: 53px;
    z-index: 2;
}

.line {
    position: absolute;
    top: 20%;
    right: 0;
    /* width: 100vw; */
    z-index: 1;
}

.grid {
    position: absolute;
    top: -5%;
    left: 0;
    width: 100vw;
}
</style>