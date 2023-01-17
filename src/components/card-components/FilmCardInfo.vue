<script>
import { store } from '../../store';

import FlagLang from '../FlagLang.vue';

export default {
    name: 'FilmCardInfo',
    props: ['singleFilm'],
    components: {
        FlagLang
    },
    data() {
        return {
            store
        }
    },
    methods: {
        clickOpenMoreInfo(filmID, filmGenre) {
            store.filmGenre = filmGenre
            store.clickedIdFilm = filmID;
            store.openMoreInfoBox = true;
        }
    },

}
</script>

<template>
    <div class="film-info position-relative">
        <!-- Titles -->
        <h3>
            <span class="fw-bold title">Titolo: </span>
            {{ singleFilm.title ? singleFilm.title : singleFilm.name }}
        </h3>
        <h4 v-show="(singleFilm.title || singleFilm.name) != (singleFilm.original_title || singleFilm.original_name)">
            <span class="fw-bold">Titolo originale: </span> {{
                singleFilm.original_title ? singleFilm.original_title :
                    singleFilm.original_name
            }}
        </h4>
        <br>

        <!-- Flag Languages -->
        <!-- <img :src="`https://crowdin.com/images/flags/${singleFilm.original_language}.png`" 
        :alt="singleFilm.original_language + ' flag'" onerror="this.style.display='none'"> -->
        <FlagLang :langCode="singleFilm.original_language" />

        <br>
        <!-- Creating rating stars -->
        <div class="star-rate">
            <span class="fw-bold">Voto: </span>
            <font-awesome-icon icon="star" class="vote" v-for="n in Math.ceil(singleFilm.vote_average / 2)" />
            <font-awesome-icon icon="star" v-for="n in (5 - Math.ceil(singleFilm.vote_average / 2))" />
        </div>

        <br>
        <!-- Movie/Tv Overview  -->
        <div class="overview-text" v-show="singleFilm.overview != ''">
            <p>
                <span class="fw-bold"> Overview: </span>
                {{ singleFilm.overview }}
            </p>
        </div>

        <!-- Open More Info Box -->
        <button @click="clickOpenMoreInfo(singleFilm.id, singleFilm.genre_ids)"
            class="position-absolute top-0 end-0">OPEN</button>

    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;

div.film-info {
    overflow: hidden;

    h3 {
        font-size: 1.2rem;

        span.title {
            color: $title-red;
        }
    }

    h4 {
        font-size: .8rem;
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