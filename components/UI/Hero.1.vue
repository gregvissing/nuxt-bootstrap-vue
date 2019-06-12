<template>
    <b-container
        class="main text-center"
        :class="{
    'areas-to-support' : (page === 'internal'),
    'ways-to-give' : (page === 'internal'),
    'why-give' : (page === 'internal'),
    'index' : (page === 'index')
  }"
    >
        <transition-group name="bk" tag="div" class="bk-img">
            <!-- <div key="img1" v-if="page === 'index'" class="header-img1"> -->
            <b-jumbotron
                header="Make Your Impact"
                lead="Your support of UC and UC Health changes lives."
                key="img1"
                v-if="page === 'index'"
                class="header-img1"
            >
                <!-- <p>For more information visit website</p> -->
                <b-button size="lg" class="mr-4" variant="primary" to="/donate-now/">Donate Now</b-button>
                <b-button
                    size="lg"
                    variant="secondary"
                    @click="showModal"
                    v-b-modal.modal-xl
                >Search Funds</b-button>

                <!-- <div class="typeahead-container">
                <input
                    @click="showModal"
                    v-b-modal.modal-xl
                    type="text"
                    class="SearchInput"
                    placeholder="Start typing the fund you are looking for..."
                >-->
                <!-- <Typeahead
                    placeholder="Start typing the fund you are looking for..."
                    filter-key="titledesc"
                    :start-at="2"
                ></Typeahead>-->
                <!-- </div> -->

                <SearchModal id="searchModal"/>
            </b-jumbotron>
            <!-- </div> -->

            <b-jumbotron key="img2" v-else class="header-img2">
                <div id="internal-hero">
                    <b-container>
                        <h1>{{title}}</h1>
                    </b-container>
                </div>
            </b-jumbotron>
        </transition-group>
    </b-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

// import Typeahead from "~/components/UI/UI-Components/Typeahead.vue";
import SearchModal from "~/components/UI/Modal/SearchModal.vue";

export default {
    components: {
        // Typeahead,
        SearchModal
    },
    methods: {
        showModal(item) {
            // this.selectedFund = item;
            this.$root.$emit("bv::show::modal", "searchModal");
        }
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
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

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

.jumbotron {
    padding: 4em; // 4em 6em;
    border-radius: 0;
    background-color: rgba(233, 236, 239, 0.75);
    margin: 0;
    h1 {
        font-family: "Bree Serif";
    }
    .lead {
        font-style: italic;
        font-weight: bold;
        font-size: 2em;
        font-family: "Droid Serif";
    }
    .typeahead-container {
        position: relative;
        margin-top: 2em;
        padding: 1em;
        background-color: rgba(0, 0, 0, 0.25);
    }
}

.SearchInput {
    display: inline-block;
    width: 100% !important;
    padding: 1.5em 1em !important;
    font-size: 1em !important;
    outline: 0 !important;
    border: 5px solid #000 !important;
    color: #000;

    border-radius: 0;
    border: none;
    /* width: 75%; */
    display: inline-block;
    vertical-align: top;
    height: 44px;
    padding-top: 8px;
    font-size: 2rem;
}

.bk-enter-active,
.bk-leave-active {
    transition: all 0.4s ease;
}

.bk-enter,
.bk-leave-to {
    transform: scale(1.1) translateZ(0);
    opacity: 0;
}

.bk-img {
    position: relative;
    width: 100vw;
    height: 100px;
    overflow: hidden;
    left: 0;
    top: 80px;
}

.index {
    > .bk-img {
        position: relative;
        width: 100vw;
        height: 400px;
        overflow: hidden;
        left: 0;
        top: 80px;
        .jumbotron {
            background-color: rgba(233, 236, 239, 0.75);
        }
    }
}
</style>
