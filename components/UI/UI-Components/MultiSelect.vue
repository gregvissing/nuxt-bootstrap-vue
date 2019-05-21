<template>
    <div>
        <label class="typo__label">Select with search</label>
        <multiselect
            v-model="value"
            :options="options"
            :custom-label="nameWithLang"
            placeholder="Select one"
            label="name"
            track-by="name"
        ></multiselect>
        <pre class="language-json"><code>{{ value  }}</code></pre>
    </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
    components: {
        Multiselect
    },
    data() {
        return {
            value: { name: "" },
            options: [
                // { name: "Vue.js", language: "JavaScript" },
                // { name: "Rails", language: "Ruby" },
                // { name: "Sinatra", language: "Ruby" },
                // { name: "Laravel", language: "PHP" },
                // { name: "Phoenix", language: "Elixir" }
            ]
        };
    },
    methods: {
        nameWithLang({ name }) {
            return `${name}`;
        }
    },
    created: function() {
        var vm = this;
        const url =
            "https://foundation.uc.edu/WebApi/Query/d968555d-dea8-4c1a-9b5c-4e3be2d750be";
        axios
            .get(url, { responseType: "xml" })
            .then(response => {
                // console.log([...Object.values(response.data.Fields)]);
                this.rows = [...Object.values(response.data.Rows)];
                var fundMaster = [];
                var areaMaster = [];
                var fundLog = [];

                $.each(this.rows, function() {
                    // define values
                    var values = this.Values;
                    var area = values[8];

                    areaMaster.push(area);
                });

                function onlyUnique(value, index, self) {
                    return self.indexOf(value) === index;
                }
                var topLevelUnique = areaMaster.filter(onlyUnique);
                $.each(topLevelUnique, function(x, subFund) {
                    var fundRowData = {
                        name: subFund
                    };
                    fundLog.push(fundRowData);
                });
                console.log(fundLog);

                vm.options = fundLog;
            })
            .catch(error => console.log(error.message, " @@@"));
    }
};
</script>

<style lang="scss" scoped>
</style>
