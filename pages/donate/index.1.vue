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
                <label for>Address Fields</label>
                <b-form-group id="input-group-2" label="Your City:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.Donor.Address.City"
                        required
                        placeholder="Enter city"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your Country:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.Donor.Address.Country"
                        required
                        placeholder="Enter country"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your Zip Code:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.Donor.Address.PostalCode"
                        required
                        placeholder="Enter Zip Code"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your State:" label-for="input-2">
                    <b-form-select
                        v-model="form.Donor.Address.State"
                        :options="options"
                        class="mb-3"
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

                <b-form-group id="input-group-2" label="Your Street Address:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.Donor.Address.StreetAddress"
                        required
                        placeholder="Enter Street Address"
                    ></b-form-input>
                </b-form-group>

                <hr>

                <label for>Personal Fields</label>
                <b-form-group id="input-group-2" label="Your First Name:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.FirstName"
                        required
                        placeholder="Enter first name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your Last Name:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.LastName"
                        required
                        placeholder="Enter Last name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.EmailAddress"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>

                <hr>

                <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                    <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-4">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>-->

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card>
        </b-container>
    </div>
</template>


<script>
import Typeahead from "~/components/UI/UI-Components/Typeahead.vue";

export default {
    pageTitle: "Donate Now",
    layout: "internal",
    components: {
        Typeahead
    },
    data() {
        return {
            // selected: null,
            options: [
                { value: "OH", text: "Ohio" },
                { value: "KY", text: "Kentucky" },
                { value: "IN", text: "Indiana" }
            ],
            form: {
                Donor: {
                    Address: {
                        City: "",
                        Country: "",
                        PostalCode: "",
                        State: null,
                        StreetAddress: ""
                    },
                    EmailAddress: "",
                    FirstName: "",
                    LastName: "",
                    Phone: "",
                    Title: ""
                }
            },
            // food: null,
            // checked: [],
            // foods: [
            //     { text: "Select One", value: null },
            //     "Carrots",
            //     "Beans",
            //     "Tomatoes",
            //     "Corn"
            // ],
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
            this.form.email = "";
            this.form.name = "";
            this.form.food = null;
            this.form.checked = [];
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

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
