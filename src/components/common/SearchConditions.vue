<template>
  <div class="condition-wrapper">
    <!-- <div class="condition-item">
      <p class="condition-item-label">商品分类：</p>
      <el-select class="condition-item-select" v-model="value" placeholder="请选择" :width="140">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div> -->
    <div class="condition-item">
      <p class="condition-item-label">商品状态：</p>
      <el-select class="condition-item-select" v-model="status" placeholder="请选择" :width="140">
        <el-option
          v-for="item in statusOpts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="condition-item">
      <p class="condition-item-label">质量星级：</p>
      <el-select class="condition-item-select" v-model="start" placeholder="请选择" :width="140">
        <el-option
          v-for="item in startOpts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="condition-item mr0">
      <p class="condition-item-label">标题包含：</p>
      <Input class="condition-item-input" v-model="keyword" placeholder="请输入关键字" />
    </div>
    <div class="condition-item">
      <p class="condition-item-label">上架时间：</p>
      <DatePicker
        v-model="dateValue"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </DatePicker>
    </div>
  </div>
</template>
<script>
import {Input, DatePicker} from 'vvic-element-ui';
export default {
  name: 'SearchConditions',
  components: {
    Input,
    DatePicker,
  },
  data() {
    return {
      statusOpts: [
        {
          value: '',
          label: '全部状态',
        },
        {
          value: 'published',
          label: '上架',
        },
        {
          value: 'expired',
          label: '下架',
        },
      ],
      startOpts: [
        {
          value: '',
          label: '全部星级',
        },
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
          value: '5',
          label: '5',
        },
        {
          value: '6',
          label: '6',
        },
        {
          value: '7',
          label: '7',
        },
      ],
      status: '',
      start: '',
      keyword: '',
      dateValue: '',
    };
  },
  methods: {
    getConditions() {
      const params = {};
      if (this.status) {
        params.status = this.status;
      }
      if (this.start) {
        params.start = this.start;
      }
      if (this.keyword) {
        params.subjectKey = this.keyword;
      }
      if (this.dateValue) {
        params.startPublishTime = this.dateValue[0].getTime();
        params.endPublishTime = this.dateValue[1].getTime();
      }
      return params;
    },
  },
};
</script>
<style lang="scss">
.condition-wrapper {
  display: flex;
  flex-flow: wrap;
}
.condition-item {
  display: flex;
  align-items: center;
  margin-right: 40px;
  margin-bottom: 20px;
  &-select {
    width: 140px;
  }
  &-label {
    font-size: 12px;
    white-space: nowrap;
    color: #333333;
  }
  &-input {
    width: 235px;
  }
  &.mr0 {
    margin-right: 0;
  }
}
.el-input__icon,
.el-date-editor .el-range-separator {
  height: auto !important;
}
</style>
