<script >
import { store } from './store.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default {
  name: 'App',
  components: { AppHeader, AppMain },

  data() {
    return {
      store,
      apiUrl: 'https://api.themoviedb.org/3/search/movie?'
    }
  },

  methods: {
    getFilmApi(userQuery) {

      axios.get(this.apiUrl, {
        params: {
          api_key: '16eea8fe6e93b980795f69e2abba8997',
          language: 'it-IT',
          query: userQuery //for research
        }
      })
        .then(function (response) {
          console.log(response.data.results);
          store.filmList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
    },
  },

  created() {
    // this.getFilmApi(this.apiUrl)
  },
}
</script>

<template>
  <!-- Import Header -->
  <AppHeader @sendResearch="getFilmApi" />
  <!-- Import Main -->
  <AppMain />

</template>

<style>

</style>
