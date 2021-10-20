<template>
  <v-hero
      :title="title"
      :backLink="true"
      :scrollDown="true"
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
  name: 'patient-1',
  components: {
    vHero
  },
  data: () => {
    return {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?',
      // eslint-disable-next-line import/no-absolute-path
      backgroundImage: require('/static/img/patient1.jpeg')
    }
  }
}
</script>
