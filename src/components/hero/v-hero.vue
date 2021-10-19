<template>
  <div class="hero" :style="{ 'background-image': getBackground }" :class="getHeroClassMod">
    <div class="hero__inner">
      <div class="hero__content">
        <h1
            v-if="title"
            class="hero__title"
            v-html="title"
        ></h1>
      </div>
      <div class="hero__nav" v-if="nav.length">
        <v-hero-nav :nav="nav" @heroNavItemMouseover="heroNavItemMouseover"/>
      </div>
    </div>
    <router-link
        v-if="this.$route.path !== '/'"
        class="hero__home"
        to="/"
    ><img :src="require('/static/img/home-btn-desktop.svg')" alt="Back to the Home page"/></router-link>
  </div>
</template>

<script>
import vHeroNav from '@/components/hero/v-hero-nav.vue'

export default {
  name: 'v-hero',
  components: {
    vHeroNav
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    nav: {
      type: Array,
      default: () => {
        return []
      },
      required: false
    },
    backgroundImage: {
      type: String,
      default: '',
      required: false
    },
    full: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    getBackground: function () {
      for (const item of this.nav) {
        if (item.isHovered) {
          return `url(${item.image})`
        }
      }
      return this.backgroundImage ? `url(${this.backgroundImage})` : 'none'
    },
    getHeroClassMod: function () {
      const classMod = this.full ? 'hero_full' : ''
      for (const item of this.nav) {
        if (item.isHovered) {
          return classMod + ' is-hovered'
        }
      }
      return classMod
    }
  },
  methods: {
    heroNavItemMouseover: function (data) {
      this.$emit('heroNavItemMouseover', data)
    }
  }
}
</script>

<style lang="scss">
.hero {
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: $white;
  background-color: rgba($blue, .8);
  transition: background-image .6s ease;
  position: relative;
  $self: &;

  &:not(.is-hovered) {
    #{$self}__nav {
      background: linear-gradient(180deg, rgba($blue, 0.6) 0%, rgba($blue, 0.9) 87.56%);
    }
  }

  &_full {
    min-height: 100%;

    #{$self}__content {
      @include lg {
        padding: 5rem 0 2rem;
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0 2rem;
    @include lg {
      padding: 4.5rem 0 4rem;
    }
  }

  &__title {
    max-width: 48.75rem;
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
    @include Montserrat-SemiBold;

    b {
      @include Montserrat-ExtraBold;
    }
  }

  &__nav {
    padding: 2.8125rem 0 1.575rem;
    transition: background .3s ease;
  }

  &__home {
    position: absolute;
    top: .5rem;
    left: .5rem;
    @include lg {
      top: 1.3rem;
      left: 1.3rem;
    }
  }
}
</style>
