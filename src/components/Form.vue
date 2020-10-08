<template>
  <b-container>
    <b-input-group size="lg" class="mb-3" prepend="La musique du film...">
      <b-form-input
        name="input"
        type="text"
        v-model="query"
        @keyup="getResult(query)"
      ></b-form-input>
        <router-link to="/favoris">
          <b-button size="lg" class="ml-2" variant="success">
            Mes favoris
            <b-icon class="ml-1" icon="heart-fill" variant="light"></b-icon>
          </b-button>
        </router-link>
    </b-input-group>
    <div class="d-flex justify-content-center flex-wrap w-100">
      <div v-for="result in results" :key="result.id">
        <Card
          :id="result.id"
          :title="result.title"
          :imgName="result.poster_path"
          :description="result.overview"
        />
      </div>
    </div>
  </b-container>
</template>

<script lang="ts">
import axios from "axios";
import Card from "@/components/Card.vue";
import { State, Action, Getter, namespace } from "vuex-class";
import Component from "vue-class-component";
import { Vue, Prop } from "vue-property-decorator";

@Component({
  name: "Form",
  components: {
    Card
  }
})
export default class Form extends Vue {
  private results: Record<string, any> = [];
  private query?: string;

  /**
   * @param {string} query - keyword for API
   * @return {Object} - list of movies according to the keyword
   */
  private getResult(query: string) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=6e9ac46c8849c6aa826907b490ecfc1f&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then(response => {
        this.results = response.data.results;
      });
  }
}
</script>