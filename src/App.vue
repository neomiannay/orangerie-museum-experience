<template>
  <router-view v-if="isMobile()" v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <div :key="route.fullPath">  
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
  <div v-else>
    <WrongDevice />
  </div>
</template>

<script>
import WrongDevice from "./components/WrongDevice.vue";

export default {
  components: { WrongDevice },
  setup() {
    const isMobile = () => {
      if (window.innerWidth <= 480) {
        return true;
      } else {
        return false;
      }
    };
    return { isMobile };
  }
};
</script>

<style lang="scss">
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
