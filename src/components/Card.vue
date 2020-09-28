<template>
  <div>
    <b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden">
      <b-card
      @mouseover="show = true"
      @mouseleave="show = false"
        :aria-hidden="show ? 'true' : null"
        overlay
        img-top
        text-variant="white"
        :img-src="'http://image.tmdb.org/t/p/w500/' + imgName"
        tag="article"
        style="max-width: 20rem; card"
        class="m-2"
      >
        <b-card-title>{{ title }}</b-card-title>
        <b-button ref="show" :disabled="show" variant="primary" >
          Show overlay
        </b-button>
      </b-card>

        <template v-slot:overlay>
          <div class="text-center">
            <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
            <p id="cancel-label">Please wait...</p>
            <b-button
              ref="cancel"
              variant="outline-danger"
              size="sm"
              aria-describedby="cancel-label"
              
            >
              Cancel
            </b-button>
          </div>
        </template>

        <!-- <b-button
          class="c-btn"
          variant="primary"
          v-b-toggle="'movie-' + id"
          @click="getResultMusic(title), saveTitle(title)"
          >Plus d'infos</b-button
        > -->
        
    </b-overlay>
    <Sidebar :title="movieTitle" :description="description" :id="id" />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";
import { state, mutations, actions } from "../store/store";

@Component({
  name: "Card",
  components: {
    Sidebar
  }
})
export default class Card extends Vue {
  @Prop(String) private imgName?: string;
  @Prop(String) private title!: string;
  @Prop(String) private description!: string;
  @Prop(Number) private id!: number;
  @Prop(Object) private musicName?: object;

  private show?: boolean = false;

  mounted(){
    this.$nextTick(()=>{
      console.log(this.$refs.cancel) // returns undefined ???
    });
  }

  // mounted() {
  //     console.log(this.$refs.cancel);
  // }

  private onShown(){
    const child: any = this.$refs.cancel;
    child.focus();
  }

  private onHidden(){
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

  private saveTitle(value: string) {
    actions.title(value);
  }

  private get movieTitle(): string {
      return state.movieInfo.title[1]
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
