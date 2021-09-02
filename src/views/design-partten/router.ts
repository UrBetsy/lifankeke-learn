export default {
    path: '/design-partten',
    component: () => import(/* webpackChunkName: "design-partten" */ './wrapper.vue'),
    children: [
        {
            path: '',
            component: () => import(/* webpackChunkName: "design-partten" */ './index.vue'),
        },
        {
            path: 'strategy',
            component: () => import(/* webpackChunkName: "design-partten" */ './template/strategy-partten.vue'),
        },
    ],
};
