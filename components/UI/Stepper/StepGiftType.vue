<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <b-form-row>
            <b-col cols="12">Choose a Donation Amount</b-col>
            <b-col>
                <label>Donate Monthly</label>
                <p>Your monthly support has lasting impact on changes lives at the University of Cincinnati and UC Health.</p>
                <b-button-group vertical>
                    <b-button
                        block
                        size="md"
                        variant="outline-primary"
                    >Yes! I want to donate $25 a month.</b-button>
                    <b-button block size="md" variant="outline-primary" class="text-left">
                        $
                        <input type="text" class="oneOpen" placeholder="Other">
                        a month.
                    </b-button>
                </b-button-group>
            </b-col>
            <b-col>
                <label>Make a One-Time Gift</label>
                <b-button-group class="mb-1">
                    <b-button size="lg" variant="outline-primary">$50</b-button>
                    <b-button size="lg" variant="outline-primary">$100</b-button>
                    <b-button size="lg" variant="outline-primary">$250</b-button>
                    <b-button size="lg" variant="outline-primary">$500</b-button>
                    <b-button size="lg" variant="outline-primary">$1000</b-button>
                </b-button-group>
                <b-button block variant="outline-primary" class="mb-3 p-0">
                    <b-form-input size="lg" placeholder="Other" class="text-center"></b-form-input>
                </b-button>
                <!-- <ul class="arr">
                    <li class="btn" data-set="0">$50</li>
                    <li class="btn" data-set="1">$100</li>
                    <li class="btn" data-set="2">$250</li>
                    <li class="btn" data-set="3">$500</li>
                    <li class="btn" data-set="3">$1000</li>
                    <li class="btn otr">
                        <input type="text" class="oneOpen" placeholder="Other">
                    </li>
                </ul>-->

                <b-form-checkbox
                    id="checkbox-1"
                    v-model="tribute"
                    name="checkbox-1"
                    value="true"
                    unchecked-value="false"
                >Is this gift in Honor/Memory of a friend or loved one?</b-form-checkbox>
            </b-col>
        </b-form-row>
        <!-- <b-form-row>
            <b-col cols>
                <h3>Gift Type</h3>
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
                </b-form-group>

                <div>Selected: {{form.giftType}}</div>
            </b-col>
        </b-form-row>
        <b-form-row>
            <b-col>
                <h3>Gift Amount</h3>
                <Amounts/>
            </b-col>
        </b-form-row>-->
    </div>
</template>

<script>
import $ from "jquery";
import { giftTypes } from "@/store";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import Amounts from "~/components/cart/Amounts.vue";

export default {
    props: ["clickedNext", "currentStep"],
    mixins: [validationMixin],
    components: {
        Amounts
    },
    props: {
        value: {
            default: ""
        },
        options: {
            type: Array,
            default: () => [...Object.values(giftTypes)]
        }
    },
    data() {
        return {
            form: {
                giftType: ""
            },
            selected: "",
            tribute: "false"
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
    .col {
        padding: 1em;
        &:nth-child(2) {
            border-right: 1px solid $black;
            .btn-group-vertical {
                width: 100%;
                max-width: 100%;
            }
        }
        &:last-child {
            border-left: 1px solid $black;
            .btn-group {
                width: 100%;
                font-weight: bold !important;
                button {
                    &:last-child {
                        input {
                            display: block !important;
                            width: 100% !important;
                            max-width: 100% !important;
                        }
                        display: block;
                        width: 100% !important;
                    }
                }
            }
        }
        button {
            margin: 3px 0;
        }
        input {
            outline: none;
            border: 0px;
            box-shadow: none !important;
            font-weight: bold;
        }
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
