<template>
  <div class="home">
    <h1>Hello les Oranges</h1>
    <p class="secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, totam!</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  mounted() {
    setTimeout(() => {
      this.$router.push('/talking/intro')
    }, 4000)
  }
}
</script>
