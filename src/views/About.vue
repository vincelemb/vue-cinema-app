<template>
  <div class="about">
    <div class="d-flex justify-content-center">
      <h1>Mes favoris</h1>
      <router-link to="/">
        <b-button size="lg" class="ml-2" variant="primary">
          Retour Movilick
        </b-button>
      </router-link>
      <div>
        {{favoritesMovies}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import store from "../store/store";
  import { Vue, Component, Prop, PropSync } from "vue-property-decorator";

  @Component({
      name: "About",
    })

export default class About extends Vue {
  
  private favoritesMovies?:object = this.$store.getters.getFavoritesMovie
}

</script>