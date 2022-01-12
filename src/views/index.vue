<template>
  <div>
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'Index',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userInfo(state) {
        return state.userInfo ? state.userInfo : {};
      },
    }),
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
// body {
//   //   background-color: #f5f5f5;
//   background-color: rgb(245, 246, 250);
//   padding: 25px 50px;
// }
</style>
