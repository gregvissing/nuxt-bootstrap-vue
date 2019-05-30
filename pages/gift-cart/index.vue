<template>
    <div>
        <b-container>
            <h1>Welcome to the Gift Cart</h1>
            <!-- {{ loadedFunds }} -->
            <GiftCart :cart="shoppingCart" :total="totalAmount"></GiftCart>

            <section class="items-container">
                <Fund v-for="product in products" :key="product.key" :item="product"></Fund>
            </section>
        </b-container>
    </div>
</template>

<script>
import Fund from "~/components/UI/GiftCart/Fund.vue";
import GiftCart from "~/components/UI/GiftCart/GiftCart.vue";

export default {
    pageTitle: "Gift Cart",
    scrollToTop: true,
    layout: "internal",
    components: {
        Fund,
        GiftCart
    },
    computed: {
        shoppingCart() {
            return this.$store.state.cart;
        },
        products() {
            return this.$store.state.items;
        },
        totalAmount() {
            return this.$store.getters.total;
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
