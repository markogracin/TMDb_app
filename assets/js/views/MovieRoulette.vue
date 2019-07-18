<template>
    <section class="section section-roulette">

        <div class="section-head container">
            <h1 v-if="randomMovie">{{ randomMovie.title }}</h1>
            <h1 v-else>MOVIE ROULETTE</h1>
        </div>

        <div class="section-body container">
            <div class="row">
                <div class="col-lg-4">
                    <div v-if="randomMovie" class="section-roulette--poster">
                        <div class="img">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w500' + randomMovie.poster_path">
                        </div>
                    </div>
                    <div v-else class="section-roulette--placeholder">
                        please select a genre and roll!
                    </div>
                </div>

                <div class="col-lg-8">
                    <div class="section-roulette--items d-flex flex-wrap">
                        <div v-for="genre in genres">
                            <input type="radio"
                                   v-bind:id="genre.name"
                                   v-bind:value="genre.id"
                                   v-model="radioSelected"
                                   @click="genreSelected">
                            <label v-bind:for="genre.name">{{ genre.name }}</label>
                        </div>
                    </div>

                    <a v-bind:class="{disabled:btnDisabled}" @click="fireRandom"
                       class="section-roulette--button btn">
                        <span>roll the dice..</span>
                        <span>..popcorn?</span>
                    </a>

                    <div v-if="randomMovie" class="section-roulette--details">
                        <table>
                            <tr>
                                <td>Title:</td>
                                <td>{{ randomMovie.title }}</td>
                            </tr>
                            <tr>
                                <td>Rating:</td>
                                <td>
                                    <span>{{ randomMovie.vote_average }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Release date:</td>
                                <td>{{ randomMovie.release_date }}</td>
                            </tr>
                            <tr>
                                <td>Language:</td>
                                <td class="text-uppercase">{{ randomMovie.original_language }}</td>
                            </tr>
                            <tr>
                                <td>Popularity:</td>
                                <td>{{ randomMovie.popularity }}</td>
                            </tr>
                            <tr>
                                <td>Overview:</td>
                                <td>{{ randomMovie.overview }}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <a @click="goHome()" class="section-roulette--back btn">
                    <span>back</span>
                    <span><3</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import {animations} from '../main-animations';
    import {pageTransitions} from '../main-animations';
    import axios from 'axios';

    export default {
        name: 'MovieRoulette',
        data() {
            return {
                btnDisabled: true,
                genres: [],
                radioSelected: '',
                randomPage: '',
                randomMovie: ''
            }
        },

        methods: {
            genreSelected: function () {
                this.btnDisabled = false;
            },

            fireRandom: async function () {
                let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
                let genre = this.radioSelected;
                let page = this.randomPage;

                await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=1&with_genres=${genre}`)
                    .then(response => (this.randomPage = Math.floor(Math.random() * (response.data.total_pages)) + 1))
                    .catch(error => {
                        console.log(error)
                    });

                if (this.totalPages > 1000) {
                    this.totalPages = 1000;
                }

                await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&with_genres=${genre}`)
                    .then(response => (this.randomMovie = response.data.results[Math.floor(Math.random() * 20) + 1]))
                    .catch(error => {
                        console.log(error);
                    });
            },

            goHome: function () {
                setTimeout(() => this.$router.push('/'), 500);
                pageTransitions();
                this.btnDisabled = true;
            }
        },

        mounted() {
            // Prepare genres list
            let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
                .then(response => (this.genres.push(...response.data.genres)))
                .catch(error => {
                    console.log(error)
                });

            // Animations
            animations();
        },
    }
</script>