<template>
  <div class="backdrop" @click.self="closeScanner">
    <div class="scan-container">
      <qrcode-stream @decode="onDecode" @init="onInit">
        <p class="validation-failure">{{ error }}</p>
      </qrcode-stream>
      <!-- <p class="decode-result">Last result: <b>{{ decodedString }}</b></p> -->
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";

export default {
  name: "QRCodeScanner",
  components: { QrcodeStream },

  data() {
    return {
      error: "",
      decodedString: "",
    };
  },

  methods: {
    async onInit(promise) {
      // show loading indicator

      try {
        // eslint-disable-next-line
        const { capabilities } = await promise;

        // successfully initialized
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "user denied camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "no suitable camera device installed";
        } else if (error.name === "NotSupportedError") {
          this.error = "page is not served over HTTPS (or localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "maybe camera is already in use";
        } else if (error.name === "OverconstrainedError") {
          this.error =
            "did you requested the front camera although there is none?";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "browser seems to be lacking features";
        }
      } finally {
        // hide loading indicator
      }
    },

    async onDecode(decodedString) {
      this.decodedString = decodedString;

      if (this.decodedString == "http://en.m.wikipedia.org") {
        window.location.replace(decodedString);
      } else {
        this.error = "Wrong painting. Try again!";
        setTimeout(() => {
          this.error = "";
        }, 2000);
      }
    },

    closeScanner() {
      this.$emit("close");
    },

    timeout(ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
      });
    },
  },
};
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.scan-container {
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.qrcode-stream-wrapper {
  position: relative;
  height: 60%;
}

.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  /* background-color: rgba(255, 255, 255, 0.8); */
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>