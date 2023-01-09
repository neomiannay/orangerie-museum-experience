<template>
  <!-- <nav>
    <router-link to="/">HomeView</router-link> |
    <router-link :to="{ name: 'painting', params: { id: '1'} }">AboutView</router-link>
  </nav> -->
  <router-view v-if="isMobile()"/>
  <div v-else>T'es pas sur ton tel mon reuf</div>
</template>

<script>
import { useMobileDetection } from "vue3-mobile-detection";

export default {
  setup() {
    const { isMobile } = useMobileDetection();
    return { isMobile };
  }
};
</script>

<style lang="scss">

</style>
