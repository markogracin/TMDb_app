<template>
    <main>
        <router-view/>
    </main>
</template>

<script>
    import PopularMovies from './views/PopularMovies';
    import MovieDetails from './views/MovieDetails';

    export default {
        name: 'App',
        views: {
            'PopularMovies': PopularMovies,
            'MovieDetails': MovieDetails,
        }
    }
</script>
