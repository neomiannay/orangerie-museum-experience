<template>
  <div v-motion-fade :delay="200" class="home">
    <div class="logoWrapper">
    </div>
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
    height: 100%;
    width: 100%;
    background-image: url('/media/intro/intro.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
