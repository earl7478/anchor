<template>
  <el-menu style="text-align:left" :default-active="this.$route.path" class="el-menu-vertical-demo el_menu_box" :collapse-transition="true"   background-color="#222D32" text-color="#fff" :unique-opened="true" :collapse="elMenuIsCollapse" router active-text-color="#ffd04b">
    <div class="slide_header_place"></div>
    <subMenu :navlist="navlist" :elMenuIsCollapse="elMenuIsCollapse"></subMenu>
  </el-menu>
</template>
        
<script>
import {mapGetters} from 'vuex'
import subMenu from './subMenu'
import navlist from '@/utils/navMenu'
export default {
  components: {
    subMenu
  },
  computed: {
    ...mapGetters(['elMenuIsCollapse'])
  },
  data() {
    return {
      navlist: navlist
    };
  },
  methods: {
    menuIndex() {

    }
  }
}
</script>
       
<style lang="scss" scoped>
.slide_header_place{ height: 80px;}
.el-menu { border: none;}
.el-menu-vertical-demo:not(.el-menu--collapse) { width: 100%; width: 218px; overflow-y: auto;}
.el-menu-vertical-demo { width: 50px; height: 100vh; }
.hiddenDropdown, .hiddenDropname { display: none; }

</style>
<style lang="scss">
.el_menu_box {
  .el-menu-item{ height: 56px; line-height: 56px; cursor: pointer; }
  .el-menu-item.is-active{ background-color: #409eff!important; color: #fff!important; }
}
</style>