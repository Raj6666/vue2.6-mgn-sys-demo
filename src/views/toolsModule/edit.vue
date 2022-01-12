<template>
  <div class="edit-wrapper">
    <div class="content-box">
      <div class="content-box-title">请选择批量修改的内容</div>
      <div class="content-box-line"></div>
      <div class="btn-box">
        <el-button @click="goPage('Title')">商品标题</el-button>
        <el-button @click="goPage('Price')">商品价格</el-button>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import {Input, Radio} from 'vvic-element-ui';
export default {
  name: 'Edit',
  components: {
    // Input,
    // Radio,
  },
  data() {
    return {};
  },
  methods: {
    goPage(type) {
      this.$router.push({path: `/tools/edit${type}`});
    },
  },
};
</script>
<style lang="scss" scoped>
.edit-wrapper {
  padding: 25px;
}
.content-box {
  margin-bottom: 50px;
  width: 100%;
  &-title {
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    color: #6c6c6c;
  }
  &-line {
    margin-top: 10px;
    border-top: 1px solid #e5e5e5;
    width: 100%;
    height: 1px;
  }
}
.btn-box {
  display: flex;
  margin-top: 20px;
}
</style>
