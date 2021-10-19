<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__inner">
        <div class="footer__copyright">© 2020 Haymarket Media, Inc. All rights reserved.</div>
        <div
            class="footer__nav"
            v-if="nav.length"
        >
          <v-nav class="nav" :nav="nav"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import vNav from '@/components/v-nav.vue'

export default {
  name: 'v-footer',
  components: {
    vNav
  },
  data: () => {
    return {
      nav: [
        {
          path: '/',
          name: 'Privacy Policy'
        },
        {
          path: '/',
          name: 'Terms & Conditions'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  min-height: 3rem;
  padding: .625rem 0;
  font-size: .6875rem;
  line-height: 1.3636;
  @include OpenSans-Regular;

  &__inner {
    display: flex;
    flex-direction: column;
    @include sm {
      flex-direction: row;
    }
  }

  &__copyright {
    text-align: center;
    @include sm {
      text-align: left;
    }

    &:not(:last-child) {
      margin-bottom: 1.25rem;
      @include sm {
        margin-bottom: 0;
        margin-right: 1.25rem;
      }
    }
  }
}
</style>
