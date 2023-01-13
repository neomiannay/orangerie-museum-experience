<template>
    <div class="container">
        <div class="rewards">
            <div class="sweets" v-motion-pop :delay="400"  @click="chooseSweets()">
                <img src="/media/rewards/sweets/item.png" alt="Sweets" class="sweets__img">
                <img src="/media/rewards/sweets/item-bg.png" alt="" class="sweets__bg">
            </div>
            <p class="or" v-motion-pop :delay="500">or</p>
            <div class="discount" v-motion-pop :delay="600"  @click="chooseDiscount()">
                <img src="/media/rewards/discount/item.png" alt="discount" class="discount__img">
                <img src="/media/rewards/discount/item-bg.png" alt="" class="discount__bg">
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router";

export default {
    name: "RewardsView",

    methods: {
        chooseSweets() {
            router.push({ name: "sweets"});
        },
        chooseDiscount() {
            router.push({ name: "discount"});
        },
    }
}
</script>

<style scoped lang="scss">
@use "../assets/animations/move.scss";
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
}
.rewards {
    display: grid;
    grid-template-rows: repeat(3, auto);
}

.sweets {
    position: relative;

    &__img {
        width: 65%;
    }

    &__bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 120%;
        animation: move 0.5s infinite alternate;
        animation-timing-function: steps(2, end);
    }
}

.or {
    font-family: 'PeaBecki', sans-serif;
    font-size: 2rem;
    text-align: center;
}

.discount {
    position: relative;
    display: flex;
    justify-content: flex-end;

    &__img {
        width: 90%;
        padding-top: 20px;
    }

    &__bg {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        height: 125%;
        animation: move 0.5s infinite;
        animation-timing-function: steps(2, end);
    }
}
</style>