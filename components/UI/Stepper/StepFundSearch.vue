<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <b-form-row>
            <b-col cols>
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

                <MultiSelect v-model="value" :options="options"></MultiSelect>
            </b-col>
        </b-form-row>
    </div>
</template>

<script>
import $ from "jquery";
import { giftTypes } from "@/store";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import Amounts from "~/components/cart/Amounts.vue";
import MultiSelect from "~/components/UI/UI-Components/MultiSelect.vue";

export default {
    props: ["clickedNext", "currentStep"],
    mixins: [validationMixin],
    components: {
        Amounts,
        MultiSelect
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
