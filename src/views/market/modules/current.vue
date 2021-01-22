<template>
  <div class="com_current">
    <el-table :data="tableData" border class="table_tabs_income" ref="tableData" :header-cell-style="{background:'#f3f3f3',color:'#606266'}" width="100%">
      <el-table-column prop="nonce" label="Nonce" align="center"></el-table-column>
      <el-table-column prop="date" label="过期时间(UTC)" align="center"></el-table-column>
      <el-table-column prop="pledge" label="质押物" align="center"></el-table-column>
      <el-table-column prop="token" label="Token" align="center"></el-table-column>
      <el-table-column prop="price" label="Price" align="center"></el-table-column>
      <el-table-column prop="yearRate" label="年收益率" align="center"></el-table-column>
      <el-table-column prop="total" label="总发行量" align="center"></el-table-column>
      <el-table-column prop="status" label="Status" align="center"></el-table-column>
      <el-table-column prop="blance" label="我的余额" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template>
          <el-button type="primary">买入</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    getDataList() {
      for(let i=0; i<15; i++) {
        this.tableData.push({nonce: i, date: '5/21/2021 12:00:00 AM', pledge: 'DAI', token: 'CLAIM', price: '$0.98', yearRate: '6.46', total: '625,025', fundTotal: '625,025', status: 'Active', blance: '1', fundBlance: '$0.22'})
      }
    },
  }
}
</script>