<template>
  <div class="nav-wrapper">
    <!-- <p class="nav-item" :class="{selected: curPage === 'copy'}" @click="goPage('copy')">复制商品</p> -->
    <p class="nav-item" :class="{selected: curPage.indexOf('edit') > -1}" @click="goPage('edit')">
      批量修改
    </p>
    <p class="nav-item" :class="{selected: curPage === 'export'}" @click="goPage('export')">
      商品导出 & 导入
    </p>
    <p class="nav-item" :class="{selected: curPage === 'reset'}" @click="goPage('reset')">
      重发商品
    </p>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      curPage: 'copy',
    };
  },
  mounted() {
    this.curPage = this.$route.name;
  },
  methods: {
    goPage(url) {
      this.curPage = url;
      this.$router.push({path: `/tools/${url}`});
    },
  },
};
</script>
<style lang="scss">
.nav-wrapper {
  padding: 30px 20px;
  width: 200px;
  min-height: 540px;
  background-color: #ffffff;
}
.nav-item {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
  color: #333333;
  cursor: pointer;
  &.selected {
    font-weight: 600;
    color: #ef3664;
  }
}
</style>
