export default {
    path: '/preview-img',
    component: () => import(/* webpackChunkName: "preview-img" */ './wrapper.vue'),
    children: [
        {
            path: '',
            component: () => import(/* webpackChunkName: "preview-img" */ './index.vue'),
        },
    ],
};
