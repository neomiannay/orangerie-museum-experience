<template>
  <div class="question">
    <p>
      J'ai perdu mon bouquet, aide-moi à le retrouver avant d'aller à l'Église !
      Il est composé de fleurs blanches...
    </p>

    <div class="scanner-access">
        <p>Une fois que tu penses avoir trouvé l'œuvre, scanne-la !</p>
        <button @click="toggleScanner">Accéder au scanner</button>
    </div>
    <div v-if="show">
        <QRCodeScanner @close="toggleScanner"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QRCodeScanner from "../components/QRCodeScanner.vue";

export default {
  name: "QuestionView",
  components: {
    QRCodeScanner,
  },

  data() {
    return {
        show: false
    }
  },

  methods: {
    toggleScanner() {
        this.show = !this.show
    }
  },
};
</script>
