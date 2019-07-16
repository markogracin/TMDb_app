<template>
    <section class="section section-library">
        <div class="container">
            <div class="row">
                <div v-for="(movie, index) in PopularMovies" :key="index" class="col-lg-3 col-md-4 col-sm-6">
                    <a @click="getDetails(movie.id)" class="section-library--item">

                        <div class="section-library--item---img">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w300' + movie.poster_path">
                        </div>

                        <div class="section-library--item---title">
                            {{ movie.title }}
                        </div>

                        <div class="section-library--item---rating">
                            {{ movie.vote_average }}
                        </div>

                        <div class="section-library--item---lang">
                        </div>

                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'PopularMovies',
        data() {
            return {
                PopularMovies: [],
            }
        },

        mounted() {
            this.getMovies();
        },

        methods: {
            getMovies: function () {
                let baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=';
                let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
                let page = 1;
                axios.get(baseUrl + apiKey + '&page=' + page + '')
                    .then(response => (this.PopularMovies = response.data.results))
                    .catch(error => {
                        console.log(error)
                    })
            },
            getDetails: function (id) {
                this.$router.push('/detail/' + id);

            }
        },
    }
</script>