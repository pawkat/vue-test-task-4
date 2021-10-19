<template>
  <div class="hero-nav">
    <div class="hero-nav__inner">
      <div class="hero-nav__content">
        <div
            v-for="(item, i) in nav"
            :key="i"
            @mouseover="onMouseEvent($event, i)"
            @mouseout="onMouseEvent($event, i)"
            class="hero-nav__item"
        >
          <router-link
              :to="item.path"
              class="hero-nav-item"
          >
            <div class="hero-nav-item__inner">
              <div class="hero-nav-item__content">
                <div v-if="item.title"
                     class="hero-nav-item__title"
                >{{ item.title }}
                </div>
                <div v-if="item.description"
                     class="hero-nav-item__description"
                >{{ item.description }}
                </div>
              </div>
              <div class="hero-nav-item__footer">
                <div class="hero-nav-item__link">
                  <div class="hero-nav-item__link-content">
                    <span>Learn more</span> <img :src="require('/static/img/learn-more-icon.svg')" alt="Learn more"/>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-hero-nav',
  props: {
    nav: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    onMouseEvent: function (event, index) {
      this.$emit('heroNavItemMouseover', {
        event,
        index
      })
    }
  }
}
</script>

<style lang="scss">
$gap: .625rem;
.hero-nav {
  padding: 0 $gap;

  &__inner {
    margin: 0 auto;
    @include xl {
      max-width: 76%;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    margin: 0 ($gap * -1);
  }

  &__item {
    display: flex;
    @include lg {
      width: 33.33%;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
      @include lg {
        margin-bottom: 0;
      }
    }
  }
}

.hero-nav-item {
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: $white;
  @include Montserrat-SemiBold;

  $self: &;

  & * {
    pointer-events: none;
  }

  &:hover {
    color: inherit;

    #{$self}__link {
      &-content {
        transform: translate(0, 50%);
        bottom: 50%;
      }
    }

    #{$self}__title, #{$self}__description {
      opacity: 0;
      transform: translate(0, -1rem);
    }
  }

  &__inner {
    height: 100%;
    max-width: 18.75rem + ($gap * 2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 0 $gap;
  }

  &__content {
    &:not(:last-child) {
      margin-bottom: .85rem;
    }
  }

  &__title, &__description {
    transition: opacity .3s ease, transform .3s ease;
  }

  &__title {
    font-size: 1.125rem;
    line-height: 1.23;

    &:not(:last-child) {
      margin-bottom: .5rem;
    }
  }

  &__description {
    font-size: .625rem;
    line-height: 1.8;
  }

  &__link {
    font-size: .875rem;
    line-height: 1.2142;
    height: .875rem * 1.2142;
    text-transform: uppercase;

    &-content {
      padding: 0 $gap;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: bottom .3s ease, transform .3s ease;
    }

    span, img {
      vertical-align: middle;
    }

    img {
      &:not(:first-child) {
        margin-left: .625rem;
      }
    }
  }
}
</style>
