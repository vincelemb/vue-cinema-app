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

<script>
export default {
  name: "Resume",
  props: {
    desc: String
  }
};
</script>