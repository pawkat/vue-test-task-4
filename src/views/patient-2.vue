<template>
  <v-hero
      :title="title"
      :backLink="true"
      :backgroundImage="backgroundImage"
  />
  <div class="content">
    <h2>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
  </div>
</template>

<script>
import vHero from '@/components/hero/v-hero.vue'

export default {
  name: 'patient-2',
  components: {
    vHero
  },
  data: () => {
    return {
      title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      // eslint-disable-next-line import/no-absolute-path
      backgroundImage: require('/static/img/patient2.jpeg')
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  min-height: 100%;

  & > .wrapper {
    min-height: 100%;

    & > .hero {
      min-height: 100%;
    }
  }
}
</style>
