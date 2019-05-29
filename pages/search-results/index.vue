<template>
    <div class="search-results">
        <div class="search-query-container">
            <p>You searched for: {{ query }}</p>
        </div>

        <div class="typeahead-container">
            <Typeahead filter-key="titledesc" :start-at="2"></Typeahead>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import Typeahead from "~/components/UI/Typeahead.vue";

export default {
    pageTitle: "Search Results",
    scrollToTop: true,
    layout: "internal",
    components: {
        Typeahead
    },
    data() {
        return {
            items: [],
            query: "",
            areas: [],
            showClear: false,
            query: ""
        };
    },
    mounted() {
        console.log(this.$route.query.q);
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
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.search-query-container  {
    background: $red;
    padding: 1rem 2rem;
    p {
        color: $black;
    }
}

</style>
