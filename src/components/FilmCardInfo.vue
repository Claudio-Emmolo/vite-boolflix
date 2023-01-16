<script>
import FlagLang from './FlagLang.vue';

export default {
    name: 'FilmCardInfo',
    props: ['singleFilm'],
    components: {
        FlagLang
    }

}
</script>

<template lang="">
    <div class="film-info">

        <h3> <span class="fw-bold">Titolo:</span> {{ singleFilm.title || singleFilm.name }} </h3>
        <h4><span class="fw-bold">Titolo originale: </span> {{ singleFilm.original_title || singleFilm.original_name }}</h4>
        <br>

        <!-- <img :src="`https://crowdin.com/images/flags/${singleFilm.original_language}.png`"
        :alt="singleFilm.original_language + ' flag'" onerror="this.style.display='none'"> -->
        <FlagLang :langCode="singleFilm.original_language"/>

        <br>
        <div class="star-rate">
            <span class="fw-bold">Voto: </span>
            <font-awesome-icon icon="star" class="vote" v-for="n in Math.ceil(singleFilm.vote_average / 2)" />
            <font-awesome-icon icon="star" v-for="n in (5 - Math.ceil(singleFilm.vote_average / 2))" />
        </div>

        <br>
        <div class="overview-text" v-show="singleFilm.overview != '' ">

            <p>
                <span class="fw-bold"> Overview: </span>
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
            height: 50%;
            overflow-y: auto;
            font-size: .8rem;
        }
    }
}

div.star-rate {
    font-size: 1.5rem;
    margin-bottom: .5rem;

    span {
        font-size: 1rem;
    }

    .vote {
        color: orange;
    }
}
</style>