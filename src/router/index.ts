import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import vHome from '@/apps/home/index.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'home',
        component: vHome,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    login: true,
                    secret: true,
                    title: '系统首页',
                },
                component: () => import('@/apps/dashboard/index.vue'),
            },
            {
                path: '/user/info',
                name: 'user-info',
                meta: {
                    login: true,
                    secret: true,
                    title: '个人中心',
                },
                component: () => import('@/apps/user/info.vue'),
            },
            {
                path: '/user/secret',
                name: 'user-secret',
                meta: {
                    login: true,
                    title: '密钥管理',
                },
                component: () => import('@/apps/user/secret.vue'),
            },
            {
                path: '/error/403',
                name: 'error-403',
                meta: {
                    login: true,
                    title: '没有权限',
                },
                component: () => import('@/apps/error/403.vue'),
            },
            {
                path: '/error/404',
                name: 'error-404',
                meta: {
                    login: true,
                    title: '找不到页面',
                },
                component: () => import('@/apps/error/404.vue'),
            },
        ],
    },
    {
        path: '/user/login',
        name: 'user-login',
        meta: {
            title: '登录',
        },
        component: () => import('@/apps/user/login.vue'),
    },
    {
        path: '/user/register',
        name: 'user-register',
        meta: {
            title: '注册',
        },
        component: () => import('@/apps/user/register.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - TDP Cloud`;

    const token = localStorage.getItem('vt_token');
    const keyid = +localStorage.getItem('vt_keyid');

    if (!token && to.meta.login) {
        next('/user/login');
        return;
    }

    if (keyid < 1 && to.meta.secret) {
        next('/user/secret');
        return;
    }

    next();
});

export default router;
