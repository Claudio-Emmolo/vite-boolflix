<script>

export default {
    name: 'SingleFilmInfo',
    props: ['singleFilm'],
    data() {
        return {

        }
    }
}
</script>

<template>

    <h3>Titolo: {{ singleFilm.title || singleFilm.name }} </h3>
    <h4>Titolo originale: {{ singleFilm.original_title || singleFilm.original_name }}</h4>
    <img :src="`https://crowdin.com/images/flags/${singleFilm.original_language}.png`"
        :alt="singleFilm.original_language + ' flag'" onerror="this.style.display='none'">
    <br>
    <span>Voto: {{ singleFilm.vote_average }}</span>

</template>

<style lang="scss" scoped>

</style>