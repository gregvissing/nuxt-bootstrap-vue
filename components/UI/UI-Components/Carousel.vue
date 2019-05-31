<template>
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
        <div class="card-carousel">
            <div class="card-carousel--overflow-container">
                <div
                    class="card-carousel-cards"
                    :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
                >
                    <div
                        class="card-carousel--card text-center"
                        v-for="(college, index) in alphaColleges"
                        :key="index"
                    >
                        <font-awesome-icon
                            size="2x"
                            :icon="college.icon"
                            :style="{ color: college.color }"
                        />
                        <div class="card-carousel--card--footer">
                            <p>{{ college.text }}</p>
                        </div>
                        <b-button variant="primary" @click="showModal(college)">View Funds</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>

        <b-modal
            id="modalCollege"
            hide-footer
            cancel-disabled
            size="lg"
            :title="selectedCollege.text"
        >
            <p class="my-4">
                <strong>Description:</strong>
                {{ selectedCollege.text }}
            </p>
            {{selectedCollege.column}}
            <ul>
                <li v-for="(fund, index) in alphaFunds" :key="index">
                    <a :href="'https://foundation.uc.edu/donate?id=' + fund.guid">{{ fund.title }}</a>
                    - {{ fund.college }}
                </li>
            </ul>

            <!-- <div class="btn-container text-center">
                <a :href="'https://foundation.uc.edu/donate?id=' + selectedCollege.guid" class="btn btn-primary">Donate Now</a>
            </div>-->
        </b-modal>
    </div>
</template>

<script>
import _ from "lodash";
import { colleges } from "@/store/data";
import { funds } from "@/store/data";

export default {
    name: "carousel",
    data() {
        return {
            currentOffset: 0,
            windowSize: 3,
            paginationFactor: 220,
            items: [
                { name: "Tycoon Thai", tag: "Thai" },
                { name: "Ippudo", tag: "Japanese" },
                { name: "Milano", tag: "Pizza" },
                { name: "Tsing Tao", tag: "Chinese" },
                { name: "Frances", tag: "French" },
                { name: "Burma Superstar", tag: "Burmese" },
                { name: "Salt and Straw", tag: "Ice cream" }
            ],
            selectedCollege: [],
            funds: funds,
            colleges: []
        };
    },
    computed: {
        atEndOfList() {
            return (
                this.currentOffset <=
                this.paginationFactor *
                    -1 *
                    (this.alphaColleges.length - this.windowSize)
            );
        },
        atHeadOfList() {
            return this.currentOffset === 0;
        },
        alphaColleges() {
            return _.orderBy(colleges, "text");
        },
        alphaFunds() {
            let result = funds;

            // var fundObject = _.uniqBy(funds, "title");

            var fundArray = _.uniqBy(result, "title");
            var collegeValues = [];
            if (collegeValues != "") {
                collegeValues = this.selectedCollege.column;
            }

            result = result.filter(
                ({ college }) => this.colleges.indexOf(college) !== -1
            );

            return _.orderBy(result, "title");
        }
    },
    methods: {
        moveCarousel(direction) {
            // Find a more elegant way to express the :style. consider using props to make it truly generic
            if (direction === 1 && !this.atEndOfList) {
                this.currentOffset -= this.paginationFactor;
            } else if (direction === -1 && !this.atHeadOfList) {
                this.currentOffset += this.paginationFactor;
            }
        },
        showModal(item) {
            this.selectedCollege = item;

            this.colleges = this.selectedCollege.column;

            this.$root.$emit("bv::show::modal", "modalCollege");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

$vue-navy: #2c3e50;
$vue-navy-light: #3a5169;
$vue-teal: #42b883;
$vue-teal-light: #42b983;
$gray: #666a73;
$light-gray: #f8f8f8;

.card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    color: $gray;
    .card-carousel {
        display: flex;
        justify-content: center;
        width: 100%;

        &--overflow-container {
            overflow: hidden;
        }

        &--nav__left,
        &--nav__right {
            display: inline-block;
            width: 15px;
            height: 15px;
            padding: 10px;
            box-sizing: border-box;
            border-top: 2px solid $red;
            border-right: 2px solid $red;
            cursor: pointer;
            margin: 0 10px;
            transition: transform 150ms linear;
            &[disabled] {
                opacity: 0.2;
                border-color: $black;
            }
        }

        &--nav__left {
            transform: rotate(-135deg);
            &:active {
                transform: rotate(-135deg) scale(0.9);
            }
        }

        &--nav__right {
            transform: rotate(45deg);
            &:active {
                transform: rotate(45deg) scale(0.9);
            }
        }
        .card-carousel-cards {
            display: flex;
            transition: transform 150ms ease-out;
            transform: translatex(0px);

            .card-carousel--card {
                margin: 0 10px;
                cursor: pointer;
                /* box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), */
                /* 0 2px 2px 0 rgba(40, 44, 53, 0.08); */
                background-color: $white;
                border-radius: 4px;
                z-index: 3;
                margin-bottom: 2px;
                position: relative;
                padding-bottom: 2rem;
                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }

                /* img {
                    vertical-align: bottom;
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                    transition: opacity 150ms linear;
                    user-select: none;

                    &:hover {
                        opacity: 0.5;
                    }
                } */

                &--footer {
                    border-top: 0;
                    padding: 7px 15px;

                    p {
                        padding: 3px 0;
                        margin: 0;
                        margin-bottom: 2px;
                        font-size: 19px;
                        font-weight: 500;
                        color: $black;
                        user-select: none;

                        &:nth-of-type(2) {
                            font-size: 12px;
                            font-weight: 300;
                            padding: 6px;
                            background: rgba(40, 44, 53, 0.06);
                            display: inline-block;
                            position: relative;
                            margin-left: 4px;
                            color: $gray;

                            &:before {
                                content: "";
                                float: left;
                                position: absolute;
                                top: 0;
                                left: -12px;
                                width: 0;
                                height: 0;
                                border-color: transparent rgba(40, 44, 53, 0.06)
                                    transparent transparent;
                                border-style: solid;
                                border-width: 12px 12px 12px 0;
                            }

                            &:after {
                                content: "";
                                position: absolute;
                                top: 10px;
                                left: -1px;
                                float: left;
                                width: 4px;
                                height: 4px;
                                border-radius: 2px;
                                background: white;
                                box-shadow: -0px -0px 0px #004977;
                            }
                        }
                    }
                }
                button {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 0.375rem 0.13rem !important;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
