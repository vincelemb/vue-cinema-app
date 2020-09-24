<template>
  <div>
    <b-card
      overlay
      img-top
      text-variant="white"
      :img-src="'http://image.tmdb.org/t/p/w500/' + imgName"
      tag="article"
      style="max-width: 20rem; card"
      class="m-2"
    >
      <b-card-title>{{ title }}</b-card-title>
      <b-button
        class="c-btn"
        variant="primary"
        v-b-toggle="'movie-' + id"
        @click="getResultMusic(title)"
        >Plus d'infos</b-button
      >
    </b-card>
    <Sidebar :title="title" :description="description" :id="id" />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

const testModule = namespace('film')

@Component({
  name: "Card",
  components: {
      Sidebar
    },
})
export default class Card extends Vue{
  @Prop(String) private imgName?: string; 
  private taDonnee: string = 'test';

  @testModule.Action('nomAction') private readonly nomAction!: any;
  @testModule.Getter('nomAction') private readonly nomGetter!: any;
  
  @Watch('nomGetter', {deep: true})
  private nomGetterWatcher() {
    
  }

  /**
   * @param {string} query
   * @return {}
   */
  private getResultMusic(query: string) {
    axios
        .get(
          `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query}`
        )
        .then(response => {
          const { data } = response;
          const state = {
              music: data.music,
          };
          return state;
        });
  }

  private get computedTest(): string {
      return 'test';
  }

  props: {
    imgName: String,
    title: String,
    description: String,
    id: Number,
    music: Object
  },
  methods: {
    getResultMusic(query: string) {
      axios
        .get(
          `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query}`
        )
        .then(response => {
          const { data } = response;
          const state = {
              music: data.music,
          };
          return state;
        });
    }
    // getId(id) {
    //   this.$store.commit("ID_MOVIE", id);
    // console.log(id);
    // this.results.map((result)=>{
    //     this.$store.commit('SAVE_ID_MOVIE', result)
    // })
    // }
  }
};
</script>

<style scoped lang="scss">
.card {
  overflow: hidden;
  text-overflow: ellipsis;
}

.desc {
  height: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.c-btn {
  transform: translateX(-50%);
  bottom: 10px;
  position: absolute;
}
</style>
