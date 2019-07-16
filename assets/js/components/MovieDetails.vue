<template>
    <section class="section section-details">
        test
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'MovieDetail',
        props: ['id'],
        data(){
            return {
                movieDetails: ''
            }
        },

        methods: {
            showMovieDetails: function(){
                let baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=';
                let apiKey = '8cb855b17cb0738ba58fc59872e6f7cb';
                let page = 1;
                axios.get(baseUrl + apiKey + '&page=' + page + '')
                    .then(response => (this.movieDetails = response.data.results))
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        mounted() {
            this.showMovieDetails();
        }
    }
</script>