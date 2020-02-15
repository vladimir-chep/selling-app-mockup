<template>
<div class="error">
    <p>Not Found</p>
    <router-link to="/" tag="a" class="goToHome">Go to Top</router-link>
</div>
</template>

<style lang="scss">
.error {
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #607D8B;
}

.goToHome {
    margin-top: 20px;
}
</style>
