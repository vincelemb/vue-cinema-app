<template>
  <b-sidebar :id="'movie-' + id" :title="title" shadow>
    <div class="px-3 py-2">
      <p>
        <Resume :desc="description" />
      </p>
    </div>
  </b-sidebar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Resume from "@/components/Resume.vue";

@Component({
  name: "Sidebar",
  components: {
    Resume
  }
})
export default class Sidebar extends Vue {
  @Prop(Number) private id?: number;
  @Prop(String) private description?: string;
  @Prop(String) private title?: any;
}
</script>