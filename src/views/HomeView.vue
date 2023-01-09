<template>
  <div class="home">
    <h1>Hello les Oranges</h1>
    <p class="secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, totam!</p>
    <div v-if="$isMobile()">MOBILE</div>
    <div v-else>DESKTOP OR TABLET</div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>
