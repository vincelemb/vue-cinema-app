<template>
    <div>
        <b-button
            class="m-2"
            size="lg"
            pill
            variant="light"
            @click="saveFavoriteMovie(title, description, id, imgName)"
        >
            <b-icon
                class="mt-2"
                icon="heart-fill"
                :variant="
                    isMovieFav(title, favoritesMovie) ? 'danger' : 'seondary'
                "
            ></b-icon>
        </b-button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";

export default class Button extends Vue {
    @Prop(String) private imgName?: string;
    @Prop(String) private title!: string;
};
</script>