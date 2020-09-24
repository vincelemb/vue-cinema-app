<template>
    <b-sidebar id="example-sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        {{this.$store.getters.results}}
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </div>
    </b-sidebar>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {
            id: Number
            // imgName: String,
            // title: String,
            // description: String,
        },   
    }
</script>