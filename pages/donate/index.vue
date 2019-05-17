<template>
    <div>
        <b-container class="main">
            <!-- <Typeahead
                placeholder="What Fund you are looking for..."
                filter-key="titledesc"
                :start-at="2"
            ></Typeahead>

            <hr>-->

            <p>Your support of the University of Cincinnati and UC Health changes lives. From creating vital student scholarships to funding leading-edge research to providing for world-class patient care, our donors make a difference. Browse our Areas to Support database to see where you can make an impact at UC and UC Health.</p>

            <hr>
            <h3>Donation Type</h3>

            <b-button-group id="giftType">
                <b-button>ONE-TIME GIFT</b-button>
                <b-button>MONTHLY GIFT</b-button>
                <b-button>PLEDGE PAYMENT</b-button>
                <b-button>FACULTY & STAFF</b-button>
                <b-button>SENIOR CLASS GIFT</b-button>
            </b-button-group>

            <hr>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <label for>
                    <strong>Address Fields</strong>
                </label>

                <b-form-row>
                    <b-col cols="4">
                        <b-form-group id="input-group-2" label="Zip Code:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                class="zip"
                                v-model="form.Donor.Address.PostalCode"
                                required
                                placeholder="Enter Zip Code"
                            ></b-form-input>
                            <p class="zip-error">Not a real zip code.</p>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <b-form-row class="cityState">
                    <!-- City -->
                    <b-col cols="6">
                        <b-form-group id="input-group-2" label="City:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.Donor.Address.City"
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
                                v-model="form.Donor.Address.State"
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
                                v-model="form.Donor.Address.Country"
                                required
                                placeholder="Enter country"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>

                    <!-- Street Address -->
                    <b-col cols="12">
                        <b-form-group
                            id="input-group-2"
                            label="Street Address:"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                class="streetAddress"
                                v-model="form.Donor.Address.StreetAddress"
                                required
                                placeholder="Enter Street Address"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <hr>

                <label for>
                    <strong>Personal Fields</strong>
                </label>

                <!-- Title -->
                <b-form-row>
                    <b-col cols="6">
                        <b-form-group id="input-group-2" label="Title:" label-for="input-2">
                            <b-form-select
                                v-model="form.Donor.Title"
                                :options="titles"
                                class="mb-0"
                            >
                                <!-- This slot appears above the options from 'options' prop -->
                                <template slot="first">
                                    <option :value="null" disabled>-- Please select an option --</option>
                                </template>

                                <!-- These options will appear after the ones from 'options' prop -->
                                <!-- <option value="C">Option C</option>
                                <option value="D">Option D</option>-->
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <!-- Name -->
                <b-form-row>
                    <b-col>
                        <b-form-group
                            id="input-group-2"
                            cols="4"
                            label="First Name:"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                v-model="form.Donor.FirstName"
                                required
                                placeholder="Enter first name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                            id="input-group-2"
                            cols="4"
                            label="Last Name:"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                v-model="form.Donor.LastName"
                                required
                                placeholder="Enter Last name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <!-- Email & Phone -->
                <b-form-row>
                    <b-col>
                        <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                            description="We'll never share your email with anyone else."
                        >
                            <b-form-input
                                id="input-1"
                                v-model="form.Donor.EmailAddress"
                                type="email"
                                required
                                placeholder="Enter email"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="input-group-2" label="Phone #:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.Donor.Phone"
                                required
                                placeholder="(999)999-9999"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <hr>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card>

            <hr>
        </b-container>
    </div>
</template>


<script>
import $ from "jquery";
import Typeahead from "~/components/UI/Typeahead.vue";

export default {
    pageTitle: "Donate Now",
    layout: "internal",
    components: {
        Typeahead
    },
    data() {
        return {
            // selected: null,
            error: "",
            city: " ",

            titles: [
                { value: "Miss", text: "Miss" },
                { value: "Mr", text: "Mr." },
                { value: "Mrs", text: "Mrs." },
                { value: "Ms", text: "Ms." },
                { value: "1st Lieutenant", text: "1st Lieutenant" },
                { value: "2nd Lieutenant", text: "2nd Lieutenant" },
                { value: "ADM", text: "ADM" },
                { value: "BG", text: "BG" },
                { value: "Bishop", text: "Bishop" },
                { value: "Brigadier General", text: "Brigadier General" },
                { value: "Brother", text: "Brother" },
                { value: "Captain", text: "Captain" },
                { value: "CDR", text: "CDR" },
                { value: "Chaplain", text: "Chaplain" },
                { value: "Colonel", text: "Colonel" },
                { value: "Commander", text: "Commander" },
                { value: "CPT", text: "CPT" },
                { value: "Dean", text: "Dean" },
                { value: "Dean Emeritus", text: "Dean Emeritus" },
                { value: "Dr.", text: "Dr." },
                { value: "Ensign", text: "Ensign" },
                { value: "Dean", text: "Dean" },
                { value: "Dean Emeritus", text: "Dean Emeritus" },
                { value: "Dr.", text: "Dr." },
                { value: "Ensign", text: "Ensign" },
                { value: "Father", text: "Father" },
                {
                    value: "Field Svc Instructor-Geo",
                    text: "Field Svc Instructor-Geo"
                },
                { value: "General", text: "General" },
                { value: "Governor", text: "Governor" },
                { value: "The Honorable", text: "The Honorable" },
                { value: "Judge", text: "Judge" },
                { value: "LCDR", text: "LCDR" },
                { value: "Lt Col", text: "Lt Col" },
                { value: "LtCol", text: "LtCol" },
                { value: "Lt Gen", text: "Lt Gen" },
                { value: "LTC", text: "LTC" },
                { value: "LTG", text: "LTG" },
                { value: "Lt.", text: "Lt." },
                { value: "Lt. Colonel", text: "Lt. Colonel" },
                { value: "Lt. Commander", text: "Lt. Commander" },
                { value: "Lt. Corporal", text: "Lt. Corporal" },
                { value: "Lt. General", text: "Lt. General" },
                { value: "Lt. Governor", text: "Lt. Governor" },
                { value: "Lt. Junior Grade", text: "Lt. Junior Grade" },
                { value: "Magistrate", text: "Magistrate" },
                { value: "Major", text: "Major" },
                { value: "Major General", text: "Major General" },
                { value: "Master Sergeant", text: "Master Sergeant" },
                { value: "Mayor", text: "Mayor" },
                { value: "Monsignor", text: "Monsignor" },
                { value: "Most Reverend", text: "Most Reverend" },
                { value: "Pastor", text: "Pastor" },
                { value: "Professor", text: "Professor" },
                { value: "Rabbi", text: "Rabbi" },
                { value: "Rear Admiral", text: "Rear Admiral" },
                { value: "Rep.", text: "Rep." },
                { value: "The Reverend", text: "The Reverend" },
                { value: "The Reverend Dr.", text: "The Reverend Dr." },
                { value: "Senator", text: "Senator" },
                { value: "Sergeant", text: "Sergeant" },
                { value: "Sir", text: "Sir" },
                { value: "Sister", text: "Sister" },
                { value: "Staff Sergeant", text: "Staff Sergeant" },
                { value: "SSgt", text: "SSgt" },
                { value: "VADM", text: "VADM" }
            ],

            form: {
                Donor: {
                    Address: {
                        City: "",
                        Country: "",
                        PostalCode: "",
                        State: "",
                        StreetAddress: ""
                    },
                    EmailAddress: "",
                    FirstName: "",
                    LastName: "",
                    Phone: "",
                    Title: ""
                }
            },
            show: true
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form.Donor.Address.City = "";
            this.form.Donor.Address.Country = "";
            this.form.Donor.Address.PostalCode = "";
            this.form.Donor.Address.State = "";
            this.form.Donor.Address.StreetAddress = "";

            this.form.Donor.EmailAddress = "";
            this.form.Donor.FirstName = "";
            this.form.Donor.LastName = "";
            this.form.Donor.Phone = "";
            this.form.Donor.Title = "";

            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
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
                "https://ZiptasticAPI.com/" +
                    this.form.Donor.Address.PostalCode,
                function(result) {
                    if (result.error) {
                        self.error = "zip code not found";
                        self.city = "";
                        $(".cityState").slideUp();
                        // $(".error").addClass("no");
                    } else {
                        self.form.Donor.Address.City = result.city;
                        self.form.Donor.Address.State = result.state;
                        self.form.Donor.Address.Country = result.country;
                        $(".cityState").slideDown();
                        // $(".display").addClass("animated fadeInDown");
                    }
                    console.log(result);
                }
            );
        }
    },
    watch: {
        "form.Donor.Address.PostalCode": function() {
            if (this.form.Donor.Address.PostalCode.length === 5) {
                this.getCity();
                this.error = "";
                $(".error").removeClass("no");
            }
            if (this.form.Donor.Address.PostalCode.length < 5) {
                this.city = "";
                this.error = "hey, that's not a zipcode";
                $(".error").addClass("no");
                $(".display").removeClass("animated fadeInDown");
            }
        }
    },
    mounted: function() {
        $(".cityState").hide();
        this.getCity();
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
