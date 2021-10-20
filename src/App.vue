<template>
  <div class="site">
    <v-header/>
    <div class="site-content">
      <div class="wrapper">
        <div class="site-content__inner">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vFooter from '@/components/v-footer.vue'

export default {
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style lang="scss">

</style>
