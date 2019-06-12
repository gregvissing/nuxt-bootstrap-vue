<template>
    <section :class="{
    'internal' : (page != 'index'),
    'home' : (page === 'index')
    }">
        <Header/>

        <div id="internal-hero">
            <!-- <b-container> -->
            <transition
                name="title-anim"
                enter-active-class="animated fadeInUp"
                leave-active-class="animated fadeOutDown"
                key="title"
            >
                <!-- <h1>{{title}}</h1> -->
                <InternalTitle/>
            </transition>
            <!--</b-container> -->
        </div>

        <transition
            name="router-anim"
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOutRight"
            key="body"
        >
            <nuxt/>
        </transition>

        <Footer/>
        <a class="scrollToTop" href="#" @click.prevent="scrollToTop">
            <span style="font-size: 1.25em;">
                <i class="fas fa-chevron-circle-up"></i>
            </span>
        </a>
    </section>
</template>

<script>
import $ from "jquery";
import { mapState, mapGetters } from "vuex";
import SearchModal from "@/components/UI/Modal/SearchModal.vue";
import Header from "@/components/Navigation/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import InternalTitle from "@/components/Page-Components/internal-title.vue";

export default {
    data() {
        return {
            show: true
        };
    },
    components: {
        Header,
        Footer,
        SearchModal,
        InternalTitle
    },
    computed: {
        ...mapState(["page"]),
        title() {
            return this.$route.matched.map(r => {
                return r.components.default.options
                    ? r.components.default.options.pageTitle
                    : r.components.default.pageTitle;
            })[0];
        }
    },
    methods: {
        scrollToTop() {
            $("html, body").animate(
                {
                    scrollTop: 0
                },
                300
            );
            return false;
        },
        created: function() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
};
</script>

<style lang="scss" >
@import "@/assets/scss/style.scss";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

@mixin header($imgurl) {
    background: url($imgurl) center center;
    background-size: cover;
    position: absolute;
    width: 100vw;
    height: 300px;
}

.header-img1 {
    @include header(
        "https://www.alumni.uc.edu/image/home-full-width/MM-Geen-3.jpg"
    );
}

.header-img2 {
    @include header(
        "https://foundation.uc.edu/image/annual-report/2018/letters/UC-Campus-Scenes0232.jpg"
    );
}

#interna-hero {
    .container {
        vertical-align: middle;
    }
}

/* .bk-enter-active,
.bk-leave-active {
    transition: all 0.4s ease;
}

.bk-enter,
.bk-leave-to {
    transform: scale(1.1) translateZ(0);
    opacity: 0;
}

.bk-img {
    position: absolute;
    width: 100vw;
    height: 300px;
    overflow: hidden;
    top: 80px;
} */

.home {
    > .container {
        max-width: 100%;
        padding: 0;
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

html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>
