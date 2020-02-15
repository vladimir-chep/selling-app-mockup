import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const apiURL = '//localhost:5000';

const state = {
    categories: [],
    items: [],
    selected: {
        categoryID: '1',
        itemID: null,
        data: null,
    },
    loading: true,
};

const getters = {
    categories: state => state.categories,
    items: state => state.items,
    selectedCategoryID: state => state.selected.categoryID,
    selectedItemsByCat: state => {
        const id = state.selected.categoryID;
        return state.items.filter(el => `${el['category_id']}` === id);
    },
    selectedItem: state => state.selected.data,
    loading: state => state.loading,
};

const mutations = {
    fetchCategories (state, payload) {
        state.categories = payload;
    },
    fetchItems (state, payload) {
        state.items = payload;
    },
    setSelectedCategoryID (state, payload) {
        state.selected.categoryID = payload;
    },
    setSelectedItem (state, payload) {
        state.selected.data = payload;
    },
    setLoading (state, payload) {
        state.loading = payload;
    },
    resetSelected (state, payload) {
        [state.selected.categoryID, state.selected.itemID] = payload;
    },
};

const actions = {
    getDataFromAPI ({ commit }) {
        const getCategories = () => axios.get(`${apiURL}/categories`);
        const getItems = () => axios.get(`${apiURL}/items`);

        return axios.all([getCategories(), getItems()])
            .then(axios.spread((categories, items) => {
                commit('fetchCategories', categories.data.data);
                commit('fetchItems', items.data.data);
            }))
            .catch(error => console.warn(error));
    },
    selectItem ({ getters, commit }, [categoryID, itemID]) {
        commit('resetSelected', [categoryID, itemID]);

        if (checkID(categoryID, itemID)) {
            const data = getters.selectedItemsByCat.find(el => el.id === itemID);

            commit('setSelectedItem', data);
        } else {
            commit('resetSelected', ['1', null]);
            commit('setSelectedItem', null);
        }

        function checkID (cID, iID) {
            let found = false;

            for (let i in getters.items) {
                let item = getters.items[i];

                if (item.category_id == cID && item.id === iID) {
                    found = true;
                    break;
                }
            }

            return found;
        }
    },
    resetSelected ({ commit }, [categoryID, itemID]) {
        commit('resetSelected', [categoryID, itemID]);
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;