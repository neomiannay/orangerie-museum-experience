<template>
    <div v-if="painting" class="container">
    <!-- <div class="container"> -->
        <!-- header here -->

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
            <img src="/media/polaroid/icon-phone.png" alt="phone image">

            <svg width="180" height="182" viewBox="0 0 180 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0212 43C10.0212 45.578 8.59978 47.5713 7.50692 49.8411C6.16329 52.6317 5.18046 55.9639 4.75879 59.0211C4.30027 62.3453 3.24137 65.5562 2.77077 68.9027C2.12752 73.4769 2.12756 77.9592 2.12759 82.5724L2.12759 82.6726C2.12759 87.8335 1.8048 93.108 2.18606 98.2551C2.61085 103.99 5.52072 109.353 7.91622 114.452C9.69268 118.232 12.4395 121.969 15.2251 125.064C16.164 126.107 17.8686 127.632 18.441 128.777M13.4341 134.381C13.7207 134.324 14.0605 133.941 14.2774 133.775C15.0908 133.152 15.8816 132.513 16.6491 131.834C18.2978 130.375 19.9875 128.981 21.7265 127.631C22.765 126.824 23.7925 126.014 24.8097 125.18C25.186 124.871 25.9217 124.431 26.0835 123.946M12.8806 134.539L13.0291 134.539C14.2553 134.539 15.4591 134.539 16.6754 134.741C18.4519 135.038 20.195 135.668 21.8538 136.358C24.0204 137.258 26.1454 138.284 28.341 139.107C28.528 139.177 28.72 139.293 28.9119 139.344C29.1073 139.397 28.8973 138.79 28.8856 138.734C28.3546 136.176 27.9227 133.576 27.5152 130.995C27.2291 129.182 27.0764 127.349 26.7949 125.536C26.6878 124.845 26.63 124.148 26.5226 123.458C26.4997 123.311 26.5341 123.064 26.3996 122.997" stroke="#F57C25" stroke-width="3" stroke-linecap="round"/>
                <path d="M169.973 139.348C169.973 136.77 171.395 134.776 172.488 132.507C173.831 129.716 174.814 126.384 175.236 123.327C175.694 120.002 176.753 116.791 177.224 113.445C177.867 108.871 177.867 104.388 177.867 99.7753L177.867 99.6751C177.867 94.5142 178.19 89.2396 177.809 84.0925C177.384 78.358 174.474 72.9942 172.078 67.8961C170.302 64.1154 167.555 60.3787 164.77 57.2836C163.831 56.2403 162.126 54.7156 161.554 53.5707M166.561 47.9664C166.274 48.0237 165.934 48.4062 165.717 48.5725C164.904 49.1961 164.113 49.8345 163.346 50.5138C161.697 51.973 160.007 53.3671 158.268 54.7171C157.23 55.5233 156.202 56.3337 155.185 57.1679C154.809 57.4764 154.073 57.9168 153.911 58.4021M167.114 47.8082L166.966 47.8082C165.739 47.8086 164.536 47.8089 163.319 47.6062C161.543 47.3101 159.8 46.6792 158.141 45.9899C155.974 45.0895 153.849 44.0637 151.654 43.2404C151.467 43.1703 151.275 43.0549 151.083 43.0032C150.887 42.9506 151.097 43.5575 151.109 43.6137C151.64 46.1721 152.072 48.7721 152.479 51.3527C152.766 53.1652 152.918 54.9983 153.2 56.8121C153.307 57.5024 153.365 58.1992 153.472 58.8896C153.495 59.0371 153.461 59.2836 153.595 59.3508" stroke="#F57C25" stroke-width="3" stroke-linecap="round"/>
                <path d="M119 168.059C119 172.647 119 185.589 119 181C119 175.252 123.438 169.713 125.948 164.781C129.779 157.257 134.354 171.303 139.649 171.008C140.923 170.938 136.347 160.902 136.142 159.57C135.814 157.443 143.345 159.195 144.368 159.209C145.667 159.227 152.516 160.277 149.94 157.702C147.407 155.169 143.728 151.387 142.598 148" stroke="#2553F5" stroke-width="2" stroke-linecap="round"/>
                <path d="M42.1419 29.0093C38.4984 29.0093 33.7435 25.9617 30.7921 23.9085C30.6592 23.8161 28.4782 22.0958 29.1169 21.9133C30.4738 21.5257 32.6475 21.8204 34.0107 21.9698C35.7048 22.1555 37.3952 22.4828 39.0927 22.5721C40.4895 22.6456 38.9175 21.369 38.3962 20.4829C36.9527 18.0289 35.7452 15.4646 34.6883 12.8222C34.4208 12.1536 34.0065 11.2334 34.8765 11.7305C36.6609 12.7502 38.458 13.1574 40.4102 13.7821C41.7358 14.2063 44.7134 15.9608 46.1322 15.6455C46.3603 15.5948 45.7492 2.77826 46.0381 1.623C46.2879 0.623539 46.7567 0.94508 46.9039 1.75475C47.2807 3.82718 49.9905 5.88994 51.2895 7.40142C52.3135 8.59306 54.3873 11.5209 56.0326 12.0693" stroke="#2553F5" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>

        <!-- <router-link :to="'/anecdote/' + nextPage" class="next-page">
            Continue
        </router-link>   -->

    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
import paintings from "../../data/db.json"

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
        revealPainting() {
            const painting = document.querySelector('.img div');
            painting.style.animation = 'opacity-3 1s ease-in-out forwards';
        },
    }
}
</script>

<script setup>

function deviceOrientationPermission() {
    return new Promise((resolve, reject) => {
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
            DeviceOrientationEvent.requestPermission()
            .then((permissionState) => {
                document.getElementById("log").innerHTML = permissionState;
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
}

function start() {

    if (!window.DeviceOrientationEvent) {
        alert("device orientation not available on your device");
        return;
    }

    deviceOrientationPermission()
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
        // painting.style.animation = 'opacity-2 .5s ease-in-out alternate infinite';
        

        window.addEventListener("devicemotion", (event) => {
            const x = event.acceleration.x;

            if (x > 20) {
                painting.style.animation = 'opacity 1s ease-in-out forwards';
                
                const top = document.querySelector('.top');
                const bottom = document.querySelector('.phone-wiggle');

                setTimeout(() => {
                    bottom.style.animation = 'leave-bottom .5s ease-in-out forwards';
                }, 1500);
            }
        });
        }
    })
    .catch((err) => {
        alert(err.toString());
    });
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
        transition: all 1s ease-in-out;
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
        bottom: 0;
        display: flex;
        width: 100%;
        margin-bottom: 10%;
        transform: translateY(0%);
        img {
            margin: auto;
            width: 20%;
        }
        svg{
            width: 35%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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

    @keyframes wiggle {
        0% {transform: rotate(10deg);}
        25% {transform: rotate(-10deg);}
        50% {transform: rotate(20deg);}
        75% {transform: rotate(-5deg);}
        100% {transform: rotate(0deg);}
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
    
</style>