<template>
    <b-container>
        <h1 class="text-center">Colleges</h1>
        <p>Your gift to the UC and UC Health makes an impact where you want. Give to your favorite college, program or department, or contribute to the university’s most pressing needs.</p>

        <div class="marquee">
            <b-form-group class="college-container">
                <b-form-radio-group
                    id="radio-group-colleges"
                    class="college"
                    v-model="selected"
                    :options="alphaColleges"
                    name="college-radio-options"
                    buttons
                    button-variant="outline-primary"
                    @click="showModal(college)"
                ></b-form-radio-group>
            </b-form-group>
        </div>
    </b-container>
</template>

<script>
import _ from "lodash";
import { colleges } from "@/store/data";

export default {
    name: "areas",
    props: {
        colleges: {
            type: Array,
            default: ""
        }
    },
    computed: {
        alphaColleges() {
            return _.orderBy(colleges, "title");
        }
    },
    data() {
        return {
            selected: ""
        };
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.college-container {
    text-align: center;
    > div {
        margin: 0 auto;
        text-align: center;
        width: inherit;
        display: inline-block;

        label {
            float: left;
        }
    }
}

.container {
    padding: 2em 15px;
    h1 {
        font-family: "Bree Serif";
    }
    .marquee {
        padding: 1% 0% 3% 0%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        text-align: center;
        overflow-y: scroll;
        .slideitem {
            -webkit-transition: all 0.15s ease;
            transition: all 0.15s ease;
            a {
                text-decoration: none;
                img {
                    vertical-align: middle;
                }
                h4 {
                    color: $black;
                    text-transform: capitalize;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    line-height: 1.5;
                }
            }
        }
        .college {
            > label {
                position: relative;
                width: 200px;
                input {
                    position: absolute;
                }
                > span {
                    position: absolute;
                    top: 50%;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
