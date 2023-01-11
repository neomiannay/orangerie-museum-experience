<template>
    <div v-if="painting">
        <!-- header here -->
        <section class="letsgo">
            <Header title="Multi Talented"></Header>
            <div class="anecdote-text">
                <p>Derain can be seen as a multi-talented artist! He painted, drew and sculpted. He also made
                    sets and
                    costumes for theaters and ballets!</p>
                <p>He amazes by his practical spirit, he liked to repair cars, to practice music, to play the piano or
                    the organ, to build airplane maquettes or to draw tarot cards... He was an amazing artist who liked
                    to discover
                    <span>new things !<img src="/media/doodles/scratch.svg" alt=""></span>
                </p>
            </div>
            <div class="artist-content">
                <img class="artist-img" :src="'/media/anecdote/' + id + '/artist.gif'" alt="Derain">
                <img class="signature-img" :src="'/media/anecdote/' + id + '/signature.png'"
                    alt="Signature from Derain">
            </div>

            <router-link v-if="nextPage < lastPage" :to="'/map/' + nextPage" class="bubble__next">
                Next page
            </router-link>
            <router-link v-else :to="'/final'" class="bubble__next">
                Last Page
            </router-link>
                
        </section>
        <section class="gsap-animation-container" id="sticky">
            <div class="gsap-animation"></div>
        </section>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import paintings from "../../data/db.json"

// let frame_count = 9,
//     offset_value = 100;

export default {
    props: ['id'],
    components: { Header },
    data() {
        return {
            nextPage: 0,
            lastPage: 4,
            painting: null
        }
    },
    mounted() {
        if(paintings) {
            this.painting = paintings.paintings.find((painting) => painting.id === this.id);
        }

    this.setPageNumber();
    },
    methods: {
        setPageNumber() {
            this.nextPage = parseInt(this.id) + 1
        }
    }
}
</script>

<style lang="scss">
section {
    height: 100vh;
    width: 100vw;
}

.anecdote-text {
    margin: 0 32px;
    transform: translateY(calc(20% - 30px));

    p {
        line-height: 1.5em;
        text-align: justify;

        &:nth-of-type(1) {
            margin-bottom: 1.5rem;
        }

        span {
            position: relative;
            white-space: nowrap;

            img {
                position: absolute;
                top: 1.1rem;
                left: 0;
                width: 100%
            }
        }
    }
}

.artist-content {
    position: absolute;
    height: 50%;
    bottom: 0;
    width: 100%;

    .artist-img {
        position: absolute;
        right: 30px;
        z-index: 10;
        height: 100%;
        transform: translateY(150px) scale(1.5);
    }

    .signature-img {
        position: absolute;
        bottom: -10%;
        left: 0;
        animation: float 0.75s ease-in-out infinite;
    }

    @keyframes float {
        0% {
            transform: translate(0, 0);
        }

        50% {
            transform: translate(0, 10px);
        }

        100% {
            transform: translate(0, 0);
        }
    }
}

.gsap-animation-container {
    height: 100vh;
    width: 100%;
}

.gsap-animation {
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 200px;
    width: 100%;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/doodle-sprite.png);
    background-repeat: no-repeat;
    background-position: 0 50%;
}
</style>