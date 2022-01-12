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
        <div class="operate-container long">
          <Radio v-model="way" label="1">方法1</Radio>
          <div class="operate-item">
            <p class="operate-item-label">使用全新标题：</p>
            <Input
              class="operate-item-input flex-1"
              v-model="newTitle"
              placeholder="请输入新的标题内容"
            />
            <span class="input-counter">{{ newTitleCounter }}/60</span>
          </div>
        </div>
        <div class="operate-container">
          <Radio v-model="way" label="2">方法2</Radio>
          <div class="operate-item">
            <p class="operate-item-label">前缀&nbsp; & &nbsp;后缀：</p>
            <Input class="operate-item-input" v-model="affix.front" placeholder="请输入前缀" />
            <Input class="operate-item-input flex-1" v-model="affix.end" placeholder="请输入后缀" />
          </div>
        </div>
        <div class="operate-container">
          <Radio v-model="way" label="3">方法3</Radio>
          <div class="operate-item">
            <p class="operate-item-label">替换关键字：</p>
            <Input
              class="operate-item-input"
              v-model="replace.old"
              placeholder="请输入要替换的关键字"
            />
            <span>替换为</span>
            <Input
              class="operate-item-input flex-1"
              v-model="replace.new"
              placeholder="请输入新内容"
            />
          </div>
        </div>
        <div class="operate-container">
          <Radio v-model="way" label="4">方法4</Radio>
          <div class="operate-item">
            <p class="operate-item-label">删除关键字：</p>
            <Input
              class="operate-item-input flex-1"
              v-model="deleteTxt"
              placeholder="请输入要删除的关键字，若有多个关键字，用逗号隔开"
            />
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
  name: 'EditTitle',
  components: {
    Input,
    Radio,
  },
  data() {
    return {
      way: '1',
      newTitle: null,
      affix: {
        front: null,
        end: null,
      },
      replace: {
        old: null,
        new: null,
      },
      deleteTxt: null,
    };
  },
  computed: {
    newTitleCounter() {
      return this.newTitle && this.newTitle.trim().replace(/[\u0391-\uFFE5]/g, '__').length;
    },
  },
  methods: {
    submit() {
      let params = {};
      switch (this.way) {
        case '1':
          if (!this.newTitle || !this.newTitle.trim()) {
            this.$message.error('请输入标题');
            return;
          } else if (this.newTitleCounter > 60) {
            this.$message.error('最多输入30个汉字（60个字符），您已超长');
            return;
          }
          params.newTitle = this.newTitle.trim();
          break;
        case '2':
          if (!this.affix.front && !this.affix.end) {
            this.$message.error('请输入前缀或后缀');
            return;
          } else if (
            this.affix.front &&
            this.affix.front.trim().replace(/[\u0391-\uFFE5]/g, '__').length > 18
          ) {
            this.$message.error('前缀不可超过18个字符');
            return;
          } else if (
            this.affix.end &&
            this.affix.end.trim().replace(/[\u0391-\uFFE5]/g, '__').length > 18
          ) {
            this.$message.error('后缀不可超过18个字符');
            return;
          }
          if (this.affix.front) {
            params.prefix = this.affix.front.trim();
          }
          if (this.affix.end) {
            params.suffix = this.affix.end.trim();
          }
          break;
        case '3':
          if (!this.replace.old || !this.replace.new) {
            this.$message.error('请输入替换关键字与新内容');
            return;
          } else if (this.replace.old.trim().replace(/[\u0391-\uFFE5]/g, '__').length > 12) {
            this.$message.error('关键字不可超过12个字符');
            return;
          } else if (this.replace.new.trim().replace(/[\u0391-\uFFE5]/g, '__').length > 12) {
            this.$message.error('新内容不可超过12个字符');
            return;
          }
          params.searchString = this.replace.old.trim();
          params.replacement = this.replace.new.trim();
          break;
        case '4':
          if (!this.deleteTxt || !this.deleteTxt.trim()) {
            this.$message.error('请输入删除关键字');
            return;
          } else if (this.deleteTxt.trim().replace(/[\u0391-\uFFE5]/g, '__').length > 12) {
            this.$message.error('删除关键字不可超过12个字符');
            return;
          }
          params.deleteString = this.deleteTxt.trim();
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
    margin-bottom: 21px;
    width: 73%;
    &.long {
      width: 100%;
    }
  }
  &-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 42px;
    font-size: 12px;
    white-space: nowrap;
    color: #333333;
    width: 100%;
    &-label {
      width: 84px;
      text-align: left;
    }
    &-input {
      margin: 0 5px;
      width: 235px;
      &.small {
        width: 50px;
      }
    }
    .input-counter {
      position: absolute;
      right: 15px;
      color: #9c9c9c;
      font-weight: 400;
    }
  }
}
.submit-btn {
  position: absolute;
  bottom: 15px;
  left: 50%;
}
.flex-1 {
  flex: 1;
}
</style>
