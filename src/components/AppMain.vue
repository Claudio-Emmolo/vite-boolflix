<script>
import { store } from '../store.js';

import FilmList from './card-components/FilmList.vue';
import PopularFilm from './PopularFilm.vue';
import ActorGenre from './ActorGenre.vue'



export default {
    name: 'AppMain',
    components: {
        FilmList,
        PopularFilm,
        ActorGenre
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <main>
        <ActorGenre />
        <!-- Generate Film List -->
        <FilmList v-if="store.filmList.length > 0 && store.userSearch != ''" />
        <!-- Show Popular Film -->
        <PopularFilm v-else-if="store.filmList.length == 0 && store.userSearch == ''" />
        <!-- Condition for Film not find -->
        <span v-else-if="store.filmList.length == 0 && store.userSearch != ''">Nessun Film trovato</span>
    </main>
</template>

<style lang="scss" scoped>
span {
    display: block;
    color: white;
    padding: 2rem;
}
</style>