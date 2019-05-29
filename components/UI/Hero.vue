<template>
    <b-container class="main text-center">
        <b-jumbotron
            header="Make Your Impact"
            lead="Your support of UC and UC Health changes lives."
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
    </b-container>
</template>

<script>
// import Typeahead from "~/components/UI/Typeahead.vue";
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
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.jumbotron {
    padding: 6em; // 4em 6em;
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
</style>
