import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/toolsModule';
import StatusError from '@/views/Error';

Vue.use(VueRouter);

// 加载所有模块子路由
const requireContext = require.context('./modules', false, /\.js$/);
let allRouterModules = [];
requireContext.keys().forEach((name) => {
  allRouterModules.push(...(requireContext(name).default || []));
});

// console.log(allRouterModules);

const routes = [
  {
    path: '/', // 首页
    redirect: 'tools',
  },
  {
    path: '/StatusError', // 状态错误页面
    name: 'StatusError',
    component: StatusError,
  },
  {
    path: '*',
    redirect: 'tools',
  },
  ...allRouterModules, // 注入所有的路由模块
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
