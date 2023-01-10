<template>
  <div class="start">
    <div class="container">
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
          <p
            class="secondary"
            v-for="txt in this.painting?.startText"
            :key="txt.key"
          >
            {{ txt }}
          </p>
        </div>

        <!-- if the current page is the anecdote's end page -->
        <div class="bubble__text" v-if="pageType == 'end'">
          <p
            class="secondary"
            v-for="txt in this.painting?.endText"
            :key="txt.key"
          >
            {{ txt }}
          </p>
        </div>

          <!-- <button class="bubble__next"> -->
        <router-link to="/question/{{ id }}" class="bubble__next">
        </router-link>

          <!-- </button> -->
        <img
          src="/media/doodles/spiral-big.svg"
          alt=""
          class="bubble__spiral"
        />
        <img src="/media/doodles/trait-1.svg" alt="" class="bubble__trait-1" />
        <img src="/media/doodles/trait-2.svg" alt="" class="bubble__trait-2" />
      </div>
    </div>
    <img
      src="/media/mascotte/mascotte.gif"
      alt=""
      class="mascotte"
    />
  </div>
</template>

<script>
export default {
  props: ["id", "pageType"],
  data() {
    return {
      painting: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/paintings/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.painting = data));
  },

  // methods: {
  //   debug() {
  //     console.log(this.painting.startText);
  //   },
  // },
};
</script>

<style scoped lang="scss">
.start {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bubble {
  background: url("/media/bg/bubble.svg") no-repeat center;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

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
    animation: next 1s infinite alternate;
  }

  &__spiral {
    position: absolute;
    top: -28px;
    left: 100px;
    animation: spin 8s infinite;
    animation-timing-function: steps(2, end);
  }

  &__trait-1 {
    position: absolute;
    top: 316px;
    left: 64px;
    animation: move 0.5s infinite alternate;
    animation-timing-function: steps(2, end);
  }

  &__trait-2 {
    position: absolute;
    top: 500px;
    left: 128px;
    animation: move 0.5s infinite;
    animation-timing-function: steps(2, end);
  }
}

.mascotte {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 240px;
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