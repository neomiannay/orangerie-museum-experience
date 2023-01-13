<template>
    <div class="container">
        <div class="sweets">
            <div class="item" v-motion-pop :delay="400">
                <img src="/media/rewards/sweets/item.png" alt="discount" class="item__img">
                <img src="/media/doodles/traits-up.svg" alt="" class="item__bg">
            </div>
            <div class="guide" v-motion-pop :delay="500">
                <img src="/media/doodles/star-orange.svg" alt="" class="guide__star" />
                <p class="guide__text secondary">Show your screen at the gift store to get your discount!</p>
            </div>
            <!-- <button class="button">
                Restart
            </button> -->
            <router-link v-motion-pop :delay="600" to="/talking/intro" class="button">
                Restart
            </router-link>

        </div>

        <img src="/media/doodles/blue-line-vertical.svg" alt="" class="trait--1">
        <img src="/media/doodles/orange-line.svg" alt="" class="trait--2">
    </div>
</template>

<script>
import router from "../router";

export default {
    name: "SweetsView",

    methods: {
        restart() {
            router.push({ name: "/talking/intro" });
        },
    }
}
</script>

<style scoped lang="scss">
@use "../assets/animations/move.scss";
.container {
    height: 100%;
    display: flex;
    position: absolute;
}

.trait {
    &--1 {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        width: 30%;
    }

    &--2 {
        position: absolute;
        top: 30%;
        right: 0;
        z-index: -1;
        width: 100%;
    }
}

.rewards {
    display: grid;
    grid-template-rows: repeat(3, auto);
}

.sweets {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.item {
    width: 80%;
    margin: 0 auto;

    &__img {
        width: 100%;
        animation: move 0.5s infinite;
        animation-timing-function: steps(2, end);
        padding-top: 72px;
    }

    &__bg {
        position: absolute;
        top: 5%;
        left: 5%;
        z-index: -1;
        animation: move 0.5s infinite alternate;
        animation-timing-function: steps(2, end);
    }
}

.guide {
    position: relative;
    background: url('/media/bg/clue-text-bg.png') no-repeat center;
    background-size: contain;
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    &__text {
        font-size: 1.125rem;
        text-align: center;
        padding: 1rem;

    }
    &__star {
        position: absolute;
        top: 88px;
        left: 50px;

    }
}

.button {
    font-family: 'Peabecki';
    color: #000;
    font-size: 2rem;
    text-align: center;
    text-decoration: none;
    width: 352px;
    height: 144px;
    line-height: 144px;
    background: url("/media/bg/button-paper-bg.png") no-repeat center;
    background-size: cover;
}
</style>