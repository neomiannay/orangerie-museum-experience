<template>
    <div v-if="painting">
        <!-- header here -->
        <section>
            <Header title="Multi Talented"></Header>
            <div class="anecdote-text">
                <p>Derain can be seen as a multi-talented artist! He painted, drew and sculpted. He also made sets and costumes for theaters and ballets!</p>
                <p>He amazes by his practical spirit, he liked to repair cars, to practice music, to play the piano or the organ, to build airplane maquettes or to draw tarot cards... He was an amazing artist who liked to discover
                    <span>new things !<img src="/media/doodles/scratch.svg" alt=""></span>
                </p>
            </div>
            <div class="artist-content">
                <img class="artist-img" :src="'/media/anecdote/' + id  +'/artist.png'" alt="Derain">
                <img class="signature-img" :src="'/media/anecdote/' + id  +'/signature.png'" alt="Signature from Derain">
            </div>

            <router-link v-if="nextPage < lastPage" :to="'/map/' + nextPage" class="bubble__next">
                Next page
            </router-link>
            <router-link v-else :to="'/final'" class="bubble__next">
                Last Page
            </router-link>
                
        </section>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import paintings from "../../data/db.json"

export default {
    props: ['id'],
    components: {Header},
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
    }

    .anecdote-text{
        margin: 0 32px;
        transform: translateY(-10px);

        p{
            line-height: 1.5em;
            text-align: justify;
            
            &:nth-of-type(1){
                margin-bottom: 1.5rem;
            }

            span {
                position: relative;

                img {
                    position: absolute;
                    top: 1rem;
                    left: 0;
                    width: 100%
                }
            }
        }
    }
    
    .artist-content {
        position: relative;
        height: calc(100vh - 257px);

        .artist-img {
            position: absolute;
            z-index: 10;
            margin-left: auto;
            height: 100%;
            /* transform: translateY(10px) scale(1.1); */
        }
        .signature-img {
            position: absolute;
            bottom: 10rem;
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

</style>