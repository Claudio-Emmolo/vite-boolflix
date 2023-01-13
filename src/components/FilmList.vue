<script>
import { store } from '../store.js';
import SingleFilmInfo from './SingleFilmInfo.vue';


export default {
    name: 'FilmList',
    components: { SingleFilmInfo },

    data() {
        return {
            store
        };
    },
}
</script>

<template>
    <ul>
        <li v-for="singleMovie in store.filmList">
            <!-- Import structure single film -->
            <SingleFilmInfo :singleFilm="singleMovie" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>