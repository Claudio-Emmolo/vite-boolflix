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
    background-image: url(../../assets/img/img-not-avaible.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;


    &:hover {
        img {
            transition: all .3s;
            transform: scale(1.2);
            filter: blur(10px)
        }

    }

    &:hover .back-card {
        transition: all .5s;
        opacity: 1;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .back-card {
        background-color: rgba(0, 0, 0, 0.548);
        color: white;
        opacity: 0;
    }


}
</style>