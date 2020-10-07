<template>
  <div @mouseleave="show = false" class="m-2">
    <b-overlay
      ref="show"
      :show="show"
      rounded="sm"
      @shown="onShown"
      @hidden="onHidden"
      variant="dark"
      opacity="0.70"
      blur="5px"
    >
      <b-card
        ref="cancel"
        @mouseover="show = true"
        :aria-hidden="show ? 'true' : null"
        overlay
        img-top
        text-variant="white"
        :img-src="'http://image.tmdb.org/t/p/w500/' + imgName"
        tag="article"
        style="max-width: 20rem; card"
      >
        <b-card-title>{{ title }}</b-card-title>
      </b-card>


      <!-- <template v-if="awesome" v-slot:overlay> -->
      <template v-slot:overlay>
        <div>
          <b-button
            class="m-2"
            variant="light"
            v-b-toggle="'movie-' + id"
            @click="getResultMusic(title), saveTitle(title, description, id, imgName)"
            >Infos</b-button
          >
          <b-button
            class="m-2"
            variant="primary"
            v-b-toggle="'movie-' + id"
            @click="getResultMusic(title), saveTitle(title)"
            >Add to list</b-button
          >
          <b-button
            class="m-2"
            size="lg"
            pill
            variant="light"
            v-b-toggle="'movie-' + id"
            @click="favoriteMovie(title, description, id, imgName)"
            ><b-icon class="mt-2" icon="heart-fill" variant="primary"></b-icon
          ></b-button>
        </div>
      </template>
    </b-overlay>
    <Sidebar :title="title" :description="description" :id="id" />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";
import store from "../store/store";

@Component({
  name: "Card",
  components: {
    Sidebar
  }
})
export default class Card extends Vue {
  // @Prop(Boolean) private imgName?: boolean;
  @Prop(String) private imgName?: string;
  @Prop(String) private title!: string;
  @Prop(String) private description!: string;
  @Prop(Number) private id!: number;
  @Prop(Object) private musicName?: object;

  private show?: boolean = false;

  private onShown() {
    const child: any = this.$refs.cancel;
    child.focus({ preventScroll: true });
  }

  private onHidden() {
    const child: any = this.$refs.show;
    child.focus();
  }

  /**
   * @param {string} query
   * @return {}
   */
  private getResultMusic(query: string) {
    axios
      .get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query}`)
      .then(response => {
        const { data } = response;
        const state = {
          music: data.music
        };
        return state;
      });
  }

  //Methods
  private saveTitle(title: string, description:string, id:number, imgName:string) {
    this.$store.commit('setMovieInfos', {title, description, id, imgName})
  }

  private favoriteMovie(title: string, description:string, id:number, imgName:string) {
    this.$store.commit('setFavoriteMovie', {title, description, id, imgName})
  }


  //Getters
  private get movieTitle(): string {
    return this.$store.getters.getMovieTitle
  }
  private get movieDesc(): string {
    return this.$store.getters.getMovieDesc
  }
  private get movieId(): number {
    return this.$store.getters.getMovieId
  }
  private get movieImg(): string {
    return this.$store.getters.getMovieImg
  }

  // private set movieTitle(newValue: string) {
  //   let names = newValue.split(' ')
  //   this.first = names[0]
  //   this.last = names[names.length - 1]
  // }

  // private get computedTest(): string {
  //     return 'test';
  // }

  // @Watch('nomGetter', {deep: true})
  // private nomGetterWatcher() {

  // }

  // getId(id) {
  //   this.$store.commit("ID_MOVIE", id);
  // console.log(id);
  // this.results.map((result)=>{
  //     this.$store.commit('SAVE_ID_MOVIE', result)
  // })
  // }
}
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
