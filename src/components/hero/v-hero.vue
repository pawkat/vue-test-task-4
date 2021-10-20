<template>
  <div
      :class="getHeroClassMod"
      :style="{ 'background-image': getBackground }"
      ref="hero"
      class="hero"
  >
    <div class="hero__inner">
      <div class="hero__content">
        <div v-if="scrollDown"
             class="hero__scroll-down">
          <svg width="26" height="60" viewBox="0 0 26 60" xmlns="http://www.w3.org/2000/svg" class="scroll-down">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13 0C20.1797 0 26 5.8203 26 13V25C26 32.1797 20.1797 38 13 38C5.8203 38 0 32.1797 0 25V13C0 5.8203 5.8203 0 13 0ZM13 2C6.92487 2 2 6.92487 2 13V25C2 31.0751 6.92487 36 13 36C19.0751 36 24 31.0751 24 25V13C24 6.92487 19.0751 2 13 2ZM12 9H14V17H12V9Z"
            />
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14 55.59L19.59 50L21 51.42L13 59.42L5 51.42L6.41 50.01L12 55.59L13 56.5235L14 55.59Z"
                  class="scroll-down__arrow"
            />
          </svg>
        </div>
        <h1
            v-html="getTitle"
            class="hero__title"
        ></h1>
        <div
            v-if="getDescription"
            v-html="getDescription"
            class="hero__description"
        ></div>
      </div>
      <div
          v-if="nav.length"
          ref="heroNav"
          class="hero__nav"
      >
        <v-hero-nav
            :nav="nav"
            @heroNavItemMouseover="heroNavItemMouseover"
            @heroNavItemClick="heroNavItemClick"
        />
      </div>
    </div>
    <a
        v-if="this.$route.path !== '/'"
        @click.prevent="goHome"
        class="hero__home"
        href="/"
    ><img :src="require('/static/img/home-btn-desktop.svg')" alt="Back to the Home page"/></a>
  </div>
</template>

<script>
import gsap from 'gsap'
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
    scrollDown: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data: () => {
    return {
      hoveredIndex: false,
      animateGoInnerPage: false,
      animateGoHome: false,
      removeLgClass: false
    }
  },
  computed: {
    getBackground: function () {
      if (this.animateGoInnerPage !== false && this.nav[this.animateGoInnerPage].image) {
        return `url(${this.nav[this.animateGoInnerPage].image})`
      }
      if (this.hoveredIndex !== false && this.nav[this.hoveredIndex].image) {
        return `url(${this.nav[this.hoveredIndex].image})`
      }

      return this.backgroundImage ? `url(${this.backgroundImage})` : 'none'
    },
    getTitle: function () {
      if (this.animateGoInnerPage !== false) {
        return this.nav[this.animateGoInnerPage].title
      }
      if (this.hoveredIndex !== false) {
        return this.nav[this.hoveredIndex].title
      }
      return this.title
    },
    getDescription: function () {
      if (this.animateGoInnerPage !== false) {
        return this.nav[this.animateGoInnerPage].description
      }
      if (this.hoveredIndex !== false) {
        return this.nav[this.hoveredIndex].description
      }
      return this.description
    },
    getHeroClassMod: function () {
      let classMod = this.nav.length ? 'hero_full' : ''
      classMod += (this.nav.length && !this.removeLgClass) || this.animateGoHome ? ' hero_lg' : ''
      if (this.hoveredIndex !== false) {
        return classMod + ' is-hovered'
      }
      return classMod
    }
  },
  methods: {
    heroNavItemMouseover: function (data) {
      if (data.event.type === 'mouseout') {
        this.hoveredIndex = false
      } else if (data.event.type === 'mouseover') {
        this.hoveredIndex = data.index
      }
    },
    heroNavItemClick: function (data) {
      this.removeLgClass = true
      this.animateGoInnerPage = data.index
      gsap.to(this.$refs.hero, {
        minHeight: 'auto',
        duration: 0.6
      })
      gsap.to(this.$refs.heroNav, {
        autoAlpha: 0,
        height: 0,
        top: '100%',
        padding: 0,
        duration: 0.6,
        onComplete: () => {
          this.$router.push(this.nav[data.index].path)
        }
      })
    },
    goHome () {
      this.animateGoHome = true
      gsap.to(this.$refs.hero, {
        height: '100%',
        duration: 0.6,
        onComplete: () => {
          this.$router.push('/')
        }
      })
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
  overflow: hidden;
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
  }

  &_lg {
    #{$self}__content {
      @include lg {
        padding-top: 5rem;
        padding-bottom: 2rem;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: padding .6s ease;
    max-width: 58.75rem + (1rem * 2);
    padding: 3rem 1rem 2rem;
    margin: 0 auto;
    position: relative;
    @include lg {
      padding: 4.5rem 2.625rem 4rem;
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
    animation: fadeInScale .3s ease-in-out;
    transition: transform .3s ease;
    @include lg {
      top: 1.3rem;
      left: 1.3rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  &__scroll-down {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translate(0, -50%);
    line-height: 0;
    animation: fadeIn .3s ease-in-out;
    width: 1.625rem;
    display: none;
    @include lg {
      display: block;
    }

    .scroll-down {
      width: 100%;
      fill: $white;

      &__arrow {
        animation: scrollDown 1.1s ease-in infinite;
      }
    }
  }
}
</style>
