<template>
<spinner v-if="isLoading" />
<router-view v-else id="app" class="app" />
</template>

<script>
import Spinner from '@/components/LoadingSpinner';

export default {
    name: 'App',
    components: {
        Spinner,
    },
    computed: {
        isLoading () {
            return this.$store.getters.loading;
        }
    },
}
</script>

<style lang="scss">
.app {
    display: flex;
    height: 100vh;
    flex-direction: column;
}
</style>
