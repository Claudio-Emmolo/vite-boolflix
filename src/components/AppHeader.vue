<script>
import { store } from '../store';


export default {
    name: 'AppHeader',
    data() {
        return {
            store,
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
    <ActorGenre />
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="main-logo">Boolflix</h1>
        <div class="searchbar">
            <input @keyup="emitSearch('sendResearch', store.userSearch)" type="text" placeholder="Cerca Film"
                v-model="store.userSearch">
            <button @click="emitSearch('sendResearch', store.userSearch)">
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

    input,
    button {
        padding: .5rem;
        color: white;
        background-color: $body-bg;
        border: 0;

        i.fa-magnifying-glass {
            color: white;
            padding: 0;
            font-size: 1rem;
        }

        &:focus {
            outline: 0;
        }
    }

}
</style>