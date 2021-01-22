<template>
  <div class="market_detail">
    <div class="logo_box">
      <div class="logo"><img src="@/assets/images/avve.png" /></div>
      <div class="title">AAVE</div>
    </div>
    <div class="detail_con">
      <p>Coverage for Aave - Current Active Nonce: 0</p>
      <p>Aave coverage contract: <el-link>0X983JSE830DKHKWLFI393JDL</el-link></p>
    </div>
    <div class="tab_tit">
      <span :class="{'active': tabActive===1}" @click="onTabActive(1)">当前保险</span>
      <span :class="{'active': tabActive===2}" @click="onTabActive(2)">过期保险</span>
    </div>
    <currentComp v-if="tabActive === 1"></currentComp>
    <overdueComp v-if="tabActive === 2"></overdueComp>
  </div>
</template>

<script>
import currentComp from './modules/current'
import overdueComp from './modules/overdue'
export default {
  name: 'marketDetail',
  data() {
    return {
      tabActive: 1
    }
  },
  components: {
    currentComp,
    overdueComp
  },
  methods: {
    
    onTabActive(v) {
      this.tabActive = v
    }
  }
}
</script>

<style lang="scss" scoped>
.market_detail{ 
  .logo_box{ display: flex; align-items: center;
    .logo{ margin-right: 1rem;
      img{ height: 3rem; }
    }
    .title{ font-size: 1.5rem; font-weight: 500; }
  }
  .detail_con{ font-size: 1rem; color: #999; font-weight: lighter; padding: 1.5rem 0; line-height: 1.5rem;
    .el-link{ color: cornflowerblue; }
  }
  .tab_tit{ text-align: center; font-size: 1.2rem; margin-bottom: 2rem;
    span{ margin-right: 2rem; display: inline-block; border-bottom: solid #fff 0.2rem; cursor: pointer; }
    span.active{color: cornflowerblue; border-bottom: solid cornflowerblue 0.2rem; color: cornflowerblue;}
  }
}
</style>
