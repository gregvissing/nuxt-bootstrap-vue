/* eslint-disable */
import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state: {
            items: [{
                    id: 1,
                    name: 'Chelsea boots',
                    sizes: [3, 4, 5, 6, 7, 8],
                    price: 45,
                    image: "https://via.placeholder.com/140x100"
                },
                {
                    id: 2,
                    name: 'Knitted sock boots',
                    sizes: [3, 4, 5, 6, 7, 8],
                    price: 80,
                    image: "https://via.placeholder.com/140x100"
                },
                {
                    id: 3,
                    name: 'Square toe ankle boots',
                    sizes: [4, 5, 7, 8],
                    price: 40,
                    image: "https://via.placeholder.com/140x100"
                },
                {
                    id: 4,
                    name: 'Chunky Chelsea boots',
                    sizes: [3, 4, 5, 6, 7],
                    price: 60,
                    image: "https://via.placeholder.com/140x100"
                },
                {
                    id: 5,
                    name: 'Patent ankle boots',
                    sizes: [3, 4, 5, 8],
                    price: 70,
                    image: "https://via.placeholder.com/140x100"
                },
                {
                    id: 6,
                    name: 'Black studded Chelsea Boots',
                    sizes: [8],
                    price: 100,
                    image: "https://via.placeholder.com/140x100"
                },
            ],
            cart: [],

            amount: "",
            loadedFunds: [],

            // Donation page
            Donor: {
                Address: {
                    City: "",
                    Country: "",
                    PostalCode: "",
                    State: "",
                    StreetAddress: ""
                },
                Title: "",
                FirstName: "",
                FastName: "",
                Phone: "",
                EmailAddress: "",

            }
        },
        mutations: {
            addToCart(state, payload) {
                return state.cart.push(payload);
            },
            setFunds(state, funds) {
                state.loadedFunds = funds;
            },
        },
        actions: {
            add(context) {
                context.commit('add')
            },

            nuxtServerInit({
                vuexContext,
                context
            }, {
                req
            }) {
                axios
                    .get(
                        "https://foundation.uc.edu/WebApi/Query/d968555d-dea8-4c1a-9b5c-4e3be2d750be"
                    )
                    .then(response => {
                        const rows = [];
                        rows = [...Object.values(response.data.Rows)];
                        // console.log(rows);

                        // var topLevelAll = [];
                        var fundMaster = [];
                        var areaMaster = [];
                        $.each(rows, function () {
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
                        console.log(topLevelUnique);

                        // vm.areas = topLevelUnique;

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
                        $.each(uniqueFunds, function (x, subFund) {
                            var fundRowData = {
                                title: subFund[0],
                                desc: subFund[1],
                                titledesc: subFund[0] + " " + subFund[1]
                            };
                            fundArr.push(fundRowData);
                        });

                        vuexContext.commit('setFunds', fundArr);
                        this.funds = fundArr;
                        this.items = fundArr;
                    });
            },
            setFunds(vuexContext, funds) {
                vuexContext.commit('setFunds', funds)
            }
        },
        getters: {
            total: state => {
                if (state.cart.length > 0) {
                    return state.cart.map(item => item.price).reduce((total, amount) => total + amount);
                } else {
                    return 0;
                }
            },
            loadedFunds(state) {
                return state.loadedFunds
            }
        }
    });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);
