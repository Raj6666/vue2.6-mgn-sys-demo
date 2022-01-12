/*
 * @Descripttion:路由守卫
 * @version:
 * @Author: husiyuan
 * @Date: 2020-07-20 18:02:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-05 20:02:27
 */
import router from './index';

// to是当前页面，from是上一个页面
// 路由跳转前
const beforeEach = router.beforeEach((to, _, next) => {
  // console.log(to)
  // console.log(from)
  document.title = to.meta.title || '默认title';
  next();
});
// to是当前页面，from是上一个页面
// 路由跳转后
const afterEach = router.afterEach(() => {
  // console.log(to)
  // console.log(from)
});

export default {beforeEach, afterEach};
