<script>

export default {
    name: 'SingleFilmInfo',
    props: ['singleFilm'],
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

    <h3>Titolo: {{ singleFilm.title || singleFilm.name }} </h3>
    <h4>Titolo originale: {{ singleFilm.original_title || singleFilm.original_name }}</h4>
    <img :src="`https://crowdin.com/images/flags/${singleFilm.original_language}.png`"
        :alt="singleFilm.original_language + ' flag'" onerror="this.style.display='none'">
    <br>
    <!-- <span>Voto: {{ Math.ceil(singleFilm.vote_average / 2) }}</span> -->
    <div class="star-rate">
        <span class="vote" v-for="n in Math.ceil(singleFilm.vote_average / 2)">*</span>
        <span v-for="n in (5 - Math.ceil(singleFilm.vote_average / 2))">*</span>
    </div>

</template>

<style lang="scss" scoped>
div.star-rate {
    font-size: 4rem;

    .vote {
        color: orange;
    }
}
</style>