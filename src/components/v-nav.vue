<template>
  <nav class="nav">
    <div
        v-for="(item, i) in nav"
        :key="i"
        class="nav__item"
    >
      <a :href="item.path">{{ item.name }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'v-nav',
  props: {
    nav: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -.25rem -.625rem;
  @include sm{
    justify-content: flex-start;
  }

  &__item {
    padding: .25rem .625rem;
  }
}
</style>
