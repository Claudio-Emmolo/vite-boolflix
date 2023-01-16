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
    <div class="inside-card position-relative">
        <img class="m-auto" :src="posterUrl + singleFilm.poster_path" :alt="singleFilm.title + ' poster'"
            onerror="this.style.display='none'">
        <!-- Card Info (back card) -->
        <FilmCardInfo :singleFilm="singleFilm" class="back-card position-absolute top-0 w-100 h-100 p-4" />
    </div>



</template>

<style lang="scss" scoped>
div.inside-card {
    width: 342px;
    height: 513px;
    background-color: red;

    &:hover .back-card {
        display: block;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .back-card {
        background-color: black;
        color: white;
        display: none;
    }


}
</style>