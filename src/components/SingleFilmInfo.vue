<script>
import FilmCardInfo from './FilmCardInfo.vue';

export default {
    name: 'SingleFilmInfo',
    props: ['singleFilm'],
    components: {
        FilmCardInfo
    },
    data() {
        return {
            posterUrl: 'https://image.tmdb.org/t/p/w342',
        }
    }
}


</script>

<template>
    <div class="poster">
        <img :src="posterUrl + singleFilm.poster_path" :alt="singleFilm.title + ' poster'"
            onerror="this.style.display='none'">
    </div>

    <FilmCardInfo :singleFilm="singleFilm" />



</template>

<style lang="scss" scoped>

</style>