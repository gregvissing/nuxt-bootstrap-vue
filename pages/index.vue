/* eslint-disable */
<template>
    <div>
        <Hero/>

        <Areas/>

        <FeaturedFunds/>

        <ImpactStories/>
    </div>
</template>

<script>
import axios from "axios";

import Hero from "~/components/UI/Hero.vue";
import Areas from "~/components/UI/Areas.vue";
import FeaturedFunds from "~/components/UI/FeaturedFunds.vue";
import ImpactStories from "~/components/UI/ImpactStories.vue";

export default {
    scrollToTop: true,
    components: {
        Hero,
        Areas,
        FeaturedFunds,
        ImpactStories
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.main {
    background-image: url("https://www.alumni.uc.edu/image/home-full-width/MM-Geen-3.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-top: 85px;
}
</style>
