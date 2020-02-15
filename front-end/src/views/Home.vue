<template>
<div>
    <Header page="list" />
    <Categories />
    <div class="content content--home">
        <ul class="content__wrapper content__wrapper--list">
            <li v-for="(item, index, key) in items" :key="key" @click="openItem(item.id)" class="card">
                <div class="card__visual">
                    <img src="@/assets/icons/status-sold.svg" v-if="item.is_sold_out" class="card__visual__status">
                    <img :src="item.image" :alt="item.name" class="card__visual__img">
                </div>
                <div class="card__content">
                    <p class="card__content__ttl">{{item.name}}</p>
                    <div class="cardDetails">
                        <p class="cardDetails__price">{{priceWithCommas(item.price)}}</p>
                        <div v-if="item.like_count > 0" class="cardDetails__likes">
                            <IconLike />{{item.like_count}}</div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="buttonCTA">
            <p class="buttonCTA__txt">出品</p>
            <img src="@/assets/icons/icon-camera.jpg" alt="出品" class="buttonCTA__icon">
        </div>
    </div>
</div>
</template>

<script>
import mixins from '@/mixins/';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import IconLike from '@/components/icons/Like';

export default {
    name: 'Home',
    components: {
        Header,
        Categories,
        IconLike,
    },
    computed: {
        items () {
            return this.$store.getters.selectedItemsByCat;
        },
    },
    mixins: [mixins],
    methods: {
        openItem (itemID) {
            const selectedCatID = this.$store.getters.selectedCategoryID;

            this.$router.push({
                name: 'Item',
                params: {
                    catID: selectedCatID,
                    itemID: itemID,
                }
            });
        },
    },
}
</script>

<style lang="scss">
@import '~@/styles/setup/variables';

.card {
    display: flex;
    position: relative;
    width: calc(50% - 10px);
    min-width: 0;
    overflow: hidden;
    flex-direction: column;
    margin: 5px;
    border-radius: 2px;
    background-color: #fff;
    background-clip: border-box;
    word-wrap: break-word;
    cursor: pointer;

    &__visual {
        position: relative;
        width: 100%;

        &__status {
            position: absolute;
            top: 0;
            left: 0;
            width: 40%;
        }

        &__img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: auto;
        }
    }

    &__content {
        flex: 1 1 auto;
        padding: 10px;

        &__ttl {
            overflow: hidden;
            margin-bottom: 6px;
            text-overflow: ellipsis;
            color: $text-secondary;
            white-space: nowrap;
        }
    }
}

.cardDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__price {
        font-weight: bold;
    }

    &__likes {
        display: flex;
        align-items: center;

        svg {
            width: 18px;
            margin-right: 5px;
        }
    }
}

.buttonCTA {
    display: flex;
    position: fixed;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    border-radius: 50% 50% 0 50%;
    color: #fff;
    background: $accent;
    font-weight: bold;
    text-align: center;
    transform: translate(15px, 15px);

    &__txt {
        margin-bottom: 5px;
    }
}
</style>