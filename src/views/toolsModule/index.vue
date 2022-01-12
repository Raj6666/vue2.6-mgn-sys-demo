<template>
  <div class="page-wrapper">
    <div class="header-container">
      <Header class="content-width"></Header>
    </div>
    <div class="content content-width">
      <Nav></Nav>
      <div class="container" ref="containerRef">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {Loading} from 'vvic-element-ui';
export default {
  name: 'toolsHome',
  components: {},
  methods: {},
  data() {
    return {
      loadingInstance: null,
    };
  },
  computed: {
    ...mapState({
      isLoading(state) {
        return state.isLoading;
      },
    }),
  },
  watch: {
    isLoading(cVal) {
      // 是否加载中
      if (cVal) {
        const options = {
          target: this.$refs.containerRef,
        };
        this.loadingInstance = Loading.service(options);
      } else if (this.loadingInstance) {
        this.$nextTick(() => {
          // 以服务的方式调用的 Loading 需要异步关闭
          this.loadingInstance.close();
        });
      }
    },
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
</style>
