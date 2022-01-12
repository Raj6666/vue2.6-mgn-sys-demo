<template>
  <div class="edit-wrapper">
    <div class="content-box">
      <div class="content-box-title">修改范围</div>
      <div class="content-box-line"></div>
      <SearchConditions class="conditions-container" ref="conditionsRef"></SearchConditions>
    </div>
    <div class="content-box">
      <div class="content-box-title">修改内容</div>
      <div class="content-box-line"></div>
      <div class="operate-wrapper">
        <div class="operate-container">
          <Radio v-model="way" label="1">方法1</Radio>
          <div class="operate-item">
            <p class="operate-item-label">使用新价格：</p>
            <Input class="operate-item-input" v-model="newPrice" placeholder="请输入新价格" />
          </div>
        </div>
        <div class="operate-container">
          <Radio v-model="way" label="2">方法2</Radio>
          <div class="operate-item">
            <p>
              按公式设置：&nbsp;&nbsp;最总价格=（当前价格&nbsp;x&nbsp;<Input
                class="operate-item-input small"
                v-model="functionPrice.percent"
              />%&nbsp;+<Input
                class="operate-item-input small"
                v-model="functionPrice.plus"
              />元&nbsp;-<Input
                class="operate-item-input small"
                v-model="functionPrice.reduce"
              />元）
            </p>
            <p class="desc">注：最终价格将保留 2 位小数，四舍五入</p>
          </div>
        </div>
      </div>
      <div class="submit-btn btn-large" @click="submit">提交修改</div>
    </div>
  </div>
</template>
<script>
import {Input, Radio} from 'vvic-element-ui';
export default {
  name: 'EditPrice',
  components: {
    Input,
    Radio,
  },
  data() {
    return {
      way: '1',
      newPrice: null,
      functionPrice: {
        percent: null,
        plus: null,
        reduce: null,
      },
    };
  },
  watch: {
    way(cVal) {
      if (cVal == 2) {
        this.functionPrice.percent = 100;
        this.functionPrice.plus = 0;
        this.functionPrice.reduce = 0;
      }
    },
  },
  methods: {
    submit() {
      let params = {};
      switch (this.way) {
        case '1':
          // if (
          //   !isDefined(this.newPrice) ||
          //   isNaN(this.newPrice) ||
          //   Number(this.newPrice) < 0 ||
          //   (this.newPrice.toString().indexOf('.') > -1 &&
          //     this.newPrice.toString().split('.')[1].length > 2)
          // ) {
          //   this.$message.error('请输入两位小数的正数或正整数');
          //   return;
          // }
          if (!/^\d+(\.\d{1,2})?$/.test(this.newPrice)) {
            this.$message.error('请输入两位小数的正数或正整数');
            return;
          }
          params.newPrice = Number(this.newPrice);
          break;
        case '2':
          if (
            !/^\d+(\.\d{1,2})?$/.test(this.functionPrice.percent) ||
            Number(this.functionPrice.percent) < 0 ||
            Number(this.functionPrice.percent) > 100
          ) {
            this.$message.error('请输入0 ~ 100 的百分比');
            return;
          } else if (!/^\d+(\.\d{1,2})?$/.test(this.functionPrice.plus)) {
            this.$message.error('增加值：请输入两位小数的正数或正整数');
            return;
          } else if (!/^\d+(\.\d{1,2})?$/.test(this.functionPrice.reduce)) {
            this.$message.error('减少值：请输入两位小数的正数或正整数');
            return;
          }
          params = JSON.parse(JSON.stringify(this.functionPrice));
          break;
      }
      const conditions = this.$refs.conditionsRef.getConditions();
      params.query = conditions;
      console.log(params);
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
.conditions-container {
  margin-top: 20px;
}
.operate {
  &-wrapper {
    margin-top: 20px;
  }
  &-container {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  &-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 42px;
    font-size: 12px;
    white-space: nowrap;
    color: #333333;
    &-input {
      margin: 0 5px;
      width: 235px;
      &.small {
        width: 50px;
      }
    }
    .desc {
      position: absolute;
      bottom: -19px;
      left: 0;
      color: #9c9c9c;
    }
  }
}
.submit-btn {
  position: absolute;
  bottom: 32px;
  left: 50%;
}
</style>
