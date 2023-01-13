<template>
    <div class="container">
        <img class="back-orange" src="/media/doodles/back-orange.svg" alt="">
        <div class="image-wrapper">
            <img class="image-error" src="/media/404/404.png" alt="404">
            <img class="trait trait-1" src="/media/doodles/back-trait-1.svg" alt="">
            <img class="trait trait-2" src="/media/doodles/back-trait-2.svg" alt="">
            <img class="trait trait-3" src="/media/doodles/back-trait-3.svg" alt="">
            <img class="star star-1" src="/media/doodles/back-star-1.svg" alt="">
            <img class="star star-2" src="/media/doodles/back-star-2.svg" alt="">
        </div>
        <div class="button-wrapper">
            <router-link :to="'/'" class="next-button">
                Go back!
            </router-link>
            <img class="back" src="/media/doodles/back.svg" alt="">
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}

.image-wrapper {
    position: relative;
}

.image-error {
    width: 100%;
}

.back-orange {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.trait {
    position: absolute;
    z-index: -1;
    animation-timing-function: steps(2, end);
}

.trait-1 {
    bottom: 20px;
    right: 90px;
    animation: move1 0.5s infinite;
}

.trait-2 {
    bottom: 0;
    right: 50px;
    animation: move 0.5s infinite;
    animation-delay: .2s;
}

.trait-3 {
    bottom: 40px;
    right: 20px;
    animation: move 0.5s infinite;
    animation-delay: .4s;
}

.star {
    position: absolute;
    z-index: -1;
    animation-timing-function: steps(2, end);
}

.star-1 {
    top: -60px;
    right: 80px;
    animation: star 0.5s infinite;
}

.star-2 {
    top: -100px;
    right: 60px;
    animation: star 0.3s infinite;
}

.button-wrapper {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: -1;
    animation: back 0.3s infinite;
    animation-timing-function: steps(2, end);
}

.next-button {
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

@keyframes back {
    0% {
        transform: translate(-50%, -50%) rotate(-1deg);
    }

    50% {
        transform: translate(-50%, -50%) rotate(1deg);
    }
}

@keyframes star {
    0% {
        transform: rotate(-2deg);
    }

    50% {
        transform: rotate(2deg);
    }
}

@keyframes move1 {
    0% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-3px, 3px);
    }
}

@keyframes move {
    0% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(3px, 3px);
    }
}
</style>