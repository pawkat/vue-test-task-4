<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__inner">
        <div class="header__logo">
          <img :src="require('/static/img/brand-logo.svg')" alt="Cancer Therapy Advisor logo"/>
        </div>
        <div class="header__logo">
          <img :src="require('/static/img/product-logo.svg')" alt="Face of the facts logo"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header'
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  min-height: 3rem;
  padding: .625rem 0;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    line-height: 0;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
