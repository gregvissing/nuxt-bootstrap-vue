<template>
    <div>
        <b-container class="featured-funds">
            <h2 class="text-center">Featured Funds</h2>

            <ul class="cards">
                <li class="cards__item" v-for="(fund, index) in funds" :key="index">
                    <div class="card">
                        <div
                            class="card__image"
                            v-bind:style="{ 'background-image': 'url(' + fund.image + ')' }"
                        ></div>
                        <div class="card__content">
                            <div class="card__title">{{ fund.title }}</div>
                            <p class="card__text">{{ fund.text }}</p>
                            <button class="btn btn--block card__btn">Donate Now</button>
                        </div>
                    </div>
                </li>
            </ul>
        </b-container>
    </div>
</template>

<script>
import { featuredfunds } from "@/store";

export default {
    data() {
        return {
            funds: featuredfunds
        };
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.featured-funds {
    padding: 0;
    max-width: 100%;
    margin-bottom: 2em;
    overflow: hidden;
    h2 {
        background: $black;
        color: $white;
        text-transform: uppercase;
        padding: 10px 5px;
        font-weight: bold;
    }
    .card-deck {
        .card,
        .card img {
            border-radius: 0;
        }
    }
}

/* $gray-darker: #444444;
$gray-dark: #696969;
$gray: #999999;
$gray-light: #cccccc;
$gray-lighter: #ececec;
$gray-lightest: lighten($gray-lighter, 4%); */

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    background-color: #f0f0f0;
}

/* body {
    color: $gray;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    padding: 1rem;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
} */

img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
}

.btn {
    background-color: white;
    border: 1px solid $gray-light;
    //border-radius: 1rem;
    color: $gray-dark;
    padding: 0.5rem;
    text-transform: capitalize;
    &.btn--block {
        display: block;
        width: 100%;
    }
}
</style>
