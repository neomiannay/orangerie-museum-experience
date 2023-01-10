<template>
    <div v-if="painting">
        <!-- header here -->
        
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
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            painting: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/paintings/' + this.id)
            .then(res => res.json())
            .then(data => this.painting = data)
    },
}
</script>

<style lang="scss">

    .anecdote-text{
        margin: 0 32px;

        p{
            line-height: 1.5em;
            text-align: justify;
            
            &:nth-of-type(1){
                margin-bottom: 2rem;
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
        height: 100%;

        .artist-img {
            position: relative;
            z-index: 10;
            margin-left: auto;
            transform: translateX(10px);
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