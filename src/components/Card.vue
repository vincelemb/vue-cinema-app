<template>
  <div class="w-100">
    <!-- <p>
        {{ $store.getters.results.poster_path }}
      </p> -->
    <div v-for='result in $store.getters.results' v-bind:key='result.id' >
      <p>
        {{ result }}
      </p>
    </div>

    <!-- <div v-for='result in $store.getters.results' v-bind:key='result.id' >
        <b-card
        title="Card Title"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 "
        >
        <b-card-img img-top :src="'http://image.tmdb.org/t/p/w500/'+ result.poster_path" width='100px'></b-card-img>
        <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

    </div> -->

  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
