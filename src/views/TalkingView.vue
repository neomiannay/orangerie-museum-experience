<template>
  <div class="start">
    <header v-if="pageType == 'start'">
      <button @click="toggleMap" class="button-map"></button>
    </header>

    <div class="container">
      <div class="doodleWrapper">
        <img class="bubbleSVG" src="/media/bg/bubble.svg" alt="bubble">
        <img src="/media/doodles/spiral-big.svg" alt="spiral" class="doodleWrapper__spiral" />
        <img src="/media/doodles/trait-1.svg" alt="" class="doodleWrapper__trait-1" />
        <img src="/media/doodles/trait-2.svg" alt="" class="doodleWrapper__trait-2" />
      </div>
      <div class="bubble">
        <!-- if the current page is "intro" -->
        <div class="bubble__text bubble__text--intro" v-if="pageType == 'intro'">
          <p class="secondary">
            Hi there,<br />
            welcome to the Orangerie!
          </p>
          <p class="secondary">
            So, you're also attending the wedding of our beautiful fiancée?
          </p>
          <p class="secondary">
            I heard that the preparations are not going as planned...<br />
          </p>
          <p class="secondary">
            Why don't you come and give us a hand? You'll also get to meet all
            the residents of the Orangerie!
          </p>
        </div>

        <!-- if the current page is the anecdote's start page -->
        <div class="bubble__text" v-if="pageType == 'start'">
          <p class="secondary" v-for="txt in this.painting?.startText" :key="txt.key">
            {{ txt }}
          </p>
        </div>

        <!-- <button class="bubble__next"> -->
        <router-link v-if="pageType === 'intro'" :to="'/map/' + nextPage" class="bubble__next">
        </router-link>
        <router-link v-else="pageType === 'start'" :to="'/question/' + nextPage" class="bubble__next">
        </router-link>


        <!-- </button> -->
      </div>
    </div>
    <img src="/media/mascotte/mascotte.gif" alt="mascotte" class="mascotte" />
  </div>

  <Transition name="bounce">
    <template v-if="showMap">
      <Map @close="toggleMap" :id="id" type='pop'/>
    </template>
  </Transition>
</template>

<script>
import paintings from "../../data/db.json"
import Map from "../components/Map.vue"

export default {
  components: {
    Map
  },
  props: ['id', 'pageType'],
  data() {
    return {
      nextPage: 0,
      painting: null,
      showMap: false,
    };
  },
  mounted() {
    if (paintings) {
      this.painting = paintings.paintings.find((painting) => painting.id === this.id);
    }

    this.setPageNumber();
  },

  methods: {
    debug() {
      console.log(this.painting.startText);
    },
    setPageNumber() {
      if (this.pageType === 'intro') {
        this.nextPage = 1;
      } else if (this.pageType === 'start') {
        this.nextPage = this.id;
      }
    },
    toggleMap() {
      this.showMap = !this.showMap;
    },
  },
};
</script>

<style scoped lang="scss">
@use "../assets/transitions/bounce.scss";

header {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;

  .button-map {
    width: 80px;
    height: 80px;
    margin: 20px;
    background: url("/media/icons/map.png") no-repeat;
    background-size: contain;
  }
}
.start {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
}

.container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bubble {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);

  @media screen and (min-width: 390px) {
    transform: translate(-50%, -80%);
  }

  &__text {
    padding: 64px;
    width: 80%;
    margin: 0 auto;
    line-height: 20px;
    text-align: center;

    p {
      margin: 16px 0;
    }

    &--intro {
      padding: 42px;
    }
  }

  &__next {
    background: url("/media/icons/arrow-next.svg") no-repeat center;
    height: 20px;
    width: 62px;
    position: absolute;
    bottom: 5%;
    animation: next 1s infinite alternate;

    @media screen and (min-width: 390px) {
      bottom: 0;
    }
  }
}

.doodleWrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  z-index: -1;

  .bubbleSVG {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__spiral {
    position: absolute;
    width: 20%;
    top: -3%;
    left: 20%;
    animation: spin 8s infinite;
    animation-timing-function: steps(2, end);
  }

  &__trait-1 {
    position: absolute;
    top: 50%;
    left: 10%;
    animation: move 0.5s infinite alternate;
    animation-timing-function: steps(2, end);
  }

  &__trait-2 {
    position: absolute;
    top: 80%;
    left: 30%;
    animation: move 0.5s infinite;
    animation-timing-function: steps(2, end);
  }
}

.mascotte {
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 40%;
}

/* Animations */
@keyframes move {
  0% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(2deg);
  }
}

@keyframes spin {
  12% {
    transform: rotate(45deg);
  }

  24% {
    transform: rotate(90deg);
  }

  36% {
    transform: rotate(135deg);
  }

  48% {
    transform: rotate(180deg);
  }

  60% {
    transform: rotate(225deg);
  }

  72% {
    transform: rotate(270deg);
  }

  84% {
    transform: rotate(315deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes next {
  0% {
    transform: rotate(-15deg);
  }

  100% {
    transform: rotate(2deg);
  }
}
</style>