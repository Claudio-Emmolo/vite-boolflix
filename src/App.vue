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
    // to remove
    cechEmit(var1) {
      alert('Done: ' + var1)
    },
    //to remove

    getFilmApi(importUrl) {

      axios.get(this.apiUrl, {
        params: {
          api_key: '16eea8fe6e93b980795f69e2abba8997',
          language: 'it-IT',
          query: 'a' //for research
        }
      })
        .then(function (response) {
          console.log(response.data);
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
  <AppHeader @sendResearch="cechEmit" />
  <!-- Import Main -->
  <AppMain />

</template>

<style>

</style>
