<template>
  <div class="home">
    <h1 class="mt-5 title">Movilick</h1>
    <Form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import Form from "@/components/Form.vue";
import Sidebar from "@/components/Sidebar.vue";

@Component({
  components: {
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

