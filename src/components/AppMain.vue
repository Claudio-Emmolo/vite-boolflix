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
        <!-- Show Popular Film -->
        <PopularFilm v-if="store.filmList.length == 0" />
        <!-- Generate Film List -->
        <FilmList v-else />
    </main>
</template>

<style lang="scss" scoped>

</style>