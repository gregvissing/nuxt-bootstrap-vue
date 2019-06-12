<template>
    <b-container>
        <h1>{{title}}</h1>
    </b-container>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";

export default {
    props: ["name"],
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
    transition: "slide"
    // transiton: {
    //     mode: "out-in",
    //     css: false,
    //     beforeLeave(el) {
    //         console.log("index before leave");
    //     },
    //     leave(el, done) {
    //         console.log("index leave");
    //         done();
    //     },
    //     beforeEnter(el) {
    //         console.log("index before enter");
    //     },
    //     enter(el, done) {
    //         console.log("index enter");
    //         done();
    //     }
    // }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

h1 {
    color: $white;
}
</style>
