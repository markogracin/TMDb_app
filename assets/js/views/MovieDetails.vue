<template>
    <section class="section section-details">

        <div class="section-head container">
            <h1>{{ movieDetails.title }}</h1>
        </div>

        <div class="section-body container">
            <div class="row">
                <div class="col-lg-6 text-danger">{{ movieDetails.title }}</div>
            </div>
        </div>
    </section>
</template>

<script>
    import { animations } from '../main-animations';
    import axios from 'axios';

    export default {
        name: 'MovieDetail',
        props: ['id'],
        data(){
            return {
                movieDetails: []
            }
        },

        methods: {
            showMovieDetails: function(){
                let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
                let movieId = this.id;
                axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
                    .then(response => (this.movieDetails = response.data))
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        mounted() {
            this.showMovieDetails();
            animations();
        }
    }
</script>