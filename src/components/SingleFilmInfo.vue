<script>

export default {
    name: 'SingleFilmInfo',
    props: ['singleFilm'],
    data() {
        return {
            posterUrl: 'https://image.tmdb.org/t/p/w342'
        }
    }
}
</script>

<template>
    <div class="poster">
        <img :src="posterUrl + singleFilm.poster_path" :alt="singleFilm.title + ' poster'">
    </div>

    <h3>Titolo: {{ singleFilm.title || singleFilm.name }} </h3>
    <h4>Titolo originale: {{ singleFilm.original_title || singleFilm.original_name }}</h4>
    <img :src="`https://crowdin.com/images/flags/${singleFilm.original_language}.png`"
        :alt="singleFilm.original_language + ' flag'" onerror="this.style.display='none'">
    <br>
    <span>Voto: {{ singleFilm.vote_average }}</span>

</template>

<style lang="scss" scoped>

</style>