<template>
    <main class="capsule">
        <!-- <app-masthead/> -->
        <div class="contain">
            <!-- <app-sidebar :pricerange.sync="highprice"/> -->
            <!-- <Amounts/> -->

            <transition-group name="items" tag="section" class="content">
                <app-item
                    v-for="(item, index) in products"
                    :key="index"
                    :item="item"
                    :index="index"
                />
            </transition-group>
        </div>

        <div>
            <div v-if="cartTotal > 0">
                <h1>Cart</h1>
                <div class="cartitems" v-for="(item, index) in cart" :key="index">
                    <div class="carttext">
                        <h4>{{ item.name }}</h4>
                        <p>{{ item.price | usdollar }} x {{ item.count }}</p>
                        <p>
                            Total for this item:
                            <strong>{{ item.price * item.count }}</strong>
                        </p>
                    </div>
                    <!-- <img class="cartimg" :src="`/${item.img}`" :alt="`Image of ${item.name}`"> -->
                </div>
                <div class="total">
                    <h3>Total: {{ total | usdollar }}</h3>
                </div>
                <!-- <app-checkout :total="total" @successSubmit="success = true"></app-checkout> -->
            </div>

            <div v-else class="empty">
                <h1>Cart</h1>
                <h3>Your cart is empty.</h3>
                <nuxt-link exact to="/">
                    <button>Fill er up!</button>
                </nuxt-link>
            </div>
        </div>
    </main>
</template>

<script>
// import AppSidebar from "~/components/cart/AppSidebar.vue";
// import AppMasthead from "~/components/cart/AppMasthead.vue";
import AppItem from "~/components/cart/AppItem.vue";

import Amounts from "~/components/cart/Amounts.vue";

export default {
    pageTitle: "Shopping Cart",
    layout: "shopping",
    components: {
        // AppSidebar,
        // AppMasthead,
        AppItem,
        Amounts
    },
    props: {
        // total: {
        //     type: [Number, String],
        //     default: "50.00"
        // },
        success: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            highprice: 300
            // success: false
        };
    },
    methods: {
        addNewDashboard: function(name, category) {
            alert("New function: Name: " + name + " Category: " + category);
        },
        duplicateDashboard: function(name, category) {
            alert(
                "Duplicate function: Name: " + name + " Category: " + category
            );
        }
    },
    computed: {
        products() {
            return this.$store.state.products.filter(el =>
                this.$store.state.sale
                    ? el.price < this.highprice && el.sale
                    : el.price < this.highprice
            );
        },
        cart() {
            return this.$store.state.cart;
        },
        cartTotal() {
            return this.$store.state.cartTotal;
        },
        total() {
            return Object.values(this.cart)
                .reduce((acc, el) => acc + el.count * el.price, 0)
                .toFixed(2);
        }
    },
    filters: {
        usdollar: function(value) {
            return `$${value}`;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

/* no grid support */
aside {
    float: left;
    width: 19.1489%;
}
.content {
    /*no grid support*/
    float: right;
    width: 79.7872%;
    /* grid */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    padding: 0 !important;
}
@supports (display: grid) {
    .capsule > * {
        width: auto;
        margin: 0;
    }
}
</style>
