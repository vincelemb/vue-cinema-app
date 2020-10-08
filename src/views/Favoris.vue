<template>
    <div class="about">
      <h1>Mes favoris</h1>
      <router-link to="/">
          <b-button size="lg" class="ml-2" variant="primary">
              Retour Movilick
          </b-button>
      </router-link>
      <b-container>
        <div class="d-flex justify-content-center flex-wrap w-100">
          <div v-for="movie in favoritesMovies" :key="movie.id">
            <Card
                :title="movie.title"
                :description="movie.description"
                :imgName="movie.imgName"
            />
          </div>
        </div>
      </b-container>
    </div>
</template>

<script lang="ts">
import store from "../store/store";
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";
import Card from "@/components/Card.vue";

@Component({
    name: "About",
    components: {
        Card
    }
})
export default class About extends Vue {
    private favoritesMovies?: object = this.$store.getters.getFavoritesMovie;
}
</script>