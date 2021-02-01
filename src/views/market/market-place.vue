<template>
  <div class="home">
    <div class="fund_list">
        <ul>
          <li class="item" v-for="(item, i) in fundList" :key="i" @click="toDetail(item)">
            <h3><img src="@/assets/images/rmb.png" /> {{item.name}}</h3>
            <div class="item_content">
              <span class="desc">锁仓量</span>
              <span class="con">{{item.con}} Dai</span>
            </div>
            <div class="item_footer">
              <span>协议地址</span>
              <span class="clom_slide"></span>
              <span>项目官网</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data() {
    return {
      fundList: [
        {name: 'AAVE1', con: '883,699'},
        {name: 'AAVE2', con: '883,699'},
        {name: 'AAVE3', con: '883,699'},
        {name: 'AAVE4', con: '883,699'},
        {name: 'AAVE5', con: '883,699'},
        {name: 'AAVE6', con: '883,699'},
        {name: 'AAVE7', con: '883,699'},
        {name: 'AAVE8', con: '883,699'}
      ]
    }
  },
  methods: {
    toDetail(item) {
      this.$router.push({path: '/market-detail', query: item})
    }
  }
}
</script>

<style lang="scss" scoped>
.fund_list{ 
  ul{ display: flex; flex-wrap: wrap; padding: 0.75rem 0;
    li{ width: calc(25% - 0.75rem); border: solid #e1e1e1 0.05rem; box-sizing: border-box; margin: 0 0.75rem 0.75rem 0; cursor: pointer;
      h3{ display: flex; justify-items: center; align-items: center; padding: 0.5rem; font-size: 0.9rem;
        img{ width: 1.5rem; height: 1.5rem; margin-right: 0.5rem; }
      }
      .item_content{ padding: 0 0 1rem 0; text-align: center;
        .desc{ font-size: 12px; color: #666; margin-right: 1rem; }
        .con{ font-size: 0.8rem; font-weight: 500; }
      }
      .item_footer{ display: flex; justify-content: space-around; font-size: 0.7rem; justify-items: center; align-items: center; background: #f1f1f1; padding: 0.5rem 0; color: #999;
        .clom_slide{ width: 0.05rem; height: 0.7rem; background: #999; }
      }
    }
    li:nth-child(4n){ margin-right: 0; }
  }
}
</style>
