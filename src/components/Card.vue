<template>
<div>
  <b-card
    img-top
    :img-src="'http://image.tmdb.org/t/p/w500/'+ imgName"
    tag="article"
    style="max-width: 20rem; card"
    class="m-2 ">
    <b-card-title>{{title}}</b-card-title>
    <b-card-text class="desc">{{description}}</b-card-text>
    <b-button disabled class="c-btn" variant="primary" v-b-toggle href="#example-sidebar" @click.prevent="showSidebar(id)">Plus d'infos</b-button>
  </b-card>

  <b-sidebar id="example-sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        {{this.$store.getters.results}}
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </div>
    </b-sidebar>
  
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    imgName: String,
    title: String,
    description: String,
    id: Number
  },
  methods: {
    showSidebar(id){
      console.log(id)
      // this.results.map((result)=>{
      //     this.$store.commit('SAVE_ID_MOVIE', result)
      // })
    }
  }
}
</script>

<style scoped lang="scss">
  .card{
    min-height: 700px;
    max-height: 700px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .desc{
    height: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .c-btn{
    transform: translateX(-50%);
    bottom: 10px;
    position: absolute;
  }
</style>
