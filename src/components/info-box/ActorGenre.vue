<script>
import { store } from '../../store.js';

import axios from 'axios';

import InfoGenre from './InfoGenre.vue'


export default {
    name: "ActorGenre",
    components: { InfoGenre },
    data() {
        return {
            store,
            apiKey: "16eea8fe6e93b980795f69e2abba8997",
            languageApi: "it-IT",
            actorList: []
        };
    },
    methods: {
        closeInfo() {
            store.filmGenre = []
            store.clickedIdFilm = "";
            store.openMoreInfoBox = false;
            store.backdropClicked = ''
        },
        getActorList(typeFilm, filmId) {
            const queryID = `http://api.themoviedb.org/3/${typeFilm}/${filmId}/credits?`;
            axios.get(queryID, {
                params: {
                    api_key: this.apiKey,
                    language: this.languageApi,
                }
            })
                .then((response) => {
                    this.actorList.push(...response.data.cast);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    created() {
        this.getActorList("movie", store.clickedIdFilm);
        this.getActorList("tv", store.clickedIdFilm);
    },
    components: { InfoGenre }
}
</script>

<template>
    <section id="actor-box" class="d-flex position-relative">
        <img :src="`https://image.tmdb.org/t/p/w1280/${store.backdropClicked}`" alt="Bg Film"
            class="backdrop-img w-100 h-100 position-absolute">
        <button @click="closeInfo()" class="position-absolute top-0 end-0 m-4">
            <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <div class="black-bg d-flex">

            <div class="box-container m-auto d-flex">

                <div class="actor">
                    <h3>Attori:</h3>
                    <ul v-if="actorList.length > 0">
                        <li v-for="index in 5">
                            {{ actorList[index - 1].name }}
                        </li>
                    </ul>
                </div>

                <div class="genre">

                    <h3>Generi:</h3>

                    <InfoGenre />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../../styles/partials/variables' as *;

section#actor-box {
    z-index: 2;
    color: white;
    background-color: $header-bg;
    width: 100%;
    height: 100vh;
}

img.backdrop-img {
    filter: blur(15px);
    transform: scale(120%);
}

div.black-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.418);
    z-index: 5;
}

button {
    background-color: transparent;
    border: 0;
    z-index: 6;

    i {

        color: red;
        font-size: 3rem;
    }
}

div.genre,
div.actor {
    h3 {
        text-align: center;
        text-transform: uppercase;
        color: $title-red;
    }

    margin: 0 5rem;
    padding: 1rem;

    ul {
        padding: 0;

        li {
            list-style: none;
        }
    }
}
</style>