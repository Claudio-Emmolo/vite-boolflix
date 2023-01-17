import { reactive } from 'vue';

export const store = reactive({
    filmList: [], //Array Movies/Tv
    userSearch: '',
    filmGenre: [],
    popularMovie: [], //Array popular Movies
    openMoreInfoBox: false,
    clickedIdFilm: '',
    backdropClicked: ''

});