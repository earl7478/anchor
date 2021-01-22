<template>
  <div class="layout_content">
    <div class="left_menu">
      <div class="slide_header_place"></div>
      <nav-menu></nav-menu>
    </div>
    <div class="right_content">
      <default-header></default-header>
      <div class="view_content">
        <router-view class="Router"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import navMenu from '@/components/common/navMenu'
import defaultHeader from '@/components/defaultHeader.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    navMenu,
    defaultHeader
  }
}
</script>

<style lang="scss" scoped>
.layout_content::after{ display: block; content: ''; clear: both; }
.layout_content{ display: flex;
  .right_content{ flex: 1;
    .view_content{ height: calc(100vh - 80px); box-sizing: border-box; padding: 16px; overflow-y: scroll; }
  }
}
</style>