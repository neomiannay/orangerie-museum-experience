<template>
  <div class="scan">
    <button class="scan__exit" @click.self="closeScanner"></button>
    <qrcode-stream @decode="onDecode" @init="onInit">
      <Transition name="bounce">
        <template v-if="this.error == true">
          <div class="response">
            <img src="/media/hands/retry.png" alt="error" class="response__img" />
          </div>
        </template>
      </Transition>

      <Transition name="bounce">
        <template v-if="this.error == false">
          <div class="response">
            <img src="/media/hands/gg.png" alt="scan" class="response__img" />
          </div>
        </template>
      </Transition>

    </qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";
import router from "../router";

export default {
  name: "QRCodeScanner",
  components: { QrcodeStream },

  props: ["id"],

  data() {
    return {
      error: null,
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
      this.error = null;
      this.decodedString = decodedString;

      if (this.decodedString == this.id) {
        this.error = false;
        setTimeout(() => {
          router.replace({ name: "polaroid", params: { id: this.id } });
        }, 2000);
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = null;
        }, 1500);
      }
    },

    closeScanner() {
      this.error = null;
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

<style scoped lang="scss">
@use '../assets/transitions/bounce.scss'; 

.scan {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #000;

  &__exit {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: 48px;
    height: 48px;
    margin: 24px;
    background: url("/media/icons/close.png") no-repeat center center;
    background-size: 48px;
    cursor: pointer;
  }
}

.response {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__img {
    width: 80%;
    z-index: 10;
  }
}
</style>