<template>
    <div>
        <b-container class="main">
            <p>Your support of the University of Cincinnati and UC Health changes lives. From creating vital student scholarships to funding leading-edge research to providing for world-class patient care, our donors make a difference. Browse our Areas to Support database to see where you can make an impact at UC and UC Health.</p>

            <nuxt-link to="/donation-now/">Donation Form</nuxt-link>
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
                                autocomplete="off"
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
                        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
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

                <label for>
                    <strong>Gift Fields</strong>
                </label>
                <!-- Designations -->
                <b-form-row>
                    <b-col>
                        <label for>Designations (Amount - Designation ID)</label>
                        <div v-for="(designation, index) in form.Gift.Designations" :key="index">
                            <p>${{ designation.Amount }} - {{ designation.DesignationId }}</p>
                        </div>
                    </b-col>
                </b-form-row>

                <!-- Finder Number -->
                <b-form-row>
                    <b-col>
                        <b-form-group id="input-group-2" label="Finder Number:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.Gift.FinderNumber"
                                required
                                placeholder="Enter Finder Number"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="input-group-2" label="Source Code:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.Gift.SourceCode"
                                required
                                placeholder="Enter Source Code"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="input-group-2" label="Is Anonymous?:" label-for="input-2">
                            <b-form-checkbox
                                v-model="form.Gift.IsAnonymous"
                                name="check-button"
                                switch
                            >
                                Switch Checkbox
                                <b>(Checked: {{ form.Gift.IsAnonymous }})</b>
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <!-- Payment Method -->
                <b-form-row>
                    <b-col>
                        <b-form-group
                            id="input-group-2"
                            label="Payment Method:"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                v-model="form.Gift.PaymentMethod"
                                required
                                placeholder="Enter Payment Method"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="input-group-2" label="Comments:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.Gift.Comments"
                                required
                                placeholder="Enter Comments"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                            id="input-group-2"
                            label="Create Gift Aid Declaration:"
                            label-for="input-2"
                        >
                            <b-form-checkbox
                                v-model="form.Gift.CreateGiftAidDeclaration"
                                name="check-button"
                                switch
                            >
                                Switch Checkbox
                                <b>(Checked: {{ form.Gift.CreateGiftAidDeclaration }})</b>
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <!-- Attributes -->
                <b-form-row>
                    <b-col>
                        <label for>Attributes (AttributeId - Value)</label>
                        <div v-for="(attribute, index) in form.Gift.Attributes" :key="index">
                            <p>{{ attribute.AttributeId }} - {{ attribute.Value }}</p>
                        </div>
                    </b-col>
                </b-form-row>

                <!-- Recurrence -->
                <b-form-row>
                    <b-col cols="4">
                        <b-form-group id="input-group-2" label="Day Of Month:" label-for="input-2">
                            <b-form-select
                                v-model="form.Gift.Recurrence.DayOfMonth"
                                :options="daysOfMonth"
                                class="mb-0"
                            >
                                <!-- This slot appears above the options from 'options' prop -->
                                <template slot="first">
                                    <option :value="null" disabled>-- Please select an option --</option>
                                </template>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group id="input-group-2" label="Day Of Week:" label-for="input-2">
                            <b-form-select
                                v-model="form.Gift.Recurrence.DayOfWeek"
                                :options="daysOfWeek"
                                class="mb-0"
                            >
                                <!-- This slot appears above the options from 'options' prop -->
                                <template slot="first">
                                    <option :value="null" disabled>-- Please select an option --</option>
                                </template>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group id="input-group-2" label="Frequency:" label-for="input-2">
                            <b-form-select
                                v-model="form.Gift.Recurrence.Frequency"
                                :options="frequency"
                                class="mb-0"
                            >
                                <!-- This slot appears above the options from 'options' prop -->
                                <template slot="first">
                                    <option :value="null" disabled>-- Please select an option --</option>
                                </template>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <label for>Start Date</label>
                        <b-form-input v-model="form.Gift.Recurrence.StartDate" type="date"></b-form-input>
                    </b-col>
                    <b-col cols="4">
                        <label for>End Date</label>
                        <b-form-input v-model="form.Gift.Recurrence.EndDate" type="date"></b-form-input>
                    </b-col>
                </b-form-row>
                <hr>
                <!-- Tribute -->
                <b-form-row>
                    <b-col>
                        <b-form-group id="input-group-2" label="Tribute:" label-for="input-2">
                            <b-form-checkbox v-model="tribute" name="check-button" switch>
                                Switch Checkbox
                                <b>(Checked: {{ tribute }})</b>
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <b-form-row v-show="tribute">
                    <b-col cols="4">
                        <b-form-group id="input-group-2" label="Zip Code:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                class="zip"
                                v-model="form.Gift.Tribute.Acknowledgee.PostalCode"
                                required
                                placeholder="Enter Zip Code"
                                autocomplete="off"
                            ></b-form-input>
                            <p class="zip-error">Not a real zip code.</p>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <b-form-row v-show="tribute">
                    <!-- City -->
                    <b-col cols="6">
                        <b-form-group id="input-group-2" label="City:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.Gift.Tribute.Acknowledgee.City"
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
                                v-model="form.Gift.Tribute.Acknowledgee.State"
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
                                v-model="form.Gift.Tribute.Acknowledgee.Country"
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
                                v-model="form.Gift.Tribute.Acknowledgee.AddressLines"
                                required
                                placeholder="Enter Street Address"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group
                            id="input-group-2"
                            cols="4"
                            label="First Name:"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                v-model="form.Gift.Tribute.TributeDefinition.FirstName"
                                required
                                placeholder="Enter first name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group
                            id="input-group-2"
                            cols="4"
                            label="Last Name:"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                v-model="form.Gift.Tribute.TributeDefinition.LastName"
                                required
                                placeholder="Enter Last name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group
                            id="input-group-2"
                            cols="4"
                            label="Description:"
                            label-for="input-2"
                        >
                            <b-form-textarea
                                id="textarea"
                                v-model="form.Gift.Tribute.TributeDefinition.Description"
                                placeholder="Enter Description"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label="Tribute Type">
                            <b-form-radio-group
                                id="radio-group-1"
                                v-model="form.Gift.Tribute.TributeDefinition.Type"
                                :options="tributeTypes"
                                name="radio-options"
                            ></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col cols="3">
                        <b-form-group id="input-group-2" label="Tribute ID:" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.Gift.Tribute.TributeId"
                                required
                                placeholder="Enter Tribute ID"
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
        </b-container>
    </div>
</template>


<script>
import $ from "jquery";
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
            error: "",
            city: " ",
            tribute: false,
            tributeTypes: [
                { value: "Tribute", text: "In Honor of" },
                { value: "Memorium", text: "In Memorium" }
            ],
            frequency: [
                { value: "1", text: "Weekly" },
                { value: "2", text: "Monthly" },
                { value: "3", text: "Quarterly" },
                { value: "4", text: "Annually" },
                { value: "7", text: "Every 4 weeks" }
            ],
            daysOfMonth: [
                { value: "1", text: "1" },
                { value: "2", text: "2" },
                { value: "3", text: "3" },
                { value: "4", text: "4" },
                { value: "5", text: "5" },
                { value: "6", text: "6" },
                { value: "7", text: "7" },
                { value: "8", text: "8" },
                { value: "9", text: "9" },
                { value: "10", text: "10" },
                { value: "11", text: "11" },
                { value: "12", text: "12" },
                { value: "13", text: "13" },
                { value: "14", text: "14" },
                { value: "15", text: "15" },
                { value: "16", text: "16" },
                { value: "17", text: "17" },
                { value: "18", text: "18" },
                { value: "19", text: "19" },
                { value: "20", text: "20" },
                { value: "21", text: "21" },
                { value: "22", text: "22" },
                { value: "23", text: "23" },
                { value: "24", text: "24" },
                { value: "25", text: "25" },
                { value: "26", text: "26" },
                { value: "27", text: "27" },
                { value: "28", text: "28" },
                { value: "29", text: "29" },
                { value: "30", text: "30" },
                { value: "31", text: "31" }
            ],

            daysOfWeek: [
                { value: "0", text: "Sunday" },
                { value: "1", text: "Monday" },
                { value: "2", text: "Tuesday" },
                { value: "3", text: "Wednesday" },
                { value: "4", text: "Thursday" },
                { value: "5", text: "Friday" },
                { value: "6", text: "Saturday" }
            ],

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
                },
                Gift: {
                    Designations: [
                        {
                            Amount: 5,
                            DesignationId:
                                "3439a5c7-9977-4f9c-ba11-fadfb8144d35"
                        },
                        {
                            Amount: 15,
                            DesignationId:
                                "3439a5c7-9977-4f9c-ba11-fadfb8144d35"
                        }
                    ],
                    FinderNumber: 0,
                    SourceCode: "Sample Source Code",
                    IsAnonymous: false,
                    PaymentMethod: 1,
                    Comments: "Gift comments here.",
                    CreateGiftAidDeclaration: false,
                    Attributes: [
                        {
                            AttributeId: "BD18B3FD-B382-4183-A415-8F84B1E0E411",
                            Value: "Volunteer;Member;Alumni"
                        },
                        {
                            AttributeId: "3607C77D-19DC-4EE0-A0CD-A352762A8EF0",
                            Value: "1985"
                        }
                    ],
                    Recurrence: {
                        DayOfMonth: 26,
                        DayOfWeek: null,
                        EndDate: null,
                        Frequency: 2,
                        Month: null,
                        StartDate: "/Date(1337227200000-0400)/"
                    },
                    Tribute: {
                        Acknowledgee: {
                            AddressLines: "123 Sunset ln.",
                            City: "Charleston",
                            Country: "USA",
                            Email: "email@address.com",
                            FirstName: "Jane",
                            LastName: "Doe",
                            Phone: "123-123-1234",
                            PostalCode: "29482",
                            State: "SC"
                        },
                        TributeDefinition: {
                            Description: "New tribute",
                            FirstName: "John",
                            LastName: "Hancock",
                            Type: "Tribute"
                        },
                        TributeId: null
                    }
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
                        $(".zip-error").slideDown();
                        // $(".error").addClass("no");
                    } else {
                        self.form.Donor.Address.City = result.city;
                        self.form.Donor.Address.State = result.state;
                        self.form.Donor.Address.Country = result.country;
                        $(".cityState").slideDown();
                        $(".zip-error").slideUp();
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
