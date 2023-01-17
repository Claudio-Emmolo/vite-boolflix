<script>
import { store } from '../store.js';

import FilmList from './FilmList.vue';
import PopularFilm from './PopularFilm.vue';



export default {
    name: 'AppMain',
    components: {
        FilmList,
        PopularFilm
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
        <!-- Generate Film List -->
        <FilmList v-if="store.filmList.length > 0 && store.userSearch != ''" />
        <!-- Show Popular Film -->
        <PopularFilm v-else-if="store.filmList.length == 0 && store.userSearch == ''" />
        <!-- Film not find -->
        <span v-else-if="store.filmList.length == 0 && store.userSearch != ''">Nessun Film trovato</span>
    </main>
</template>

<style lang="scss" scoped>
span {
    color: white;
}
</style>