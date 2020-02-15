import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import Home from '@/views/Home.vue';
import Item from '@/views/Item.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        path: '/cat-:catID/item-:itemID',
        name: 'Item',
        component: Item,
        props: true,
        beforeEnter: (to, from, next) => {
            store.dispatch('selectItem', [to.params.catID, to.params.itemID]).then(() => {
                if (store.getters.selectedItem === null) {
                    next('/');
                } else {
                    next();
                }
            });
        },
    },
    {
        path: '*',
        component: NotFound,
    },
];


Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (store.getters.categories.length === 0 && store.getters.items.length === 0) {
        store.dispatch('getDataFromAPI').then(() => {
            next();
        });
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    store.commit('setLoading', false);
});

export default router;