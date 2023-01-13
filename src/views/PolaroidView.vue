<template>
    <div v-if="painting" class="container">

        <div class="top">
            <img src="/media/polaroid/scanner-bottom.png" alt="top-entry-polaroid">
            <img src="/media/polaroid/scanner-top.png" alt="top-entry-polaroid">
        </div>

        <div class="polaroid">
            <div class="img">
                <img src="/media/polaroid/container.png" alt="polaroid">
                <div :style="'background-image: url(/media/anecdote/' + id + '/polaroid.png)'"></div>
                <h2>{{ painting.title }}</h2>
            </div>
        </div>

        <button @click="start" class="next-button">Click to print</button>

        <div id="log"></div>

        <div class="phone-wiggle">
            <img src="/media/polaroid/shake-phone.gif" alt="shake your phone">
        </div>

    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
import paintings from "../../data/db.json"
import router from "../router";

export default {
    props: ['id'],
    data() {
        return {
            nextPage: 0,
            painting: null
        }
    },
    mounted() {
        this.setPageNumber();

        if(paintings) {
            this.painting = paintings.paintings.find((painting) => painting.id === this.id);
        }
    },
    methods: {
        setPageNumber() {
            this.nextPage = parseInt(this.id)
        },
        deviceOrientationPermission() {

            return new Promise((resolve, reject) => {
                if (typeof DeviceOrientationEvent.requestPermission === "function") {
                    DeviceOrientationEvent.requestPermission()
                    .then((permissionState) => {
                        if (permissionState === "granted") {
                            resolve("granted");
                        }
                    })
                    .catch(reject);
                } else {
                    if (navigator.userAgent.indexOf("Mobile") === -1) {
                        reject("Not a mobile device");
                    }
                    resolve("granted"); // we suppose it's automatically granted (android)
                }
            });
        },
        start() {

            if (!window.DeviceOrientationEvent) {
                alert("device orientation not available on your device");
                return;
            }

            this.deviceOrientationPermission()
            .then((result) => {
                if (result === "granted") {

                const polaroid = document.querySelector('.img');
                polaroid.style.animation = 'goDown 3s ease-in-out forwards';

                const phone = document.querySelector('.phone-wiggle img');
                phone.style.animation = 'wiggle 1s ease-in-out alternate infinite';
                phone.style.animationDelay = '3s';
                const title = document.querySelector('.img h2');
                title.style.animation = 'opacity 2s ease-in-out forwards';
                const painting = document.querySelector('.img div');
                

                window.addEventListener("devicemotion", (event) => {
                    const x = event.acceleration.x;

                    const top = document.querySelector('.top');
                    const bottom = document.querySelector('.phone-wiggle');

                    if (x > 20) {
                        painting.style.animation = 'opacity 1s ease-in-out forwards';

                        setTimeout(() => {
                            top.classList.add('opacity');
                            bottom.classList.add('opacity');
                        }, 1500);

                        setTimeout(() => {
                            top.style.display = 'none';
                            bottom.style.display = 'none';
                        }, 2000);

                        setTimeout(() => {
                            router.push({ name: 'anecdote', params: { id: this.nextPage } });
                        }, 2500);
                    }
                });
                }
            })
            .catch((err) => {
                alert(err.toString());
            });
        }
    }
}
</script>

<style lang="scss">

    .container {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .top {
        position: absolute;
        width: 100%;
        transition: all .5s ease-in-out;
        img {
            position: absolute;
            width: 100%;

            &:nth-child(2) {
                z-index: 10;
            }
        }
    }

    .polaroid {
        width: 100%;
        position: relative;
        z-index: 5;
        display: flex;
        .img{
            width: 70%;
            margin: 0 auto;
            position: relative;
            transform: translateY(-80%);
            img {
                width: 100%;
                
            }
            div {
                position: absolute;
                top: 5%;
                left: 7%;
                width: 87%;
                height: 74%;
                
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;

                opacity: 0;
            }
            h2{
                position: absolute;
                bottom: 5px;
                left: 50%;
                transform: translate(-50%, 5%);
                width: 100%;
                font-size: 25px;
                line-height: 25px;
                padding: 0 10%;
                text-align: center;
                opacity: 0;
            }
        }
    }

    .next-button {
        position: absolute;
        top: 50%;
        transform: translateX(-50%);
        left: 50%;
        font-family: 'Peabecki';
        color: #000;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
        width: 60%;
        line-height: calc(144px / 1.4);
        background: url("/media/bg/button-paper-bg.png") no-repeat center;
        background-size: cover;
    }

    .phone-wiggle {
        position: absolute;
        bottom: 2%;
        display: flex;
        width: 100%;
        transition: all .5s ease-in-out;
        img {
            margin: auto;
            width: 40%;
        }
    }

    @keyframes goDown {
        0% {
            transform: translateY(-80%);
        }
        70% {
            transform: translateY(-20%);
        }
        100% {
            transform: translateY(50%);
        }
    }

    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes opacity-2 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: .1;
        }
    }

    @keyframes leave-top {
        0% {
            transform: translateY(0);
        }
        20% {
            transform: translateY(20%);
        }
        100% {
            transform: translateY(-200%);
        }
    }

    @keyframes leave-bottom {
        0% {
            transform: translateY(0);
        }
        20% {
            transform: translateY(-20%);
        }
        100% {
            transform: translateY(400%);
        }
    }

    .opacity {
        opacity: 0;
    }
    
</style>