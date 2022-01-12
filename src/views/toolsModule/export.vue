<template>
  <div class="export-wrapper">
    <div class="content-box">
      <div class="content-box-title">导出范围</div>
      <div class="content-box-line"></div>
      <SearchConditions class="conditions-container" ref="conditionsRef"></SearchConditions>
    </div>
    <div class="desc-group">
      <p>说明</p>
      <p>1、导出商品，可进行商品备份，以免数据丢失</p>
      <p>2、导出商品后，可导入到其他店铺，实现店铺搬家</p>
      <input type="file" @change="uploadFile" ref="fileRef" />
    </div>
    <div class="btn-group">
      <el-button type="primary" @click="doItem('export')">导出商品</el-button>
      <el-button type="primary" @click="doItem('import')">导入商品</el-button>
    </div>
  </div>
</template>
<script>
import store from '@/store/index';
import {setTimeout} from 'timers';
export default {
  name: 'Export',
  data() {
    return {
      uploadedFile: null,
    };
  },
  methods: {
    uploadFile(file) {
      const params = {
        file: file.srcElement.files[0],
      };
      console.log('导入', params);
    },
    doItem(type) {
      if (type === 'import') {
        this.$refs.fileRef.click();
        return;
      }
      let params = {};
      const conditions = this.$refs.conditionsRef.getConditions();
      params.query = conditions;
      console.log('导出', params);
      store.commit('updateLoadingStatus', {isLoading: true});
      setTimeout(() => {
        store.commit('updateLoadingStatus', {isLoading: false});
      }, 2000);
    },
  },
};
</script>
<style lang="scss">
.export-wrapper {
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
.conditions-container {
  margin-top: 20px;
}
.desc-group {
  margin-top: 60px;
  font-size: 12px;
  text-align: left;
  color: #6c6c6c;
  input {
    display: none;
  }
}
.btn-group {
  position: absolute;
  bottom: 32px;
  left: 50%;
}
</style>
