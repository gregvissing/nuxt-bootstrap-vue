<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <b-form-row class="justify-content-md-center">
            <b-col cols="4">
                <b-form-group
                    id="input-group-2"
                    label="Start by entering your zip code."
                    label-for="input-2"
                >
                    <b-form-input
                        id="input-2"
                        :class="['zip', ($v.form.Address.PostalCode.$error) ? 'is-danger' : '']"
                        v-model="form.Address.PostalCode"
                        required
                        placeholder="Enter Zip Code"
                        autocomplete="off"
                    ></b-form-input>
                    <p
                        v-if="$v.form.Address.PostalCode.$error"
                        class="help is-danger"
                    >The title is required</p>
                    <!-- <p class="zip-error">Not a real zip code.</p> -->
                </b-form-group>
            </b-col>
        </b-form-row>

        <b-form-row class="cityState">
            <!-- City -->
            <b-col cols="6">
                <b-form-group id="input-group-2" label="City:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.Address.City"
                        required
                        placeholder="Enter city"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <!-- State -->
            <b-col cols="3">
                <b-form-group id="input-group-2" label="State:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.Address.State"
                        required
                        placeholder="Enter State"
                    ></b-form-input>
                </b-form-group>
            </b-col>

            <!-- Country -->
            <b-col cols="3">
                <b-form-group id="input-group-2" label="Country:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.Address.Country"
                        required
                        placeholder="Enter country"
                    ></b-form-input>
                </b-form-group>
            </b-col>

            <!-- Street Address -->
            <b-col cols="12">
                <b-form-group id="input-group-2" label="Street Address:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        class="streetAddress"
                        v-model="form.Address.StreetAddress"
                        required
                        placeholder="Enter Street Address"
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-form-row>
    </div>
</template>

<script>
import $ from "jquery";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
    props: ["clickedNext", "currentStep"],
    mixins: [validationMixin],
    methods: {
        canContinue() {
            this.$emit("can-continue", { value: true });
        },
        is_int: function(value) {
            if (parseFloat(value) == parseInt(value) && !isNaN(value)) {
                return true;
            } else {
                return false;
            }
        },
        getCity: function() {
            let self = this;
            $.getJSON(
                "https://ZiptasticAPI.com/" + this.form.Address.PostalCode,
                function(result) {
                    if (result.error) {
                        self.error = "zip code not found";
                        self.city = "";
                        $(".cityState").slideUp();
                        // $(".zip-error").slideDown();
                        // $(".error").addClass("no");
                    } else {
                        self.form.Address.City = result.city;
                        self.form.Address.State = result.state;
                        self.form.Address.Country = result.country;
                        $(".cityState").slideDown();
                        // $(".zip-error").slideUp();
                        // $(".display").addClass("animated fadeInDown");
                    }
                    console.log(result);
                }
            );
        }
    },

    data() {
        return {
            form: {
                Address: {
                    City: "",
                    Country: "",
                    PostalCode: "",
                    State: "",
                    StreetAddress: ""
                }
            },
            error: "",
            city: " ",
            show: true
        };
    },
    validations: {
        form: {
            Address: {
                City: {
                    // required
                },
                Country: {
                    // required
                },
                PostalCode: {
                    // required
                },
                State: {
                    // required
                },
                StreetAddress: {
                    // requered
                }
            }
        }
    },
    watch: {
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
        },
        "form.Address.PostalCode": function() {
            if (this.form.Address.PostalCode.length === 5) {
                this.getCity();
                this.error = "";
                $(".error").removeClass("no");
            }
            if (this.form.Address.PostalCode.length < 5) {
                this.city = "";
                this.error = "hey, that's not a zipcode";
                $(".error").addClass("no");
                $(".display").removeClass("animated fadeInDown");
            }
        }
    },
    mounted() {
        $(".cityState").hide();
        this.getCity();
        //            this.$emit('can-continue', {value: true})
    }
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
