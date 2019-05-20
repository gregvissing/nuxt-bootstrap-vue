<template>
    <b-container class="main text-center">
        <b-jumbotron
            header="Make Your Impact"
            lead="Your support of UC and UC Health changes lives."
        >
            <!-- <p>For more information visit website</p> -->
            <b-button size="lg" class="mr-4" variant="primary" href="#">Donate Now</b-button>
            <b-button size="lg" variant="secondary" to="/search-funds/">Search Funds</b-button>

            <div class="typeahead-container">
                <Typeahead
                    placeholder="What Fund you are looking for..."
                    filter-key="titledesc"
                    :start-at="2"
                ></Typeahead>
            </div>
        </b-jumbotron>
    </b-container>
</template>

<script>
import Typeahead from "~/components/UI/Typeahead.vue";

export default {
    components: {
        Typeahead
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.jumbotron {
    padding: 4em 6em;
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
</style>
