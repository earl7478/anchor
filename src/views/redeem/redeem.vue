<template>
  <div class="redeem">
    <div class="logo_box">
      <div class="title">Redeem</div>
    </div>
    <div class="detail_con">
      <p>到期日之前，您可以存入CLAIM和NOCLAIM后取出相等的DAI</p>
    </div>
    <div class="redeem_content">
      <el-form ref="formData" :model="formData" label-width="120px">
        <el-form-item label="请选择协议">
          <el-select v-model="formData.agreement" placeholder="请选择活动区域">
            <el-option :label="item.name" :value="item.id" v-for="item in selectOpts.agreement" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="过期时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="formData.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="协议地址">
          <span class="agreement_address">0X983JSE830DKHKWLFI393JDL</span>
        </el-form-item>
        <el-form-item label="钱包余额">
          <p class="item_p_f">
            <el-input v-model="formData.saveAmount" disabled style="width: 300px">
              <template slot="append">CLAIM</template>
            </el-input>
            <el-switch v-model="formData.delivery" active-text="已授权"></el-switch>
          </p>
           <p class="item_p_f">
            <el-input v-model="formData.saveAmount1" disabled style="width: 300px">
              <template slot="append">NOCLAIM</template>
            </el-input>
            <el-switch v-model="formData.delivery1" active-text="已授权"></el-switch>
          </p>
        </el-form-item>
        <el-form-item label="取出金额">
          <el-input v-model="formData.withdrawAmount" style="width: 400px">
            <template slot="append">DAI</template>
          </el-input>
          <span class="save_max_amount">max:375</span>
          <p class="tips">0.1手续费 0.123 DAI</p>
        </el-form-item>
        <el-form-item label="到账金额">
          <p class="tips">1,987.653 DAI</p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <div class="redeem_faq">
        <h3>FAQ</h3>
        <p>在通过存入Dai铸造上述的索赔代币和无索赔代币后，您将能够参与盾采矿。为此，你必须首先向索赔池和无索赔池提供流动性。</p>
        <p>在使用CLAIM和/或NOCLAIM代币提供流动性后，转到“Shield Mining”选项卡，将您的BTP(Blancer Pool Liquidity Provide代币)押注到相应的池中。</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Redeem',
  data() {
    return {
      formData: {
        saveAmount: '1,098.756',
        saveAmount1: '1,098.756',
        withdrawAmount: '',
        agreement: '',
        date1: '',
        delivery: false
      },
      selectOpts: {
        agreement: [
          {id: 1, name: 'AAVE1'},
          {id: 2, name: 'AAVE2'},
          {id: 3, name: 'AAVE3'},
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      // console.log('submit!');
      this.$message({message: '您需要向合约授权DAI资产，不同的合约需要单独授权。', type: 'warning'})
      // this.$message({message: '您需要在以太坊网络中确认这次交易，确认后交易完成。', type: 'warning'})
    }
  }
}
</script>

<style lang="scss" scoped>
.redeem{
  .logo_box{ display: flex; align-items: center;
    .logo{ margin-right: 1rem;
      img{ height: 3rem; }
    }
    .title{ font-size: 1.5rem; font-weight: 500; }
  }
  .detail_con{ font-size: 1rem; color: #999; font-weight: lighter; padding: 1.5rem 0; line-height: 1.5rem;
    .el-link{ color: cornflowerblue; }
  }
  .redeem_content{ max-width: 700px; 
    .agreement_address{ color: cornflowerblue; margin-right: 10px; }
    .save_max_amount{ margin-left: 10px; font-size: 12px; color: #666; }
    .item_p_f{ margin-bottom: 10px;
      .el-switch{ margin-left: 20px; }
    }
    .tips{ font-size: 13px; color: #666; }
    .redeem_faq{border-top: solid #e1e1e1 1px; margin-top: 15px; padding-top: 25px; color: #666;
      h3{ font-size: 18px; padding-bottom: 10px; }
      p{ font-size: 14px; padding: 10px 0; }
    }
  }
}

</style>
