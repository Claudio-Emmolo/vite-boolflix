<script>
import SingleFilmInfo from './SingleFilmInfo.vue'


export default {
    name: 'PopularFilm',
    components: {
        SingleFilmInfo
    }
}
</script>

<template>
    <section id="popular-film">
        <h2>Film Popolari</h2>

    </section>
</template>

<style lang="scss">
section#popular-film {
    padding: 2rem;

    h2 {
        font-size: 3rem;
        color: white;
    }
}
</style>