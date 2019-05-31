/* eslint-disable */
<template>
    <div>
        <Hero/>

        <Areas :areas="areas"/>

        <FeaturedFunds/>

        <ImpactStories/>
    </div>
</template>

<script>
import $ from "jquery";
import Vuex from "vuex";
import axios from "axios";

import { colleges } from "@/store/data";

import Hero from "~/components/UI/Hero.vue";
import Colleges from "~/components/UI/Colleges.vue";
import Areas from "~/components/UI/Areas.vue";
import FeaturedFunds from "~/components/UI/Funds/FeaturedFunds.vue";
import ImpactStories from "~/components/UI/ImpactStories.vue";

export default {
    scrollToTop: true,
    components: {
        Hero,
        Colleges,
        Areas,
        FeaturedFunds,
        ImpactStories
    },
    computed: {
        loadedFunds() {
            return this.$store.getters.loadedFunds;
        }
    },
    data() {
        return {
            highprice: 300,
            items: [],
            allFunds: [],
            areas: [],
            colleges: colleges
        };
    },
    mounted() {
        // this.fetchItems();
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
                        splitter.push(values[6]); // GUID

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
                            titledesc: subFund[0] + " " + subFund[1],
                            guid: subFund[2]
                        };
                        fundArr.push(fundRowData);
                    });
                    console.log(JSON.stringify(fundArr));
                    this.funds = fundArr;
                    this.items = fundArr;
                });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.main {
    background-image: url("https://www.alumni.uc.edu/image/home-full-width/MM-Geen-3.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-top: 85px;
    @media (max-width: 991px) {
        margin-top: 65px;
    }
}
</style>
