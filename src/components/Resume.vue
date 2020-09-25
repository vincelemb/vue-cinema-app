<template>
  <div>
    <b-card>
      <h2><b-badge>Description</b-badge></h2>
      <b-card-text>
        {{ desc }}
      </b-card-text>
      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Resume"
})
export default class Resume extends Vue {
  @Prop(String) private desc!: string;
}
</script>