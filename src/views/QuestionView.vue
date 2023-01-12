<template>
  <div class="question">
    <header>
      <div class="progression">
        <p class="progression__number">0{{ id }}/09</p>
        <img :src="'/media/anecdote/' + id + '/progression.png'" alt="" class="progression__img">
      </div>
      <button @click="toggleMap" class="button-map"></button>
    </header>

    <div class="clue">
      <h2 class="clue__title">Clue #1</h2>
      <img src="/media/doodles/spiral.svg" alt="" class="clue__spiral" />
      <p class="clue__text">{{ this.painting?.clue}}</p>
      <img src="/media/doodles/traits.svg" alt="" class="clue__traits" />
    </div>

    <div class="footer">
      <p class="footer__text">Tap here to scan a painting</p>
      <img src="/media/doodles/arrow-down.svg" alt="" class="footer__img" />
      <button @click="toggleScanner" class="button-scan"></button>
    </div>
  </div>

  <Transition name="bounce">
    <template v-if="showScanner">
      <QRCodeScanner @close="toggleScanner" :id="id"/>
    </template>
  </Transition>

  <Transition name="bounce">
    <template v-if="showMap">
      <Map @close="toggleMap" :id="id" type='pop'/>
    </template>
  </Transition>
</template>

<script>
import QRCodeScanner from "../components/QRCodeScanner.vue";
import paintings from "../../data/db.json"
import Map from "../components/Map.vue"

export default {
  name: "QuestionView",
  components: {
    QRCodeScanner, Map
  },
  props: ["id", "type"],
  data() {
    return {
      showScanner: false,
      showMap: false,
      painting: null,
    };
  },
  mounted() {
    if(paintings) {
      this.painting = paintings.paintings.find((painting) => painting.id === this.id);
    }
  },

  methods: {
    toggleScanner() {
      this.showScanner = !this.showScanner;
    },
    toggleMap() {
      this.showMap = !this.showMap;
    },
  },
};
</script>

<style scoped lang="scss">
@use "../assets/transitions/bounce.scss";

.question {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
}

header {
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

.progression {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;

  &__number {
    width: 134px;
    height: 132px;
    font-family: "Peabecki", sans-serif;
    font-size: 24px;
    text-align: right;
    padding-right: 28px;
    line-height: 132px;
    color: var(--white);
    margin-right: 20px;
    background: url("/media/bg/progression-bg.png") no-repeat;
    background-size: contain;
  }

  &__img {
    position: absolute;
    left: 0;
    top: 80px;
  }
}

.clue {
  display: grid;
  grid-template-rows: repeat(10, 20px);
  grid-template-columns: 100%;
  justify-items: center;
  align-items: center;

  &__title {
    width: 140px;
    height: 64px;
    line-height: 64px;
    color: var(--white);
    z-index: 1;
    text-align: center;
    background: url("/media/bg/clue-title-bg.png") no-repeat center;
    background-size: contain;
    grid-row: 1 / 4;
  }

  &__spiral {
    position: relative;
    top: -20px;
    left: 72px;
    z-index: 2;
  }

  &__text {
    width: 340px;
    height: 140px;
    line-height: 140px;
    text-align: center;
    background: url("/media/bg/clue-text-bg.png") no-repeat center;
    background-size: contain;
  }

  &__traits {
    width: 88px;
    grid-row: 7 / 11;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  &__text {
    font-family: "Peabecki", sans-serif;
  }

  .button-scan {
    width: 80px;
    height: 80px;
    background: url("/media/icons/scan.png") no-repeat center center;
    background-size: 80px;
    cursor: pointer;
  }
}
</style>
