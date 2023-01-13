<template>
    <div class="container">
        <div class="discount">
            <div class="item" v-motion-pop :delay="400">
                <img src="/media/rewards/discount/item.png" alt="discount" class="item__img">
                <img src="/media/doodles/traits-up.svg" alt="" class="item__traits">
                <img src="/media/rewards/discount/item-bg.png" alt="" class="item__bg">
            </div>
            <div class="guide" v-motion-pop :delay="500">
                <img src="/media/doodles/star-orange.svg" alt="" class="guide__star" />
                <p class="guide__text secondary">Show your screen at the gift store to get your discount!</p>
            </div>
            <!-- <button class="button">
                Restart
            </button> -->
            <router-link v-motion-pop :delay="600" to="/" class="button">
                Restart
            </router-link>

        </div>

        <img src="/media/doodles/blue-line-horizontal.svg" alt="" class="trait">
    </div>
</template>

<script>
import router from "../router";

export default {
    name: "DiscountView",

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
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.rewards {
    display: grid;
    grid-template-rows: repeat(3, auto);
}

.discount {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.item {

    &__img {
        width: 100%;
        transform: rotate(340deg);
        padding-top: 72px;
    }

    &__traits {
        position: absolute;
        top: 20%;
        left: 0;
        z-index: -1;
        animation: move 0.5s infinite alternate;
        animation-timing-function: steps(2, end);
    }
    &__bg {
        position: absolute;
        top: 0;
        right: -30%;
        width: 80%;
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