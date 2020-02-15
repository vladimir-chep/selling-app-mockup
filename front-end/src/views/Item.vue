<template>
<div>
    <Header page="item" :itemName="details.name" />
    <div class="content">
        <div class="content__wrapper">
            <Carousel :nav="false" :items="1" :autoplay="false" class="carousel">
                <template slot="prev"><span class="carousel__nav carousel__nav--prev"></span></template>
                <img :src="details.image" :alt="details.name">
                <img :src="details.image" :alt="details.name">
                <template slot="next"><span class="carousel__nav carousel__nav--next"></span></template>
            </Carousel>
            <div class="itemInfo">
                <p class="itemInfo__name">{{details.name}}</p>
                <div class="itemInfo__control">
                    <div class="itemInfo__control__btns">
                        <UserButton role="like" :count="details.like_count" />
                        <UserButton role="comment" :count="details.comment_count" />
                    </div>
                    <button class="itemInfo__control__flag"></button>
                </div>
            </div>
            <div class="desc">
                <p class="desc__ttl">商品の説明</p>
                <p class="desc__txt">{{details.description}}</p>
            </div>
        </div>
    </div>
    <div class="popup">
        <div class="popup__price">
            <p class="popup__price__txt">{{priceWithCommas(details.price)}}<span>{{details.shipping_fee}}</span></p>
        </div>
        <button class="popup__cta">購入手続きへ</button>
    </div>
</div>
</template>

<script>
import mixins from '@/mixins/';
import Carousel from 'vue-owl-carousel';
import Header from '@/components/Header';
import UserButton from '@/components/UserButton';

export default {
    name: 'Item',
    props: ['catID', 'itemID'],
    components: {
        Header,
        Carousel,
        UserButton,
    },
    computed: {
        details () {
            return this.$store.getters.selectedItem;
        },
    },
    mixins: [mixins],
}
</script>

<style lang="scss">
@import '~@/styles/setup/variables';

.itemDisplay {
    max-width: 768px;
    margin: auto;
    padding-bottom: 100px;
}

.owl-dots {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
}

.carousel {
    position: relative;

    &__nav {
        position: absolute;
        top: 50%;
        z-index: 100;
        padding: 8px;
        transform: translateY(-50%);

        &:before {
            display: inline-block;
            width: 24px;
            height: 24px;
            border-width: 0 0 4px 4px;
            border-color: #fff;
            border-style: solid;
            content: '';
        }

        &--prev {
            left: 14px;

            &:before {
                transform: rotate(45deg);
            }
        }

        &--next {
            right: 14px;

            &:before {
                transform: rotate(225deg);
            }
        }
    }
}

.itemInfo {
    margin-bottom: 10px;
    padding: 0 14px;

    &__name {
        margin: 6px 0 14px;
        font-size: 1.2rem;
    }

    &__control {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        &__btns {
            display: flex;
            margin: 10px 0;
        }

        &__flag {
            width: 42px;
            height: 42px;
            margin: 10px 0 10px auto;
            border-radius: 50%;
            background: #eee url(~@/assets/icons/flag.jpg) no-repeat center center;
        }
    }
}

.desc {
    &__ttl {
        margin-bottom: 6px;
        padding: 14px 14px 6px;
        color: #777;
        background: #efefef;
    }

    &__txt {
        padding: 0 14px;
    }
}

.popup {
    display: flex;
    justify-content: space-between;
    padding: 4px;
    color: #fff;
    background: #35231f;

    &__price {
        margin: auto 0;
        padding-left: 10px;

        &__txt {
            display: flex;
            align-items: baseline;
            font-weight: bold;
            font-size: 1.6rem;
        }

        span {
            margin-left: 4px;
            font-weight: normal;
            font-size: .8rem;
        }
    }

    &__cta {
        display: flex;
        align-items: center;
        padding: 14px;
        color: #fff;
        background: $accent;
    }
}
</style>
