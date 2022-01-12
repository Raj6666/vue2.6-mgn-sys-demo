<template>
  <div class="header-wrapper">
    <img class="logo" src="@/assets/images/logo.png" />
    <p class="title">应用名称</p>
    <p>距离到期：&nbsp;{{ dueDate }}天</p>
    <p>当前版本：&nbsp;标准版</p>
    <div class="upgrate-btn">升级/续费</div>
    <p class="tool">查看教程</p>
    <p class="tool">联系我们</p>
    <img class="contact" src="@/assets/images/contact.png" alt="" />
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      dueDate: 15,
    };
  },
};
</script>
<style lang="scss">
.header-wrapper {
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 1330px;
  height: 60px;
  font-size: 14px;
  color: #333333;
  background: #ffffff;
  box-sizing: border-box;
  .logo {
    width: 48px;
    height: 48px;
  }
  .title {
    margin-left: 15px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    flex: 1;
  }
  p {
    margin-left: 50px;
    &.tool {
      cursor: pointer;
    }
  }
  .upgrate-btn {
    margin-left: 50px;
    padding: 8px 18px;
    text-align: center;
    color: #ffffff;
    background: #fb658a;
    cursor: pointer;
  }
  .contact {
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }
}
</style>
