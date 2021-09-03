export default {
    path: '/learn',
    component: () => import(/* webpackChunkName: "learn" */ './wrapper.vue'),
    children: [
        {
            path: '',
            component: () => import(/* webpackChunkName: "learn" */ './index.vue'),
        },
        {
            path: 'canvas',
            component: () => import(/* webpackChunkName: "learn" */ './canvas.vue'),
        },
        {
            path: 'class-name',
            component: () => import(/* webpackChunkName: "learn" */ './class-name.vue'),
        },
    ],
};
