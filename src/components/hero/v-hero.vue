<template>
  <div class="hero" :style="{ 'background-image': getBackground }" :class="getHeroClassMod">
    <div class="hero__inner">
      <div class="hero__content">
        <h1
            v-html="getTitle"
            class="hero__title"
        ></h1>
        <h1
            v-if="getDescription"
            v-html="getDescription"
            class="hero__description"
        ></h1>
      </div>
      <div
          v-if="nav.length"
          class="hero__nav"
      >
        <v-hero-nav
            :nav="nav"
            @heroNavItemMouseover="heroNavItemMouseover"
        />
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
    description: {
      type: String,
      default: '',
      required: false
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
    getTitle: function () {
      for (const item of this.nav) {
        if (item.isHovered) {
          return item.title
        }
      }
      return this.title
    },
    getDescription: function () {
      for (const item of this.nav) {
        if (item.isHovered) {
          return item.description
        }
      }
      return this.description
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

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__description {
    font-size: .625rem;
    line-height: 1.8;
    text-align: center;
    @include Montserrat-SemiBold;
  }

  &__nav {
    padding: 2.8125rem 0 1.575rem;
    transition: background .3s ease;
  }

  &__home {
    position: absolute;
    top: .5rem;
    left: .5rem;
    transition: transform .3s ease;
    @include lg {
      top: 1.3rem;
      left: 1.3rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
