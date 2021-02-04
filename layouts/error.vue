<template>
  <div>
    <h2>{{ error.statusCode === 404 ? 404 : 500 }}</h2>
    <div>
      <nuxt-link v-if="$route.path === '/'" to="/" @click="handleReload">
        <span @click="handleReload">Back to home.</span>
      </nuxt-link>
      <nuxt-link v-else to="/">
        Back to home.
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error'],
  methods: {
    handleReload () {
      location.reload()
    }
  }
}
</script>

<style scoped>

</style>
