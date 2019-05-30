<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <b-form-row>
            <b-col cols="12">Choose a Fund to Impact</b-col>
            <b-col cols="8">
                <label>Choose a Campaign Fund?</label>
                <b-button-group vertical size="md" class="mb-1">
                    <b-button variant="outline-primary">Greatest Need</b-button>
                    <b-button variant="outline-primary">Fund/Cincinnatus Scholarship Fund</b-button>
                    <b-button variant="outline-primary">Next Lives Here Fund</b-button>
                    <b-button variant="outline-primary">President's Transformation Fund</b-button>
                    <b-button variant="outline-primary">Student Need Scholarship Fund</b-button>
                    <b-button variant="outline-primary">UC Bicentennial Fund</b-button>
                </b-button-group>
            </b-col>
            <b-col cols="4">
                <label>Search all Funds?</label>
                <b-button
                    size="lg"
                    variant="secondary"
                    @click="showModal"
                    v-b-modal.modal-xl
                >Search Funds</b-button>

                <SearchModal id="searchModal"/>

                <!-- <div>
                    <label for>Filter By:</label>
                </div>

                <b-button-group block class="mb-1" size="lg">
                    <b-button size="lg" variant="outline-primary">Support Area</b-button>
                    <b-button size="lg" variant="outline-primary">Fund/Description</b-button>
                    <b-button size="lg" variant="outline-primary">Fund ID</b-button>
                </b-button-group>-->
                <!-- <h3>Gift Type</h3>
                <b-form-group>
                    <b-form-radio-group
                        id="giftTypes"
                        v-model="form.giftType"
                        :options="options"
                        buttons
                        button-variant="outline-dark"
                        size="lg"
                        name="radio-options"
                    ></b-form-radio-group>
                </b-form-group>-->

                <!-- <div>Selected: {{form.giftType}}</div> -->

                <!-- <MultiSelect v-model="value" :options="options"></MultiSelect> -->

                <!-- <AutoComplete
                    :items="[ 'Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple']"
                />-->
            </b-col>
        </b-form-row>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
import $ from "jquery";
import { giftTypes } from "@/store/data";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import Amounts from "~/components/cart/Amounts.vue";
import MultiSelect from "~/components/UI/UI-Components/MultiSelect.vue";
import AutoComplete from "~/components/UI/UI-Components/AutoComplete.vue";
import SearchModal from "~/components/UI/Modal/SearchModal.vue";

export default {
    props: ["clickedNext", "currentStep"],
    mixins: [validationMixin],
    components: {
        Amounts,
        MultiSelect,
        AutoComplete,
        SearchModal
    },
    // props: {
    //     value: {
    //         default: ""
    //     },
    //     options: {
    //         type: Array,
    //         default: () => [...Object.values(giftTypes)]
    //     }
    // },
    data() {
        return {
            form: {
                giftType: ""
            },
            selected: "",
            value: null,
            options: ["list", "of", "options"]
        };
    },
    validations: {
        form: {
            giftType: {
                // required
            }
        }
    },
    watch: {
        selected: function(val) {
            this.$emit("input", val);
        },
        $v: {
            handler: function(val) {
                if (!val.$invalid) {
                    this.$emit("can-continue", { value: true });
                } else {
                    this.$emit("can-continue", { value: false });
                    setTimeout(() => {
                        this.$emit("change-next", { nextBtnValue: false });
                    }, 3000);
                }
            },
            deep: true
        },
        clickedNext(val) {
            console.log(val);
            if (val === true) {
                this.$v.form.$touch();
            }
        }
    },
    methods: {
        otherValue() {
            this.selected = "";
            this.showOther = true;
        },
        showModal(item) {
            // this.selectedFund = item;
            this.$root.$emit("bv::show::modal", "searchModal");
        }
    },
    mounted() {
        if (!this.$v.$invalid) {
            this.$emit("can-continue", { value: true });
        } else {
            this.$emit("can-continue", { value: false });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.form-row {
    border: 1px solid $black;
    .col-12 {
        background-color: $black;
        color: $white;
        padding: 0.5em 1em;
        font-weight: bold;
    }
    .col-8,
    .col-4,
    .col {
        padding: 1em;
        &:nth-child(2) {
            .btn-group-vertical {
                width: 100%;
                max-width: 100%;
            }
        }
    }
    label {
        font-weight: bold;
        display: block;
    }
}

#giftTypes {
    padding: 0;
    margin: 0;
    list-style: none;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: space-around;
    label {
        display: block !important;
        position: relative;
        padding: 1rem !important;
        &.active {
            &.focus {
                box-shadow: none !important;
                outline: none !important;
            }
        }
        > span {
            position: absolute;
            left: 0;
            right: 0;
        }
    }
}
</style>
