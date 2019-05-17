<template>
    <main class="capsule">
        <!-- <app-masthead/> -->
        <div class="contain">
            <!-- <app-sidebar :pricerange.sync="highprice"/> -->
            <transition-group name="items" tag="section" class="content">
                <app-item
                    v-for="(item, index) in products"
                    :key="index"
                    :item="item"
                    :index="index"
                />
            </transition-group>
        </div>
    </main>
</template>

<script>
// import AppSidebar from "~/components/cart/AppSidebar.vue";
// import AppMasthead from "~/components/cart/AppMasthead.vue";
import AppItem from "~/components/cart/AppItem.vue";

export default {
    pageTitle: "Shopping Cart",
    layout: "shopping",
    components: {
        // AppSidebar,
        // AppMasthead,
        AppItem
    },
    data() {
        return {
            highprice: 300
        };
    },
    computed: {
        products() {
            return this.$store.state.products.filter(el =>
                this.$store.state.sale
                    ? el.price < this.highprice && el.sale
                    : el.price < this.highprice
            );
        }
        // cart() {
        //     return this.$store.state.cart;
        // },
        // cartTotal() {
        //     return this.$store.state.cartTotal;
        // },
        // total() {
        //     return Object.values(this.cart)
        //         .reduce((acc, el) => acc + el.count * el.price, 0)
        //         .toFixed(2);
        // }
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
    grid-template-columns: repeat(3, 1fr);
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
