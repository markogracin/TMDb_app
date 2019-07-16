import Vue from 'vue';
import Router from './routes/index';

/** Components */
import Hero from './components/Hero';
import PopularMovies from './components/PopularMovies';
import MovieDetail from './components/MovieDetails';

/** Run app */
new Vue({
    el: '#app',
    components: {
        'Hero': Hero,
        'PopularMovies': PopularMovies,
        'MovieDetail': MovieDetail
    },
});