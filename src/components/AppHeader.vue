<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            userSearch: '',
        }
    },
    methods: {
        emitSearch(value, textSearch) {
            this.$emit(value, textSearch)
        }
    },
}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="main-logo">Boolflix</h1>
        <div class="searchbar">
            <input @keyup.enter="emitSearch('sendResearch', userSearch)" type="text" placeholder="Cerca Film"
                v-model="userSearch">
            <button @click="emitSearch('sendResearch', userSearch)">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

header {
    background-color: $header-bg;

    h1 {
        color: $title-red;
        text-transform: uppercase;
    }
}
</style>