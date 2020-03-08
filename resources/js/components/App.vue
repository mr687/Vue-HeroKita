<template>
    <div>
        <indicator-view></indicator-view>
        <header-view></header-view>
        <router-view></router-view>
        <footer-view></footer-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="scss">
    *{
        scrollbar-width: none;
    }
</style>

