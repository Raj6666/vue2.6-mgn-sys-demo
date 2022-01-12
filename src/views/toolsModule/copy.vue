<template>
  <div class="copy-wrapper">
    <div class="copy-input">
      <span>复制商品链接</span>
      <input placeholder="请输入要复制的商品链接" />
    </div>
    <p class="copy-desc">支持复制 搜款网、1688商品，更多平台商品复制，敬请期待～</p>
    <div class="submit-box">
      <Checkbox
        >请遵守平台相关规范，使用者获取授权后再进行商品复制。请确认并同意
        <a href="/">用户服务协议、隐私政策</a></Checkbox
      >
      <div class="copy-btn btn-large">复制商品</div>
    </div>
  </div>
</template>
<script>
import {Checkbox} from 'vvic-element-ui';
export default {
  name: 'Copy',
  components: {
    Checkbox,
  },
};
</script>
<style lang="scss" scoped>
.copy-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.copy-input {
  display: flex;
  align-items: center;
  margin-top: 80px;
  span {
    font-size: 12px;
    font-weight: 600;
    color: #333333;
  }
  input {
    margin-left: 10px;
    border: 1px solid #e5e5e5;
    padding: 14px 10px;
    width: 440px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    &:focus {
      border-color: #fb658a;
    }
  }
}
.copy-desc {
  margin-top: 10px;
  margin-left: -25px;
  font-size: 12px;
  color: #6c6c6c;
}
.submit-box {
  margin-top: 280px;
  font-size: 12px;
  a {
    text-decoration: none;
    color: #1686cc;
  }
  .copy-btn {
    margin: 16px auto;
  }
}
</style>
