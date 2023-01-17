<script>
import { store } from '../store.js';
import axios from 'axios';

import SingleFilmInfo from './card-components/SingleFilmInfo.vue';


export default {
    name: 'PopularFilm',
    components: {
        SingleFilmInfo
    },
    data() {
        return {
            store,
            apiPopularFilm: 'https://api.themoviedb.org/3/movie/popular',
            apiKey: '16eea8fe6e93b980795f69e2abba8997',
            languageApi: 'it-IT'
        }
    },
    methods: {
        //Generate popular Film
        getPopularFilm() {
            axios.get(this.apiPopularFilm, {
                params: {
                    api_key: this.apiKey,
                    language: this.languageApi,
                }
            })
                .then(function (response) {
                    console.log(response.data.results);
                    store.popularMovie = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created() {
        this.getPopularFilm()
    },
}
</script>

<template>
    <section id="popular-film">
        <h2>Film Popolari</h2>
        <div class="container-fluid">
            <div class="row">
                <article class="col-3 d-flex justify-content-center my-5" v-for="singleMovie in store.popularMovie">
                    <SingleFilmInfo :singleFilm="singleMovie" />
                </article>
            </div>
        </div>
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