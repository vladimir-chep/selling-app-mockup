<template>
<div class="loading">
    <div class="loading__spinner">
        <div class="loading__spinner__dot"></div>
        <div class="loading__spinner__dot"></div>
        <div class="loading__spinner__dot"></div>
    </div>
</div>
</template>

<style lang="scss">
@import '~@/styles/setup/variables';

.loading {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: $ligth;

    &__spinner {
        width: calc(30px * 3);
        height: 15px;

        &__dot {
            float: left;
            width: 15px;
            height: 15px;
            margin: 0 calc(15px / 2);
            border: calc(15px / 5) solid $accent;
            border-radius: 50%;
            transform: scale(0);
            animation: spinner-animation 1000ms ease infinite 0ms;

            @for $i from 1 through 3 {
                &:nth-child(#{$i}) {
                    animation-delay: calc(300ms * #{$i});
                }
            }
        }
    }
}

@keyframes spinner-animation {
    50% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
    }
}
</style>