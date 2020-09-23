<template>
    <div>
        <h1>Chercher un film</h1>
        <input name="input" type='text' v-model='query' @keyup='getResult(query)'>
        <div v-for='result in results' :key='result.id'>
            <p>{{result.title}}</p>
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +result.poster_path" width='100px'>
        </div>
        <!-- <b-form-input v-model="form.title"></b-form-input> -->
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data: () => ({
            results: Object,
            query: '',
            form: {
                title: 'dfrdf',
                description: '',
                rate: '',
            }
        }),
         methods: {

            getResult(query) {
                axios.get(`https://api.themoviedb.org/3/search/multi?api_key=6e9ac46c8849c6aa826907b490ecfc1f&language=en-US&query=${query}&page=1&include_adult=false`).then(response => { this.results = response.data.results })
                this.results.map((result)=>{
                    this.$store.commit('addMovie', result)
                })
                }
            },
    }
</script>