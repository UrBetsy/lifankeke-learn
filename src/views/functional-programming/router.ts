export default {
    path: '/fp',
    component: () => import(/* webpackChunkName: "learn" */ './wrapper.vue'),
    children: [
        {
            path: '',
            component: () => import(/* webpackChunkName: "learn" */ './index.vue'),
        },
    ],
};
