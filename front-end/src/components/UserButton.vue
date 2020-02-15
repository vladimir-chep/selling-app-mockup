<template>
<div class="userControl">
    <button class="userControl__btn">
        <component :is="icon"></component>
        <span>{{text}}</span>
    </button>
    <p v-if="count > 0" class="userControl__count">{{count}}</p>
</div>
</template>

<script>
import Like from '@/components/icons/Like';
import Comment from '@/components/icons/Comment';

export default {
    name: 'UserControl',
    components: {
        Like,
        Comment,
    },
    props: {
        'role': String,
        'count': Number,
    },
    computed: {
        icon() {
            return this.role.toLowerCase();
        },
        text() {
            switch (this.role) {
                case 'like':
                    return 'いいね';
                    break;
                case 'comment':
                    return 'コメント';
                    break;
                default:
                    return '';
                    break;
            }
        },
    },
}
</script>

<style lang="scss">
@import '~@/styles/setup/variables';

.userControl {
    display: flex;
    align-items: center;
    font-size: .9rem;

    &:first-child {
        margin-right: 12px;
    }

    &__btn {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        border: none;
        border-radius: 25px;
        color: #666;
        background: $ligth;
        outline: none;

        appearance: none;

        span {
            margin-left: 4px;
        }
    }

    &__count {
        margin-left: 4px;
        font-weight: bold;
    }
}
</style>