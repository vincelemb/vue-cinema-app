<template>
  <div class="home">
    <div class="d-flex justify-content-center w-100">
      <div><Card/></div>
      <div><Form/></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Card from '@/components/Card.vue';
import Form from '@/components/Form.vue';

@Component({
  components: {
    HelloWorld,
    Card,
    Form
  }
})
export default class Home extends Vue {}
</script>
