<script>

export default {
    name: 'SingleFilmInfo',
    props: ['singleFilm'],

}
</script>

<template>

    <h3>Titolo: {{ singleFilm.title }} </h3>
    <h4>Titolo originale: {{ singleFilm.original_title }}</h4>
    <span>Lingua:</span>
    <img :src="`https://crowdin.com/images/flags/${singleFilm.original_language}.png`"
        :alt="singleFilm.original_language + ' flag'">
    <br>
    <span>Voto: {{ singleFilm.vote_average }}</span>

</template>

<style lang="scss" scoped>

</style>