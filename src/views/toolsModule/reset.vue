<template>
  <div class="reset-wrapper">
    <div class="switch-container">
      <p class="title">自动重发开关</p>
      <ElSwitch v-model="switchOn" inactive-color="#dcdfe6;"> </ElSwitch>
    </div>
    <div class="rule-wrapper">
      <div class="content-box">
        <div class="content-box-title">自动重发规则</div>
        <div class="content-box-line"></div>
        <p class="sub-title">重发范围：</p>
        <SearchConditions class="conditions-container" ref="conditionsRef"></SearchConditions>
        <p class="sub-title">重发时间段：</p>
        <div class="timer-container">
          <p>起始时间：</p>
          <TimePicker
            class="timer-picker"
            v-model="startTime"
            format="HH:mm"
            placeholder="请选择时间"
          >
          </TimePicker>
          <p>终止时间：</p>
          <TimePicker
            class="timer-picker"
            v-model="endTime"
            format="HH:mm"
            placeholder="请选择时间"
          >
          </TimePicker>
        </div>
        <p class="desc">上午9:00-11:00，下午14:00-17:00，夜晚19:00-22:00是流量高峰期</p>
        <div class="timer-container">
          <p>重发间隔时间：&nbsp;&nbsp;&nbsp;每</p>
          <Input class="timer-container-input" v-model="resetInterval" />
          <p>分钟重发一批商品</p>
        </div>
        <div class="btn-group">
          <el-button class="btn-group-item" type="primary" @click="save">保存</el-button>
          <el-button class="btn-group-item">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Switch, TimePicker, Input} from 'vvic-element-ui';
export default {
  name: 'Reset',
  components: {
    ElSwitch: Switch,
    TimePicker,
    Input,
  },
  data() {
    return {
      switchOn: false,
      startTime: null,
      endTime: null,
      resetInterval: 30,
    };
  },
  watch: {
    startTime(cVal) {
      if (cVal && this.endTime && cVal.getTime() > this.endTime.getTime()) {
        if (document.getElementsByClassName('el-message').length === 0) {
          this.$message.error('开始时间不可大于结束时间');
        }
        this.startTime = null;
      }
    },
    endTime(cVal) {
      if (cVal && this.startTime && cVal.getTime() < this.startTime.getTime()) {
        if (document.getElementsByClassName('el-message').length === 0) {
          this.$message.error('结束时间不可小于开始时间');
        }
        this.endTime = null;
      }
    },
  },
  methods: {
    save() {
      if (!this.startTime) {
        this.$message.error('请输入起始时间');
        return;
      }
      if (!this.endTime) {
        this.$message.error('请输入终止时间');
        return;
      }
      if (!/^\+?[1-9]\d*$/.test(this.resetInterval)) {
        this.$message.error('间隔时间请输入正整数');
        return;
      }
      let params = {
        switchOn: this.switchOn ? 1 : 0,
        startTime: this.startTime.getTime(),
        endTime: this.endTime.getTime(),
        interval: Number(this.resetInterval),
      };
      const conditions = this.$refs.conditionsRef.getConditions();
      params.query = conditions;
      console.log(params);
    },
  },
};
</script>
<style lang="scss">
.reset-wrapper {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 246, 250);
  .switch-container {
    display: flex;
    align-items: center;
    padding-left: 25px;
    width: 100%;
    height: 62px;
    background-color: #ffffff;
    box-sizing: border-box;
    .title {
      margin-right: 30px;
      font-size: 16px;
      font-weight: 600;
      color: #333333;
    }
  }
  .rule-wrapper {
    margin-top: 15px;
    padding: 25px;
    width: 100%;
    height: calc(100% - 77px);
    background-color: #ffffff;
    box-sizing: border-box;
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
    .sub-title {
      margin-top: 20px;
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      color: #333333;
      // &:nth-last-child(1) {
      //   margin-top: 29px;
      // }
    }
    .timer-container {
      display: flex;
      align-items: center;
      margin-top: 15px;
      font-size: 12px;
      color: #333333;
      &-input {
        margin: 0 8px;
        width: 50px;
      }
    }
    .timer-picker {
      margin-right: 60px;
      width: 135px;
    }
    .desc {
      margin: 0;
      font-size: 12px;
      font-weight: 400;
      text-align: left;
      color: #9c9c9c;
    }
    .btn-group {
      position: absolute;
      bottom: 32px;
      left: 50%;
      &-item {
        width: 100px;
      }
    }
  }
}
</style>
