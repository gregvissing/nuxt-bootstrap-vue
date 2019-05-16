<template>
    <div>
        <b-container class="impact-stories">
            <h2 class="text-center">
                REDEFINING
                <span>NEXT</span> BY...
            </h2>

            <b-row v-for="(impactstory, index) in impactstories" :key="index">
                <b-col>
                    <h3>{{ impactstory.title }}</h3>
                    <div v-html="impactstory.text"></div>
                </b-col>
                <b-col v-bind:style="{ 'background-image': 'url(' + impactstory.image + ')' }"></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { impactstories } from "@/store";

export default {
    data() {
        return {
            impactstories: impactstories
        };
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.impact-stories {
    padding: 0;
    max-width: 100%;
    h2 {
        padding: 10px 5px;
        background: $black;
        color: $white;
        margin: 0;
        font-style: italic;
        font-weight: bold;
        span {
            color: $red;
        }
    }
    .row {
        margin: 0;
        .col {
            background-size: cover;
            background-position: center;
            padding: 2em;
            h3 {
                font-family: "Bree Serif";
            }
        }
        &:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }
}
</style>
