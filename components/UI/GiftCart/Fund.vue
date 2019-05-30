<template>
    <div class="Item">
        <div class="image">
            <img :src="item.image">
            <p class="item-name">{{item.name}}</p>
            <p class="item-price">${{item.price}}</p>
        </div>

        <div class="button-container">
            <div id="ItemSizePicker">
                <p>Pick a size</p>
                <select v-model="size">
                    <option v-for="size in this.item.sizes" :key="size">{{size}}</option>
                </select>
            </div>

            <div id="ItemAddButton">
                <button @click="addToCart(item)">Add To Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "item",
    props: ["item"],
    data() {
        return {
            size: ""
        };
    },
    methods: {
        addToCart(item) {
            if (this.size !== "") {
                this.$store.commit({
                    type: "addToCart",
                    id: item.id,
                    shoe: item.name,
                    size: this.size,
                    price: item.price
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
