/* eslint-disable */
<template>
    <section class="internal">
        <Header/>
        <div id="internal-hero">
            <b-container>
                <h1>{{title}}</h1>
            </b-container>
        </div>
        <b-container>
            <transition name="fade" mode="out-in">
                <nuxt/>
            </transition>
        </b-container>
        <Footer/>
    </section>
</template>

<script>
import Header from "~/components/Navigation/Header.vue";
import Footer from "~/components/Footer/Footer.vue";

export default {
    components: {
        Header,
        Footer
    },
    computed: {
        title() {
            return this.$route.matched.map(r => {
                return r.components.default.options
                    ? r.components.default.options.pageTitle
                    : r.components.default.pageTitle;
            })[0];
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

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

.internal {
    > .container {
        margin-top: 0;
        /* margin-top: 85px; */
    }
}

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
