<template>
  <div v-motion-fade :delay="200" class="home">
    <img class="big-star" src="/media/doodles/big-stars.svg" alt="">
    <div class="logoWrapper">
      <img class="logo" src="/media/intro/logo.png" alt="">
      <img class="quote" src="/media/intro/quote.svg" alt="">
      <img class="trait" src="/media/intro/trait.svg" alt="">
      <img class="star star-1" src="/media/doodles/back-star-1.svg" alt="">
      <img class="star star-2" src="/media/doodles/back-star-2.svg" alt="">
    </div>
    <img class="loupe" src="/media/intro/loupe.png" alt="">
    <div class="logoEMWrapper">
      <img class="logo-EM" src="/media/intro/logoEM.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  mounted() {
    setTimeout(() => {
      this.$router.push('/talking/intro')
    }, 3000)
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .logoWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;

    .logo {
      width: 100%;
    }

    .quote {
      position: absolute;
      top: 0;
      right: -10%;
      animation: move 0.5s infinite;
      animation-timing-function: steps(2, end);
    }

    .trait {
      position: absolute;
      bottom: -10%;
      left: 1%;
      animation: move 0.4s infinite;
      animation-timing-function: steps(2, end);
    }

    .star {
      position: absolute;
      z-index: -1;
      animation-timing-function: steps(2, end);
    }

    .star-1 {
      bottom: -60px;
      right: 20px;
      animation: star 0.5s infinite;
    }

    .star-2 {
      bottom: 0;
      right: 0;
      animation: star 0.3s infinite;
    }
  }

  .big-star {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .loupe {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-80%);
    transform-origin: left;
    width: 45%;
    animation: loupe 0.7s infinite;
    animation-timing-function: steps(2, end);
  }

  .logoEMWrapper {
    position: absolute;
    bottom: 5%;
    left: 50%;
    width: 50%;
    transform: translateX(-50%);

    .logo-EM {
      width: 100%;
    }
  }
}

@keyframes move {
  0% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(4deg);
  }
}

@keyframes loupe {
  0% {
    transform: translateY(-80%) scale(.9);
  }

  50% {
    transform: translateY(-80%) scale(1.1);
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
</style>
