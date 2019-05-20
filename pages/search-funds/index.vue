<template>
    <div>
        <b-container class="main">
            <p>Your support of the University of Cincinnati and UC Health changes lives. From creating vital student scholarships to funding leading-edge research to providing for world-class patient care, our donors make a difference. Browse our Areas to Support database to see where you can make an impact at UC and UC Health.</p>

            <hr>

            <div class="typeahead-container">
                <Typeahead
                    placeholder="What Fund you are looking for..."
                    filter-key="titledesc"
                    :start-at="2"
                ></Typeahead>
            </div>

            <h3>Areas</h3>
            <div>
                <p v-for="(area, index) in uniqueAreas" :key="index">{{area}}</p>
            </div>
        </b-container>
    </div>
</template>


<script>
import $ from "jquery";
import axios from "axios";
import Typeahead from "~/components/UI/Typeahead.vue";

export default {
    pageTitle: "Donate Now",
    layout: "internal",
    components: {
        Typeahead
    },
    data() {
        return {
            areaList: []
        };
    },
    computed: {
        uniqueAreas() {
            return [...new Set(this.areaList.map(p => p.value))];
        }
    }

    // created() {
    //     this.$store.dispatch("fetchFund").then(() => {
    //         console.log("This would be printed after dispatch!!");
    //     });
    // }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.zip-error {
    color: #d70000;
    font: 12px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    border-top: 2px dotted #ec9696;
    border-bottom: 2px dotted #ec9696;
    text-align: center;
    padding: 5px 10px;
    margin-top: 10px;
    display: none;
}

.custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: green !important;
    background-color: green !important;
}

#giftType {
    width: 100%;
    button {
        width: 20%;
        font-weight: bold;
        border: 1px solid $white;
        padding: 1.375rem 0.75rem;
        box-sizing: border-box;
        @include transition(all 0.4s ease);
        &:hover {
            background-color: $white;
            color: $black;
            border-color: $black;
        }
    }
}
</style>
