<template>
  <div class="page-wrapper">
    <div class="header-container">
      <Header class="content-width"></Header>
    </div>
    <div class="content content-width">
      <Nav></Nav>
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {},
  data() {
    return {
      dialogVisible: false,
      isShowLogin: false,
    };
  },
  mounted() {
    // this.$message('HelloWorld');
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding: 25px 50px;
  min-height: 734px;
  background-color: rgb(245, 246, 250);
}
.container {
  margin-left: 25px;
  min-height: 540px;
  background-color: #ffffff;
  flex: 1;
}
.main-logo {
  margin: 100px auto;
  width: 260px;
  height: 260px;
  background-color: red;
}
</style>
