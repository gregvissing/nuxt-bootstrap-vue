<template>
    <div>
        <b-container class="main">
            <h3>Support the Causes Most Important to You</h3>

            <p>Your gift to the UC and UC Health makes an impact where you want. Give to your favorite college, program or department, or contribute to the university’s most pressing needs.</p>
            <p>UC and UC Health need your private support to continue growing and meeting the needs of students, faculty, researchers, doctors, patients and society. Explore our funding opportunities to determine the best match for your charitable gift.</p>

            <div class="areas-submenu btn-group btn-group-toggle">
                <label
                    class="btn btn-secondary"
                    :class="{ 'select': selected === area.name, '': selected !== area.name }"
                    v-for="(area, index) in areas"
                    :key="index"
                    :item="area.name"
                    @click="changeSelectVal(area.name)"
                >
                    <input type="radio" :value="area.name" name="area-filter" v-model="selected">
                    {{ area.name }}
                </label>
            </div>

            <div class="container">
                <div class="row subareas">
                    <div v-for="(area, index) in areas" :key="index">
                        <div v-if="areaIndex == area.name">
                            <h2>{{ area.name}}</h2>
                            <p>
                                <strong>Description:</strong>
                                <br>
                                {{ area.description }}
                            </p>

                            <b-button
                                v-for="(subarea, index) in area.subareas"
                                :key="index"
                                variant="secondary"
                                @click="showModal(subarea)"
                            >{{ subarea.name }}</b-button>
                        </div>
                    </div>

                    <b-modal
                        id="modal1"
                        hide-footer
                        cancel-disabled
                        size="xl"
                        :title="selectedItem.name"
                    >
                        <h3>About</h3>
                        <p class="my-4">{{ selectedItem.about }}</p>
                        <hr>
                        <h3>Vision</h3>
                        <p class="my-4">{{ selectedItem.vision }}</p>
                        <hr>
                        <h3>Funding Opportunities</h3>
                        <div id="accordion" role="tablist">
                            <b-card
                                no-body
                                class="mb-1"
                                v-for="(fund, index) in selectedItem.fundingOpportunities"
                                :key="index"
                            >
                                <b-card-header header-tag="header" class="p-0" role="tab">
                                    <b-button
                                        block
                                        href="#"
                                        v-b-toggle="'accordion-' + index"
                                        variant="info"
                                    >
                                        <font-awesome-icon icon="plus"/>
                                        {{ fund.name }}
                                    </b-button>
                                </b-card-header>
                                <b-collapse
                                    :id="'accordion-' + index"
                                    accordion="my-accordion"
                                    role="tabpanel"
                                >
                                    <b-card-body>
                                        <b-card-text
                                            v-for="(fund, index) in fund.funds"
                                            :key="index"
                                        >{{ fund.fundName }}</b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </b-modal>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import { areas } from "@/store";

export default {
    name: "areastosupport",
    pageTitle: "Areas to Support",
    layout: "internal",
    data() {
        return {
            areas: areas,
            selected: "Colleges and School",
            areaIndex: "Colleges and School",
            selectedItem: []
        };
    },
    methods: {
        changeSelectVal: function(val) {
            this.areaIndex = val;
        },
        showModal(item) {
            this.selectedItem = item;
            this.$root.$emit("bv::show::modal", "modal1");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.areas-submenu {
    /* position: fixed;
    top: 96px;
    left: 0;
    right: 0; */
    border: 1px solid $black;
    width: 100%;

    label {
        width: 25%;
        border: 1px solid $white;
        box-sizing: border-box;
        background-color: $black;
        padding: 0.5rem 0.75rem;
        @include transition(all 0.4s ease);
        &.select,
        &:hover {
            background-color: $white;
            color: $black;
        }
    }
}
.subareas {
    h2 {
        margin-top: 1rem;
        border-bottom: 3px solid $red;
    }
    label {
        color: $white;
    }
    .subarea,
    button {
        padding: 5px 15px;
        border: 1px solid $black;
        margin-right: 5px;
        margin-bottom: 5px;
        display: inline-block;
        @include transition(all 0.4s ease);
        label {
            margin: 0;
            display: block;
            @include transition(all 0.4s ease);
        }
        &:hover {
            background: $black;
            color: $white;
        }
    }
}
/* .container {
    max-width: 100%;
} */
.areas {
    &.row {
        padding: 2em;
        .col-sm {
            padding: 0;
            .btn {
                padding: 0.5rem 0.75rem;
                width: 100%;
            }
        }
    }
}

/* MODAL styles */
.modal-dialog {
    max-width: 90% !important;
    margin: 1.75rem auto;
    .modal-header {
        .close {
        }
    }
}
</style>
