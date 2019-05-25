<template>
    <div class="item">
        <p>{{ item.name }}</p>
        <p>{{ item.description }}</p>
        <!-- <span class="salepill" v-if="item.sale">Sale</span> -->
        <!-- <img :src="`/${item.img}`" :alt="`Image of ${item.name}`"> -->
        <Amounts v-model="donation"/>
        {{ this.donation }}
        <p>{{ item.price | usdollar }}</p>
        <button class="add btn btn-primary" @click="addItem">Add Fund</button>
    </div>
</template>

<script>
import { amounts } from "@/store";
import Amounts from "~/components/cart/Amounts.vue";

export default {
    name: "item",
    props: {
        item: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            donation: ""
        };
    },
    components: {
        Amounts
    },
    watch: {
        donation() {
            console.log("changed!" + this.donation);
        }
    },
    filters: {
        usdollar: function(value) {
            return `$${value}`;
        }
    },
    methods: {
        addItem() {
            this.$store.commit("addItem", this.item);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.item {
    border-radius: 5px;
    padding: 20px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.salepill {
    background: $black;
    color: white;
    font-family: "Barlow", sans-serif;
    position: absolute;
    right: 30px;
    top: 60px;
    padding: 2px 10px 4px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    border-radius: 1000px;
}

p {
    font-size: 18px;
}
</style>
