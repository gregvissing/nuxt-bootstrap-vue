/* eslint-disable */
<template>
    <div>
        <!-- <input
            v-model="query"
            @click="showModal"
            v-b-modal.modal-xl
            type="text"
            class="SearchInput"
            :placeholder="placeholder"
        >-->
        <input
            @click="showModal"
            v-b-modal.modal-xl
            type="text"
            class="SearchInput"
            :placeholder="placeholder"
        >
        <b-modal
            id="searchModal"
            hide-footer
            cancel-disabled
            size="xl"
            title="Search Funds"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :body-bg-variant="bodyBgVariant"
        >
            <input v-model="query" type="text" class="SearchInput" :placeholder="placeholder">
            <i class="fas fa-times" v-show="showClear" @click="clearSearch"></i>
            <!-- <b-button class="typeahead-button">Search</b-button> -->
            <div id="results-container"></div>
            <transition-group name="fade" tag="ul" class="Results">
                <li v-for="(item, index) in filtered" :key="index+1">
                    <span>
                        <h5>{{ item.title }}</h5>
                        <small v-show="item.desc">
                            <strong>Purpose:</strong>
                            {{ item.desc }}
                        </small>
                    </span>
                    <div class="btn-container clearfix">
                        <b-button block variant="secondary">More Info</b-button>
                        <b-button block variant="primary">Donate Now</b-button>
                    </div>
                </li>
            </transition-group>
            <p v-show="isEmpty">Sorry, but we can't find any match for given term :(</p>
        </b-modal>
    </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

import SearchModal from "~/components/UI/Modal/SearchModal.vue";
// import _ from 'lodash';

export default {
    name: "Typeahead",
    components: {
        SearchModal
    },
    props: {
        // source: {
        //     type: [String, Array],
        //     required: true
        // },
        filterKey: {
            type: String,
            required: true
        },
        startAt: {
            type: Number,
            default: 2
        },
        placeholder: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            items: [],
            query: "",
            areas: [],
            showClear: false,

            bodyBgVariant: "dark",
            headerBgVariant: "dark",
            headerTextVariant: "light"
        };
    },
    mounted() {
        this.fetchItems();
    },
    computed: {
        filtered() {
            if (this.query.length >= 1) {
                this.showClear = true;
            } else {
                this.showClear = false;
            }

            if (this.query.length >= this.startAt) {
                return this.items.filter(item => {
                    if (item.hasOwnProperty(this.filterKey)) {
                        return (
                            item[this.filterKey]
                                .toLowerCase()
                                .indexOf(this.query.toLowerCase()) > -1
                        );
                    } else {
                        console.error(
                            `Seems like property you passed down ${
                                this.filterKey
                            } doesn't exist on object ! `
                        );
                    }
                });
            }
        },
        isEmpty() {
            if (typeof this.filtered === "undefined") {
                return false;
            } else {
                return this.filtered.length < 1;
            }
        }
    },
    methods: {
        fetchItems() {
            var vm = this;
            axios
                .get(
                    // "https://foundation.uc.edu/WebApi/Query/40664e66-2729-4b1a-8cea-964b987c0833"
                    "https://foundation.uc.edu/WebApi/Query/d968555d-dea8-4c1a-9b5c-4e3be2d750be"
                )
                .then(response => {
                    this.rows = [...Object.values(response.data.Rows)];
                    // console.log(this.rows);
                    // var topLevelAll = [];
                    var fundMaster = [];
                    var areaMaster = [];
                    $.each(this.rows, function() {
                        // define values
                        var values = this.Values;
                        var target = values[1]; // Fund names
                        var splitter = target.split("\\");
                        if (splitter.length > 1) {
                            splitter.shift();
                        }
                        splitter.push(values[4]); // Descriptions

                        var area = values[8];
                        areaMaster.push(area);

                        // topLevelAll.push(splitter[0]);
                        fundMaster.push(splitter);
                    });

                    function onlyUnique(value, index, self) {
                        return self.indexOf(value) === index;
                    }
                    var topLevelUnique = areaMaster.filter(onlyUnique);
                    // console.log(topLevelUnique);
                    vm.areas = topLevelUnique;

                    function multiDimensionalUnique(arr) {
                        var uniques = [];
                        var itemsFound = {};
                        for (var i = 0, l = arr.length; i < l; i++) {
                            var stringified = JSON.stringify(arr[i]);
                            if (itemsFound[stringified]) {
                                continue;
                            }
                            if (arr[i][0].length != 0) {
                                uniques.push(arr[i]);
                            }
                            itemsFound[stringified] = true;
                        }
                        return uniques;
                    }
                    var uniqueFunds = multiDimensionalUnique(fundMaster);

                    var fundArr = [];
                    $.each(uniqueFunds, function(x, subFund) {
                        var fundRowData = {
                            title: subFund[0],
                            desc: subFund[1],
                            titledesc: subFund[0] + " " + subFund[1]
                        };
                        fundArr.push(fundRowData);
                    });
                    // console.log(fundArr);
                    this.items = fundArr;
                });
        },
        reset() {
            this.query = "";
            this.showClear = false;
        },
        clearSearch() {
            this.showClear = false;
            this.query = "";
        },
        showModal(item) {
            // this.selectedFund = item;
            this.$root.$emit("bv::show::modal", "searchModal");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.fa-times {
    position: absolute;
    right: 4%;
    top: 35px;
    margin: 0;
    font-size: 1.5em;
    cursor: pointer;
}

.SearchInput {
    display: inline-block;
    width: 100% !important;
    padding: 1.5em 1em !important;
    font-size: 1em !important;
    outline: 0 !important;
    border: 5px solid #000 !important;
    color: #000;

    border-radius: 0;
    border: none;
    /* width: 75%; */
    display: inline-block;
    vertical-align: top;
    height: 44px;
    padding-top: 8px;
    font-size: 2rem;
}

.typeahead-button {
    width: 24%;
    display: inline-block;
    height: 44px;
    border: none;
    font-size: 1.25rem;
    /* font-family: "proxima-nova-b",sans-serif; */
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #fff;
    background-color: $black;
}

.Results {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: left;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 100;
    height: 80vh;
    overflow: auto;
    li {
        /* background: rgba(53, 73, 94, 0.5); */
        background-color: #eee;
        margin: 0;
        padding: 1em;
        list-style: none;
        width: 100%;
        border-bottom: 1px solid #394e62;
        transition: ease-in-out 0.5s;
        position: relative;
        span {
            width: 79%;
            display: inline-block;
            vertical-align: top;
            h5 {
                margin: 0;
            }
        }
        .btn-container {
            width: 20%;
            display: inline-block;
            button {
                vertical-align: top;
            }
            &:after {
                content: "";
                clear: both;
            }
        }
    }
}

.clearfix {
    &:after {
        content: "";
        clear: both;
        display: table;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.home {
    input {
        padding: 0.5em 1em !important;
    }
}
</style>

