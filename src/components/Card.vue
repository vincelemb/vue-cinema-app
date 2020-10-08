<template>
    <div @mouseleave="show = false" class="m-2">
        <b-overlay
            :show="show"
            rounded="sm"
            variant="dark"
            opacity="0.70"
            blur="5px"
        >
            <b-card
                @mouseover="show = true"
                :aria-hidden="show ? 'true' : null"
                overlay
                img-top
                text-variant="white"
                :img-src="'http://image.tmdb.org/t/p/w500/' + imgName"
                tag="article"
                style="max-width: 20rem; card"
            >
                <b-card-title>{{ title }}</b-card-title>
            </b-card>
            <template v-slot:overlay>
                <div>
                    <b-button
                        class="m-2"
                        variant="light"
                        v-b-toggle="'movie-' + id"
                        @click="saveTitle(title, description, id, imgName)"
                        >Infos</b-button
                    >
                    <b-button
                        class="m-2"
                        variant="primary"
                        v-b-toggle="'movie-' + id"
                        @click="getResultMusic(title)"
                        >Add to list</b-button
                    >
                    <b-button
                        v-if="isMovieFav(title, favoritesMovie)"
                        class="m-2"
                        size="lg"
                        pill
                        variant="light"
                        @click="deleteFavoriteMovie(title)"
                    >
                        <b-icon
                            class="mt-2"
                            icon="heart-fill"
                            :variant="
                                isMovieFav(title, favoritesMovie)
                                    ? 'danger'
                                    : 'seondary'
                            "
                        ></b-icon>
                    </b-button>
                    <b-button
                        v-else
                        class="m-2"
                        size="lg"
                        pill
                        variant="light"
                        @click="
                            saveFavoriteMovie(title, description, id, imgName)
                        "
                    >
                        <b-icon
                            class="mt-2"
                            icon="heart-fill"
                            :variant="
                                isMovieFav(title, favoritesMovie)
                                    ? 'danger'
                                    : 'seondary'
                            "
                        ></b-icon>
                    </b-button>
                </div>
            </template>
        </b-overlay>
        <Sidebar :title="title" :description="description" :id="id" />
    </div>
</template>

<script lang="ts">
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";
import store from "../store/store";

@Component({
    name: "Card",
    components: {
        Sidebar
    }
})
export default class Card extends Vue {
    // @Prop(Boolean) private imgName?: boolean;
    @Prop(String) private imgName?: string;
    @Prop(String) private title!: string;
    @Prop(String) private description!: string;
    @Prop(Number) private id!: number;
    @Prop(Object) private musicName?: object;

    private show?: boolean = false;

    /**
     * @param {string} query
     * @return {object} - Return music detail object
     */
    private getResultMusic(query: string) {
        axios
            .get(
                `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query}`
            )
            .then(response => {
                const { data } = response;
                const state = {
                    music: data.music
                };
                return state;
            });
    }

    //Methods
    private saveFavoriteMovie(
        title: string,
        description: string,
        id: number,
        imgName: string
    ) {
        this.$store.commit("SET_FAVORITE_MOVIE", {
            title,
            description,
            id,
            imgName
        });
    }

    private deleteFavoriteMovie(title: string) {
        this.$store.commit("DELETE_FAVORITE_MOVIE", title);
    }

    private isMovieFav(movie: string, object: Array<{ title: string }>) {
        return object.some(index => index.title === movie);
    }

    private get favoritesMovie(): object {
        return this.$store.getters.getFavoritesMovie;
    }

    // private get computedTest(): string {
    //     return 'test';
    // }

    // @Watch('nomGetter', {deep: true})
    // private nomGetterWatcher() {

    // }
}
</script>

<style scoped lang="scss">
.card {
    overflow: hidden;
    text-overflow: ellipsis;
}

.desc {
    height: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
}

.c-btn {
    transform: translateX(-50%);
    bottom: 10px;
    position: absolute;
}
</style>
