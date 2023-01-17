<script >
import { store } from './store.js';
import axios from 'axios';



import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import ActorGenre from './components/info-box/ActorGenre.vue'


export default {

  name: 'App',
  components: { AppHeader, AppMain, ActorGenre },

  data() {
    return {
      store,
      apiKey: '16eea8fe6e93b980795f69e2abba8997',
      languageApi: 'it-IT',
      apiUrlFilm: 'https://api.themoviedb.org/3/search/movie?',
      apiUrlTv: 'https://api.themoviedb.org/3/search/tv?'

    }
  },

  methods: {

    //Generate Film Array
    getFilmApi(userQuery) {
      store.filmList = []
      // For Movies
      axios.get(this.apiUrlFilm, {
        params: {
          api_key: this.apiKey,
          language: this.languageApi,
          query: userQuery //for research
        }
      })
        .then(function (response) {
          store.filmList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })

      // For Series Tv
      axios.get(this.apiUrlTv, {
        params: {
          api_key: this.apiKey,
          language: this.languageApi,
          query: userQuery //for research
        }
      })
        .then(function (response) {
          store.filmList.push(...response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        })
    },


  },
}
</script>

<template>
  <!-- Import Info Box -->
  <ActorGenre v-if="store.openMoreInfoBox" class="position-fixed w-100 top-0" />

  <!-- Import Header -->
  <AppHeader @sendResearch="getFilmApi" />
  <!-- Import Main -->
  <AppMain />

</template>

<style  lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
