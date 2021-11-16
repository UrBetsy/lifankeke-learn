import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';
import LearnRouter from '@/views/learn/router';
import DesignPartten from '@/views/design-partten/router';
import previewImage from '@/views/preview-img/router';
import fpRouter from '@/views/functional-programming/router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    LearnRouter,
    DesignPartten,
    previewImage,
    fpRouter,
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
