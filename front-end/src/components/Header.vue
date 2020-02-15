<template>
<header class="header">
    <div class="header__menu">
        <div v-if="page === 'list'" class="icon-menu"></div>
        <div v-else class="icon-back" @click="$router.push('/')"></div>
    </div>
    <div class="header__center">
        <div v-if="page === 'list'" class="header__center__dummySerach">検索</div>
        <div v-else class="header__center__ttl">{{itemName}}</div>
    </div>
    <div class="header__others">
        <div v-if="page === 'list'" class="icon-others"></div>
        <div v-else class="icon-othersDetails"></div>
    </div>
</header>
</template>

<script>
export default {
    props: ['page', 'itemName'],
}
</script>

<style lang="scss">
@import '~@/styles/setup/variables';

.header {
    display: flex;
    height: 100%;
    max-height: 49px;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid $ligth-2;
    background: #fff;

    &__menu {
        width: 15%;
    }

    &__center {
        width: 55%;
        text-align: center;

        &__dummySerach {
            padding: 6px 4px;
            border-radius: 6px;
            color: #c3c1c5;
            background: $ligth-2;
            text-align: left;
        }

        &__ttl {
            font-size: 1.2rem;
        }
    }

    &__others {
        width: 30%;
    }
}

.icon {
    &-menu {
        width: 28px;
        height: 32px;
        margin: auto;
        background-image: url(~@/assets/icons/sprite-1.jpg);
        background-position: 0;
    }

    &-back {
        width: 19px;
        height: 32px;
        margin: auto;
        background-image: url(~@/assets/icons/sprite-1.jpg);
        background-position: -304px;
        cursor: pointer;
    }

    &-others {
        width: 98px;
        height: 32px;
        margin: auto;
        background-image: url(~@/assets/icons/sprite-1.jpg);
        background-position: 267px;
    }

    &-othersDetails {
        width: 98px;
        height: 32px;
        margin: auto;
        background-image: url(~@/assets/icons/sprite-1.jpg);
        background-position: 138px;
    }
}
</style>
