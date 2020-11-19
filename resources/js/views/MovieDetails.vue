<template>
    <section class="section section-details">

        <div class="section-head container">
            <h1>{{ movieDetails.title }}</h1>
        </div>

        <div class="section-body container">
            <div class="row">
                <div class="col-lg-4">
                    <a @click="goHome()" class="section-details--back btn">
                        <span>back</span>
                        <span><3</span>
                    </a>

                    <div class="section-details--img">
                        <img v-bind:src="'http://image.tmdb.org/t/p/w500' + movieDetails.poster_path">
                    </div>
                </div>
                <div class="col-lg-8">
                    <table>
                        <tr>
                            <td>Title:</td>
                            <td>{{ movieDetails.title }}</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td>
                                <span>{{ movieDetails.vote_average }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Release date:</td>
                            <td>{{ movieDetails.release_date }}</td>
                        </tr>
                        <tr>
                            <td>Genres:</td>
                            <td>
                                <span class="list" v-for="genre in movieDetails.genres">{{ genre.name }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Language:</td>
                            <td class="text-uppercase">{{ movieDetails.original_language }}</td>
                        </tr>
                        <tr>
                            <td>Popularity:</td>
                            <td>{{ movieDetails.popularity }}</td>
                        </tr>
                        <tr>
                            <td>Production companies:</td>
                            <td>
                                <span class="list" v-for="company in movieDetails.production_companies">{{ company.name }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Overview:</td>
                            <td>{{ movieDetails.overview }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {animations} from '../main-animations';
    import {pageTransitions} from '../main-animations';
    import axios from 'axios';

    export default {
        name: 'MovieDetail',
        props: ['id', 'genre'],
        data() {
            return {
                movieDetails: [],
            }
        },
        created() {
            window.scrollTo(0, 0);
        },

        mounted() {
            let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
            let movieId = this.id;

            // Get details
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
                .then(response => (this.movieDetails = response.data))
                .catch(error => {
                    console.log(error)
                });

            // Load animations
            animations();
        },

        methods: {
            goHome: function () {
                setTimeout(() => this.$router.push('/'), 500);
                pageTransitions();
            }
        }
    }
</script>