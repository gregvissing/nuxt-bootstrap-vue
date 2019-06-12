<template>
    <section class="home">
        <Header/>
        <b-container>
            <transition name="fade" mode="out-in">
                <nuxt/>
            </transition>
        </b-container>
        <Footer/>
    </section>
</template>

<script>
import SearchModal from "@/components/UI/Modal/SearchModal.vue";
import Header from "@/components/Navigation/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
    components: {
        Header,
        Footer,
        SearchModal
    }
};
</script>

<style lang="scss" >
@import "@/assets/scss/style.scss";

#internal-hero {
    /* margin-top: 80px; */
    background-color: $black;
    /* background: url("https://foundation.uc.edu/image/annual-report/2018/letters/UC-Campus-Scenes0232.jpg");
    background-position: center; */
    height: 150px;
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

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
