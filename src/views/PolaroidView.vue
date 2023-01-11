<template>
    <!-- <div v-if="painting"> -->
    <div class="container">
        <!-- header here -->

        <div class="top">
            <img src="/media/polaroid/scanner-bottom.png" alt="top-entry-polaroid">
            <img src="/media/polaroid/scanner-top.png" alt="top-entry-polaroid">
        </div>

        <div class="polaroid">
            <img src="/media/polaroid/container.png" alt="polaroid">
        </div>

        <button @click="animation">start animation</button><br>
        <button @click="start">start experience</button>

        <div id="log"></div>
        <div id="test"></div>

    </div>
    <!-- <div v-else>
        <p>Loading...</p>
    </div> -->
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
        // fetch('http://localhost:3000/paintings/' + this.id)
        //     .then(res => res.json())
        //     .then(data => this.painting = data)
        // const polaroid = document.querySelector('.polaroid img');
        // polaroid.style.animation = 'goDown 3s ease-in-out forwards';
    },
    animation() {
        const polaroid = document.querySelector('.polaroid img');
        polaroid.style.animation = 'goDown 3s ease-in-out forwards';
    },
}
</script>

<script setup>

function deviceOrientationPermission() {
    return new Promise((resolve, reject) => {
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
            DeviceOrientationEvent.requestPermission()
            .then((permissionState) => {
                document.getElementById("test").innerHTML = permissionState;
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
        
        const polaroid = document.querySelector('.polaroid img');
        polaroid.style.animation = 'goDown 3s ease-in-out forwards';

        window.addEventListener("devicemotion", (event) => {
            const x = event.acceleration.x;
            const y = event.acceleration.y;
            const z = event.acceleration.z;

            document.getElementById("log").innerHTML = `
                <p>x: ${x.toFixed(0)}</p>
                <p>y: ${y.toFixed(0)}</p>
                <p>z: ${z.toFixed(0)}</p>
            `;

            if (x > 20) {
                // animation();
                document.getElementById("test").innerHTML = "WOWWWWWW";
            }
        });
        }
    })
    .catch((err) => {
        alert(err.toString());
    });
}

function animation() {
    const polaroid = document.querySelector('.polaroid img');
    polaroid.style.animation = 'goDown 3s ease-in-out forwards';
}

</script>

<style lang="scss">

    .container {
        height: 100vh;
    }

    .top {
        position: absolute;
        width: 100%;
        img {
            position: absolute;
            width: 100%;

            &:nth-child(2) {
                z-index: 10;
            }
        }
    }

    .polaroid {
        position: relative;
        z-index: 5;
        width: 100%;
        display: flex;
        img {
            width: 70%;
            margin: 0 auto;
            transform: translateY(-80%);
            /* animation: goDown 3s ease-in-out forwards; */
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

</style>