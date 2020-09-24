<template>
  <div class="home">
    <h1 class="mt-5 title">Movilick</h1>
    <Form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Card from "@/components/Card.vue";
import Form from "@/components/Form.vue";
import Sidebar from "@/components/Sidebar.vue";

@Component({
  components: {
    HelloWorld,
    Card,
    Form,
    Sidebar
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.title {
  color: white;
}
</style>

