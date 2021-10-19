<template>
  <v-hero
      :title="title"
      :nav="nav"
      @heroNavItemMouseover="heroNavItemMouseover"
      :full="true"
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
          path: '/patient-1',
          isHovered: false
        },
        {
          title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          // eslint-disable-next-line import/no-absolute-path
          image: require('/static/img/patient2.jpeg'),
          path: '/patient-2',
          isHovered: false
        },
        {
          title: 'Quis nostrud exercitation ullamco laboris nisi ut aliquipea commodo consequat.',
          description: 'Lorem ipsum dolor sit amet, consectetur.',
          // eslint-disable-next-line import/no-absolute-path
          image: require('/static/img/patient3.jpeg'),
          path: '/patient-3',
          isHovered: false
        }
      ]
    }
  },
  methods: {
    heroNavItemMouseover: function (data) {
      if (data.event.type === 'mouseout') {
        this.nav.map(item => {
          item.isHovered = false
        })
      } else if (data.event.type === 'mouseover') {
        this.nav.map((item, i) => {
          item.isHovered = data.index === i
        })
      }
    }
  }
}
</script>

<style lang="scss">
</style>
