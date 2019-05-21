<template>
    <div>
        <section class="section" style="padding-top: .5rem">
            <div class="container">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <horizontal-stepper
                            :steps="demoSteps"
                            @completed-step="completeStep"
                            :top-buttons="true"
                            @active-step="isStepActive"
                            @stepper-finished="alert"
                        ></horizontal-stepper>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import HorizontalStepper from "~/components/UI/Stepper/HorizontalStepper.vue";
import StepGiftType from "~/components/UI/Stepper/StepGiftType.vue";
import StepFundSearch from "~/components/UI/Stepper/StepFundSearch.vue";
import StepPersonalInfo from "~/components/UI/Stepper/StepPersonalInfo.vue";
import StepAddress from "~/components/UI/Stepper/StepAddress.vue";

export default {
    pageTitle: "Donation Now",
    layout: "internal",
    components: {
        HorizontalStepper
    },
    data() {
        return {
            demoSteps: [
                {
                    icon: "attach_money",
                    name: "donation info",
                    title: "Donation Info",
                    subtitle: "Choose Type/Amount",
                    component: StepGiftType,
                    completed: false
                },
                {
                    icon: "list",
                    name: "fund info",
                    title: "Fund",
                    subtitle: "Choose Fund",
                    component: StepFundSearch,
                    completed: false
                },
                {
                    icon: "person",
                    name: "personal details",
                    title: "Personal Details",
                    subtitle: "Enter Your Info",
                    component: StepPersonalInfo,
                    completed: false
                },
                {
                    icon: "location_on",
                    name: "address",
                    title: "Address Info",
                    subtitle: "Enter Your Address",
                    component: StepAddress,
                    completed: false
                }
                // {
                //     icon: "card_giftcard",
                //     name: "third",
                //     title: "Tribute",
                //     // subtitle: "Subtitle sample",
                //     component: StepOne,
                //     completed: false
                // }
            ],
            activeStep: 0
        };
    },
    computed: {},
    methods: {
        completeStep(payload) {
            this.demoSteps.forEach(step => {
                if (step.name === payload.name) {
                    step.completed = true;
                }
            });
        },
        isStepActive(payload) {
            this.demoSteps.forEach(step => {
                if (step.name === payload.name) {
                    if (step.completed === true) {
                        step.completed = false;
                    }
                }
            });
        },
        alert(payload) {
            alert("end");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

/* #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
} */
.pointer {
    cursor: pointer;
}
h1,
h2 {
    font-weight: normal;
}
hr {
    background-color: transparent;
    border: none;
    display: block;
    height: inherit;
    margin: 1.5rem 0;
    border-top: dashed 1px;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #0b99b9;
    text-decoration: underline;
}
.text-medium-grey {
    color: #333;
}
.text-light-grey {
    color: #888;
}

.box.formated {
    position: relative;
    padding: 0;
    .heading {
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.8rem 1.5rem;
        background-color: #fafafa;
    }
    .content {
        padding: 1rem 2rem;
    }
}
i.top-left {
    position: absolute;
    left: 1.5rem;
    top: 0.8rem;
}
.vertical-separator {
    display: flex;
    justify-content: space-around;
    .line {
        border-right: 1px solid #cccccc;
    }
}
</style>
