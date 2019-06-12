/* eslint-disable */
<template>
    <section class="internal">
        <Header/>
        <div id="internal-hero">
            <b-container>
                <!-- <transition
                    name="router-anim"
                    enter-active-class="animated fadeInLeft"
                    leave-active-class="animated fadeOutRight"
                >-->
                <InternalTitle/>
                <!-- <h1>{{title}}</h1> -->
                <!-- </transition> -->
            </b-container>
        </div>
        <b-container>
            <!-- <transition name="fade" mode="out-in"> -->
            <transition
                name="router-anim"
                enter-active-class="animated fadeInLeft"
                leave-active-class="animated fadeOutRight"
            >
                <nuxt/>
            </transition>
        </b-container>
        <Footer/>
    </section>
</template>

<script>
import Header from "~/components/Navigation/Header.vue";
import Footer from "~/components/Footer/Footer.vue";
import InternalTitle from "@/components/Page-Components/internal-title.vue";

export default {
    components: {
        Header,
        Footer,
        InternalTitle
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
/* @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; */

#internal-hero {
    margin-top: 80px;
    background-color: $black;
    background: url("https://foundation.uc.edu/image/annual-report/2018/letters/UC-Campus-Scenes0232.jpg");
    background-position: center;
    height: 100px;
    width: 100%;
    margin-bottom: 2em;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 60px;
        width: 50%;
        background-color: $black;
        clip-path: polygon(0 0, 100% 0, 93% 100%, 0 100%);
    }
    .container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 5;
        h1 {
            color: $white;
        }
    }
}

/* .internal {
    > .container {
        margin-top: 0;
        /* margin-top: 85px; */

/*@include media("<=desktop") {
            max-width: 95% !important;
            .container {
                max-width: 100% !important;
            }
        }
    }
} */

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
