<script>
import axios from 'axios';
import { store } from '../../store.js';


export default {
    name: 'InfoGenre',
    data() {
        return {
            store,
            apiKey: "16eea8fe6e93b980795f69e2abba8997",
            languageApi: "it-IT",
            AllGenre: [],
        }
    },

    methods: {

        getGenreInfo(type) {
            const apiGenreSrc = `https://api.themoviedb.org/3/genre/${type}/list`
            axios.get(apiGenreSrc, {
                params: {
                    api_key: this.apiKey,
                    language: this.languageApi,
                }
            })
                .then((response) => {
                    this.AllGenre.push(...response.data.genres);
                    console.log('quest ' + this.AllGenre);
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
    },

    created() {
        this.getGenreInfo('movie');
        this.getGenreInfo('tv');
    },
}
</script>

<template>
    <ul>
        <li v-for="genere in AllGenre">
            <div v-if="store.filmGenre.includes(genere.id)">
                {{ genere.name }}
            </div>
            <div v-else>

            </div>
        </li>
    </ul>
</template>

<style lang="scss">

</style>