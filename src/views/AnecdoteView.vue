<template>
    <!-- <div v-if="painting"> -->
    <div>
        <!-- header here -->
        <section id="topContent">
            <Header :title="this.painting?.anecdoteTitle" v-motion-slide-bottom :delay="300"></Header>
            <div
                class="anecdote-text"
            >
                <p v-motion-slide-bottom :delay="400">{{ this.painting?.anecdote[0] }}</p>
                <p v-motion-slide-bottom :delay="500">{{ this.painting?.anecdote[1] }}
                    <span>{{ this.painting?.anecdote[2] }}<img src="/media/doodles/scratch.svg" alt=""></span>
                </p>
            </div>
            <div class="artist-content">
                <img class="artist-img" :src="'/media/anecdote/' + id + '/artist.gif'" alt="Derain" v-motion-slide-bottom :delay="600">
                <img class="signature-img" :src="'/media/anecdote/' + id + '/signature.png'"
                    alt="Signature from Derain"  v-motion-slide-bottom :delay="700">
            </div>  
        </section>
        <section class="container" id="container">
            <canvas class="scroll-animation"></canvas>

            <router-link v-if="nextPage < lastPage" :to="'/map/' + nextPage" class="next-button">
                Continue
            </router-link>
            <router-link v-else :to="'/talking/final'" class="next-button">
                Let's go
            </router-link>
        </section>
    </div>
    <!-- <div v-else>
        <p>Loading...</p>
    </div> -->
</template>

<script>
import Header from "../components/Header.vue"
import paintings from "../../data/db.json"


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
        this.gsapAnimation();
    },
    methods: {
        setPageNumber() {
            this.nextPage = parseInt(this.id) + 1
        },
        gsapAnimation() {
            
            const container = document.documentElement;
            const canvas = document.querySelector(".scroll-animation");
            const ctx = canvas.getContext("2d");


            const frameCount = 56
            const currentFrame = index => (
                `/media/anecdote/${this.id}/animation/anim${index.toString().padStart(2, '0')}.png`
            )

            const preloadImages = () => {
                for (let i = 1; i < frameCount; i++) {
                    const img = new Image()
                    img.src = currentFrame(i)
                }
            }

            const img = new Image();
            img.src = currentFrame(0)
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }

            const updateImage = index => {
                img.src = currentFrame(index)
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }

            window.addEventListener('scroll', () => {

                const scrollTop = container.scrollTop;
                const maxScrollTop = container.scrollHeight - window.innerHeight;
                const scrollFraction = scrollTop / maxScrollTop;
                const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));

                requestAnimationFrame(() => updateImage(frameIndex + 1))
            });

            preloadImages()
        }
    }
}
</script>

<style scoped lang="scss">
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
    display: flex;

    .artist-img {
        margin-left: auto;
        width: auto;
        height: clamp(130%, 80vw, 150%);
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

.container {
    margin-top: 40vh;
    height: 400vh;
    width: 100%;
    position: relative;
}

.scroll-animation {
    position: sticky;
    top: 0;
    left: 0;
    min-height: 100vh;
    max-width: 100vw;
}

.next-button {
    font-family: 'Peabecki';
    color: #000;
    font-size: 2rem;
    text-align: center;
    text-decoration: none;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 352px;
    height: 144px;
    line-height: 144px;
    background: url("/media/bg/button-paper-bg.png") no-repeat center;
    background-size: cover;
}
</style>