<template>
    <section class="section section-library">

        <div class="section-head container">
            <h1>COBETEQUE</h1>
        </div>

        <div class="section-body container">
            <div v-if="PopularMovies.length" class="row">
                <div v-for="(movie, index) in PopularMovies" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <a @click="getDetails(movie.id) "class="section-library--item" :id="movie.id">

                        <div class="section-library--item---img">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w300' + movie.poster_path">
                        </div>

                        <div class="section-library--item---title">
                            {{ movie.title }} <span class="date">({{(movie.release_date).substring(0,4) }})</span>
                        </div>

                        <div class="section-library--item---rating">
                            {{ movie.vote_average }}
                        </div>
                    </a>
                </div>
            </div>

            <div class="text-center">
                <button @click="loadMore" class="section-library--loadmore btn">
                    <span>show more</span>
                    <span>movies <3</span>
                </button>
            </div>

            <div class="section-library--rulette">

            </div>
        </div>
    </section>
</template>

<script>
    import {animations} from '../main-animations';
    import {pageTransitions} from '../main-animations';
    import axios from 'axios';

    export default {
        name: 'PopularMovies',
        data() {
            return {
                PopularMovies: [],
                page: 1
            }
        },

        methods: {
            getDetails: function (id) {
                setTimeout(() => this.$router.push('/details/' + id), 500);
                pageTransitions();
            },

            loadMore: function(){
                this.page++;
                this.getMovies();
            },

            getMovies: function(){
                let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
                let page = this.page;
                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)
                    .then(response => (this.PopularMovies.push(...response.data.results)))
                    .catch(error => {
                        console.log(error)
                    });
            }
        },
        mounted() {
            this.getMovies();
            animations();
        },
    }
</script>