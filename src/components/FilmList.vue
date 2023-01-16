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

    <div class="container-fluid">
        <div class="row">
            <article class="col-3 d-flex justify-content-center my-5" v-for="singleMovie in store.filmList">
                <SingleFilmInfo :singleFilm="singleMovie" />
            </article>
        </div>
    </div>


</template>

<style lang="scss" scoped>

</style>