<template>
    <main class="capsule">
        <!-- <app-masthead/> -->
        <div class="contain">
            <!-- <app-sidebar :pricerange.sync="highprice"/> -->
            <Amounts/>

            <!-- <NewModal
                :show="showNewDashboardModal"
                @close="showNewDashboardModal = false"
                @ok="addNewDashboard"
            ></NewModal>

            <NewModal
                :show="showDuplicateDashboardModal"
                @close="showDuplicateDashboardModal = false"
                @ok="duplicateDashboard"
            ></NewModal>

            <button v-on:click="showNewDashboardModal = true">New</button>
            <button v-on:click="showDuplicateDashboardModal = true">Copy</button>-->

            <!-- <button type="button" class="btn btn-secondary" @click="showModal">Open Modal!</button>

            <AlligatorModal v-show="isModalVisible" @close="closeModal">
                <h5 slot="header" class="modal-title">Custom Moda Title here!</h5>
            </AlligatorModal>-->

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

import Amounts from "~/components/cart/Amounts.vue";

import NewModal from "~/components/UI/Modal/NewModal.vue";
import AlligatorModal from "~/components/UI/Modal/AlligatorModal.vue";

export default {
    pageTitle: "Shopping Cart",
    layout: "shopping",
    components: {
        // AppSidebar,
        // AppMasthead,
        AppItem,
        Amounts,

        NewModal,
        AlligatorModal
    },
    data() {
        return {
            highprice: 300,

            showNewDashboardModal: false,
            showDuplicateDashboardModal: false,

            isModalVisible: false
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
        },

        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
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
