<template>
  <div class="header">
    <div class="inner_box">
      <div class="menu_collapse"><i :class="elMenuIsCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="setElMenuIsCollapse"></i></div>
      <div class="nav">
        <span class="address">0X983JSE830DKHKWLFI393JDL</span>
        <span class="btn">切换</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'comHeader',
  props: {
    msg: {type: String, default:()=>{return ''}}
  },
  computed: {
    ...mapGetters(['elMenuIsCollapse'])
  },
  methods: {
    setElMenuIsCollapse() {
      if(this.elMenuIsCollapse) this.$store.commit('SET_elMenuIsCollapse', false)
      else this.$store.commit('SET_elMenuIsCollapse', true)
    }
  }
}
</script>

<style scoped lang="scss">
.header{ padding: 0; height: 80px; box-shadow:0px 3px 3px rgba(0,0,0,0.1); display: flex; align-items: center; z-index: 100; position: relative;
  .inner_box{ display: flex; width: 100%; box-sizing: border-box; padding: 0 20px; justify-content: space-between; align-items: center; 
    .menu_collapse{ font-size: 22px; }
    .nav{ font-size: 0.7rem; 
      .address{ color: cornflowerblue; margin-right: 1rem }
      .btn{ color: #444; }
    }
  }
}

</style>
