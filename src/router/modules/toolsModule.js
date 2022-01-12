export default [
  {
    path: '/tools',
    name: 'tools',
    component: () => import(/* webpackChunkName: "home" */ '@/views/toolsModule/index.vue'),
    alwaysShow: true,
    meta: {
      keepAlive: true, // 是否缓存组件
      title: '应用中心', // 路由中文名称
      id: 999,
    },
    children: [
      {
        path: '/',
        redirect: 'edit',
      },
      {
        path: 'copy',
        name: 'copy',
        component: () => import(/* webpackChunkName: "home" */ '@/views/toolsModule/copy.vue'),
        alwaysShow: true,
        meta: {
          keepAlive: true, // 是否缓存组件
          title: '复制商品', // 路由中文名称
          id: 1,
        },
      },
      {
        path: 'edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "home" */ '@/views/toolsModule/edit.vue'),
        alwaysShow: true,
        meta: {
          keepAlive: true, // 是否缓存组件
          title: '批量修改', // 路由中文名称
          id: 2,
        },
      },
      {
        path: 'editPrice',
        name: 'editPrice',
        component: () => import(/* webpackChunkName: "home" */ '@/views/toolsModule/editPrice.vue'),
        alwaysShow: true,
        meta: {
          keepAlive: true, // 是否缓存组件
          title: '批量修改价格', // 路由中文名称
          id: 21,
        },
      },
      {
        path: 'editTitle',
        name: 'editTitle',
        component: () => import(/* webpackChunkName: "home" */ '@/views/toolsModule/editTitle.vue'),
        alwaysShow: true,
        meta: {
          keepAlive: true, // 是否缓存组件
          title: '批量修改标题', // 路由中文名称
          id: 22,
        },
      },
      {
        path: 'export',
        name: 'export',
        component: () => import(/* webpackChunkName: "home" */ '@/views/toolsModule/export.vue'),
        alwaysShow: true,
        meta: {
          keepAlive: true, // 是否缓存组件
          title: '商品导出与导入', // 路由中文名称
          id: 3,
        },
      },
      {
        path: 'reset',
        name: 'reset',
        component: () => import(/* webpackChunkName: "home" */ '@/views/toolsModule/reset.vue'),
        alwaysShow: true,
        meta: {
          keepAlive: true, // 是否缓存组件
          title: '商品重发', // 路由中文名称
          id: 4,
        },
      },
    ],
  },
];
