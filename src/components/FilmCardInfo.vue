<script>
export default {
    name: 'FilmCardInfo',
    props: ['singleFilm'],

}
</script>

<template lang="">
    <div class="film-info">

        <h3>Titolo: {{ singleFilm.title || singleFilm.name }} </h3>
        <h4>Titolo originale: {{ singleFilm.original_title || singleFilm.original_name }}</h4>
        <img :src="`https://crowdin.com/images/flags/${singleFilm.original_language}.png`"
        :alt="singleFilm.original_language + ' flag'" onerror="this.style.display='none'">
        <br>
        <div class="star-rate">
            <span>Voto: </span>
            <font-awesome-icon icon="star" class="vote" v-for="n in Math.ceil(singleFilm.vote_average / 2)" />
            <font-awesome-icon icon="star" v-for="n in (5 - Math.ceil(singleFilm.vote_average / 2))" />
        </div>
        <div class="overview-text">

            <p>
                Overview:
                {{singleFilm.overview}}
            </p>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
div.film-info {
    overflow: hidden;

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1rem;
    }

    img {
        width: 40px;
    }

    div.overview-text {
        width: 100%;
        height: 100%;

        p {
            overflow-y: auto;
            font-size: .8rem;
        }
    }
}

div.star-rate {
    font-size: 1.5rem;
    margin-bottom: .5rem;

    .vote {
        color: orange;
    }
}
</style>