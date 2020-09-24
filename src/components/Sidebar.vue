<template>
  <b-sidebar :id="'movie-' + id" :title="title" shadow>
    <div class="px-3 py-2">
      <p>
        <Resume :desc="description" />
      </p>
    </div>
  </b-sidebar>
</template>

<script>
import Resume from "@/components/Resume";

export default {
  name: "Sidebar",
  props: {
    id: Number,
    description: String,
    title: String
  },
  components: {
    Resume
  }
};
</script>