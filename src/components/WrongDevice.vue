<template>
    <main>
        <section>
            <div class="content-phone">
                <img src="/media/polaroid/icon-phone.png" alt="phone device">
                <img src="/media/doodles/traits.svg" alt="">
            </div>
            <div class="content-text">
                <h1>Oops...</h1>
                <p>Seems like you’re on the wrong device!</p>
                <p>Try again from a cell phone or tablet ! </p>
            </div>
        </section>
        <img class="stars" src="/media/doodles/big-stars.svg" alt="">
    </main>
</template>

<script>

</script>

<style scoped lang="scss">

    main{
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    section{
        margin: auto;
        display: flex;

        @media screen and (max-width: 480px){
            flex-direction: column;
        }
    }

    .content-phone {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        @media screen and (max-width: 480px){
            width: 100%;
        }

        img{
            position: relative;
            z-index: 5;
            transform: rotate(-10deg);
            width: clamp(200px, 30vw, 300px);

            &:nth-child(2){
                position: absolute;
                top: -5vw;
                left: -2vw;
                transform: rotate(120deg);
                width: clamp(40px, 10vw, 120px);

                @media screen and (max-width: 480px){
                    display: none;
                }
            }
        }
    }

    .content-text{
        width: 100%;
        margin: 1rem;
        h1{
            position: relative;
            width: fit-content;
            font-size: 2.5rem;
            margin-bottom: clamp(1rem, 4vw, 3rem);

            &::after{
                content: url("/media/doodles/scribble-blue.svg");
                width: 100%;
                position: absolute;
                top: 3rem;
                right: 0;
            }
        }

        p{
            font-size: 20px;
            width: fit-content;
            margin: 0;

            &:nth-child(2){
                margin-bottom: 1rem;
                font-weight: 500;
            }
        }
    }

    .stars{
        position: absolute;
        bottom: 0;
        right: 0;
        width: clamp(50px, 30vw, 300px);
    }

</style>