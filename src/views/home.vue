<template>
  <v-hero
      :title="title"
      :nav="nav"
      :backgroundImage="backgroundImage"
      :homeLink="true"
  />
</template>

<script>
import vHero from '@/components/hero/v-hero.vue'

export default {
  name: 'home',
  components: {
    vHero
  },
  data: () => {
    return {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit:<br/><b>Ut enim</b>',
      // eslint-disable-next-line import/no-absolute-path
      backgroundImage: require('/static/img/home.jpeg'),
      nav: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?',
          // eslint-disable-next-line import/no-absolute-path
          image: require('/static/img/patient1.jpeg'),
          path: '/patient-1'
        },
        {
          title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          // eslint-disable-next-line import/no-absolute-path
          image: require('/static/img/patient2.jpeg'),
          path: '/patient-2'
        },
        {
          title: 'Quis nostrud exercitation ullamco laboris nisi ut aliquipea commodo consequat.',
          description: 'Lorem ipsum dolor sit amet, consectetur.',
          // eslint-disable-next-line import/no-absolute-path
          image: require('/static/img/patient3.jpeg'),
          path: '/patient-3'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
