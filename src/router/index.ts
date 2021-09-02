import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';
import LearnRouter from '@/views/learn/router';
import DesignPartten from '@/views/design-partten/router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    LearnRouter,
    DesignPartten,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
