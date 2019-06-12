<template>
    <span class="label">{{ text }}</span>
</template>
<script>
import { giftTypeValues } from "@/store/data";

export default {
    name: "gift-label",
    props: {
        type: {
            type: String,
            require: true
        }
    },
    computed: {
        text: function() {
            return giftTypeValues[this.type].label;
        },
        color: function() {
            return giftTypeValues[this.type].color;
        }
    }
};
</script>
