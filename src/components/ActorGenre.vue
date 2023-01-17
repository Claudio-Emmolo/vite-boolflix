<script>
import axios from 'axios';


export default {
    name: 'ActorGenre',
    data() {
        return {
            apiKey: '16eea8fe6e93b980795f69e2abba8997',
            languageApi: 'it-IT',
            actorList: ''

        }
    },

    methods: {

        getActorList(filmId) {
            const queryID = `http://api.themoviedb.org/3/tv/${filmId}/credits?`

            axios.get(queryID, {
                params: {
                    api_key: this.apiKey,
                    language: this.languageApi,
                }
            })
                .then((response) => {
                    console.log(response.data.cast)
                    this.actorList = response.data.cast;
                })
                .catch(function (error) {
                    console.log(error);
                })
            console.log('array:' + this.actorList)
        },
    },
    created() {
        this.getActorList(119051)
    },
}
</script>

<template>
    <section id="actor-box">
        <h2>Actor</h2>
        <ul v-if="actorList.length > 0">
            <li v-for="index in 5">
                {{ actorList[index].name }}
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
section#actor-box {
    color: white;
}
</style>