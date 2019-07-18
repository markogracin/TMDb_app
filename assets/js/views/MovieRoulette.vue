<template>
    <section class="section section-roulette">

        <div class="section-head container">
            <h1>ROULETTE</h1>
        </div>

        <div class="section-body container">
            <a @click="goHome()" class="section-roulette--back">
                <span>back</span>
                <span><3</span>
            </a>

            <div class="section-roulette--categories">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-roulette--categories---items d-flex flex-wrap">
                            <div v-for="genre in genres">
                                <input type="radio"
                                       v-bind:id="genre.name"
                                       v-bind:value="genre.id"
                                       v-model="radioSelected"
                                       @click="rollGenre">
                                <label v-bind:for="genre.name">{{ genre.name }}</label>
                            </div>
                            </div>

                        <!--Show button if genre selected-->
                        <div v-if="radioSelected">
                            <div @click="rollFinal" class="section-roulette--categories---button btn">
                                <span>roll the dice</span>
                                <span>popcorn ready?</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        {{ getTotalPages }}
                    </div>
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
        name: 'MovieRoulette',
        data() {
            return {
                genres: [],
                radioSelected: '',
                getTotalPages: '',
                getRandomPage: '',
                getFinalOutput: '',
            }
        },

        methods: {
            // Get selected genre MAX page number
            rollGenre: function () {
                let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
                let genre = this.radioSelected;

                // Get max page number
                axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=1&with_genres=${genre}`)
                    .then(response => (this.getTotalPages = response.data.total_pages))
                    .catch(error => {
                        console.log(error)
                    });

            },
            rollFinal: function() {
                let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
                let genre = this.radioSelected;
                let page = this.getTotalPages;

                // Get max page number
                axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&with_genres=${genre}`)
                    .then(response => (this.getFinalOutput = response.data))
                    .catch(error => {
                        console.log(error)
                    });
            }
        },
        mounted() {
            // Get genre list
            let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
                .then(response => (this.genres.push(...response.data.genres)))
                .catch(error => {
                    console.log(error)
                });

            animations();
        },
    }
</script>