export default [
    {
        path: '/', alias: '/login', name: '登录', meta: { auth: false },
        component: resolve => require(['@/views/login'], resolve)
    },


    {
        path: '/admin', redirect: '/demo', name: 'admin',
        component: resolve => require(['@/views/Admin'], resolve), meta: { auth: true },
        children: [
            {
                path: '/demo', name: '演示页面',
                meta: {
                    auth: true,
                    breadcrumb: [
                        { name: '首页', path: '/index' }
                    ]
                },
                component: resolve => require(['@/views/demo'], resolve)
            },
            {
                path: '/index', name: '首页',
                meta: {
                    auth: true
                },
                component: resolve => require(['@/views/index'], resolve)
            },
        ]
    }
]