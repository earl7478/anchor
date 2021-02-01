<template>
  <div class="dashbord_detail">
    <div class="logo_box">
      <div class="title">我的Anchor</div>
    </div>
    <div class="detail_con">
      <p>我可以用CLAIM和NOCLAIM来交易，流动性挖矿 <el-link>0X983JSE830DKHKWLFI393JDL</el-link></p>
    </div>
    <div class="tab_tit">
      <span :class="{'active': tabActive===1}" @click="onTabActive(1)">我的Anchor</span>
      <span :class="{'active': tabActive===2}" @click="onTabActive(2)">流动性挖矿</span>
    </div>
    <myAnchor v-if="tabActive === 1"></myAnchor>
  </div>
</template>

<script>
import myAnchor from './modules/myAnchor'
export default {
  name: 'dashbordDetail',
  data() {
    return {
      tabActive: 1
    }
  },
  components: {
    myAnchor
  },
  methods: {
    
    onTabActive(v) {
      if(v===2) return
      this.tabActive = v
    }
  }
}
</script>

<style lang="scss" scoped>
.dashbord_detail{ 
  .logo_box{ display: flex; align-items: center;
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
