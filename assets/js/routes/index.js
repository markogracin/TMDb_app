import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import PopularMovies from '../views/PopularMovies';
import MovieDetails from '../views/MovieDetails';

Vue.use(VueRouter);

export default new VueRouter({
    //mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PopularMovies',
            component: PopularMovies,
        },
        {
            path: '/details/:id',
            name: 'MovieDetails',
            component: MovieDetails,
            props: true
        }
    ],
});