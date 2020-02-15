<template>
<ul class="categories">
    <li
        v-for="(category, index, key) in categories"
        :key="key"
        @click="selectCat(category.id)"
        :class="['categories__item', {'selected': selected(category.id)}]"
    >{{category.name}}</li>
</ul>
</template>

<script>
export default {
    name: 'Categories',
    computed: {
        categories () {
            return this.$store.getters.categories;
        },
    },
    methods: {
        selected (id) {
            return id === this.$store.getters.selectedCategoryID ? true : false;
        },
        selectCat (id) {
            this.$store.commit('setSelectedCategoryID', id);
        }
    },
}
</script>

<style lang="scss">
@import '~@/styles/setup/variables';

.categories {
    display: flex;
    height: 100%;
    max-height: 31px;
    overflow: auto;
    border-bottom: 1px solid $ligth-2;
    background: #fff;
    white-space: nowrap;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &__item {
        flex: 1 1 0;
        padding: 6px 24px;
        color: #c3c1c5;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        cursor: pointer;

        &.selected {
            color: $accent;
        }

        &:hover {
            color: lighten($accent, 15%);
        }
    }
}
</style>
