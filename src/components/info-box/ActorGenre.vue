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
            store.clickedIdFilm = "";
            store.openMoreInfoBox = false;
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
                    console.log(response.data.cast);
                    this.actorList.push(...response.data.cast);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log("array:" + this.actorList);
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
    <section id="actor-box" class="d-flex justify-content-center bg-danger position-relative">
        <button @click="closeInfo()" class="position-absolute top-0 end-0 m-4">X</button>
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
    </section>
</template>

<style lang="scss">
section#actor-box {
    z-index: 2;
    color: white;
}
</style>