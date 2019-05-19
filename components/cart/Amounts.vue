<template>
    <div>
        <b-form-group label="Make A Gift">
            <b-form-radio-group
                id="amounts"
                v-model="selected"
                :options="options"
                buttons
                button-variant="primary"
                size="lg"
                name="radio-btn-outline"
                @click="!showOther"
            >
                <!-- <b-button @click="showInput">
                    Other
                    <br>Amount
                    <b-form-input v-if="showOther" v-model="selected" placeholder="Other Amount"></b-form-input>
                    <div v-else></div>
                </b-button>-->
            </b-form-radio-group>
            <!-- <b-form-input v-model="selected" placeholder="Other Amount"></b-form-input> -->
        </b-form-group>
        Selected: {{selected}}
    </div>
</template>

<script>
import { amounts } from "@/store";

export default {
    props: {
        value: {
            default: ""
        },
        options: {
            type: Array,
            default: () => [...Object.values(amounts), "Other Amount"]
        }
    },
    data() {
        return {
            selected: this.value
        };
    },
    watch: {
        selected: function(val) {
            this.$emit("input", val);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

#amounts {
    padding: 0;
    margin: 0;
    list-style: none;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: space-around;
    label.btn {
        &.active {
            background-color: $black !important;
            border-color: $black !important;
        }
    }
}
</style>
