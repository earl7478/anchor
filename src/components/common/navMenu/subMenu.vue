<template>
  <div>
    <el-submenu
      v-for="item in navlist"
      :key="item.adminMenu.id + '1'"
      v-show="item.adminMenu.menuType=='list'"
      :index="getListArr(item)"
    >
      <template slot="title">
        <i :class="item.adminMenu.icon"></i>
        <span v-if="!elMenuIsCollapse">{{item.adminMenu.menuName}}</span>
      </template>
      <subMenu :navlist="item.children"></subMenu>
    </el-submenu>

    <el-menu-item
      v-for="item in navlist"
      :key="item.adminMenu.id + '2'"
      v-show="item.adminMenu.menuType=='page'"
      :index="item.adminMenu.url"
    >
      <i :class="item.adminMenu.icon"></i>
      <span v-if="!elMenuIsCollapse">{{item.adminMenu.menuName}}</span>
    </el-menu-item>
  </div>
</template>
<script>
export default {
  name: 'subMenu',
  props: ['navlist', 'elMenuIsCollapse'],
  data() {
    return {

    }
  },
  methods: {
    getListArr(item) {
      let list = item.children
      let arr = []
      for(let i= 0; i<list.length; i++) {
        arr.push(list[i].url)
      }
      return arr.join(',')
    }
  }
}
</script>
