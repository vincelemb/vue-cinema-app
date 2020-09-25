<template>
  <b-container>
    <b-input-group size="lg" class="mb-3" prepend="La musique du film...">
      <b-form-input
        name="input"
        type="text"
        v-model="query"
        @keyup="getResult(query)"
      ></b-form-input>
      <b-input-group-append>
        <b-button variant="info">
          <b-icon icon="x" />
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <div class="d-flex justify-content-center flex-wrap w-100">
      <div v-for="result in results" :key="result.id">
        <Card
          :id="result.id"
          :title="result.original_title"
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
import { State, Action, Getter, namespace } from 'vuex-class';
import Component from 'vue-class-component';
import { MovieState } from '../store/movie/types';
import { Vue, Prop } from "vue-property-decorator";
import { movie } from '@/store/movie';
import { mutations } from '@/store/movie/mutations';
const movieModule = namespace('movie')

@Component({
  name: "Form",
  components: {
    Card
  }
})
export default class Form extends Vue {
  @Prop({ default: "" }) private query?: string;

  private results: Object[] = [];
  private getResult(query: string) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=6e9ac46c8849c6aa826907b490ecfc1f&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then(response => {
        this.results = response.data.results;
      });
    this.results.map((result: object ) => {
      @movieModule.Mutation('MOVIE_INFO', result.title)
      // this.$store.commit("TITLE_NAME", result.title)
    });
  }
}
</script>