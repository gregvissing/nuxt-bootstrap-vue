<template>
    <div>
        <b-container class="main">
            <!-- <h1 class="page-title">Why Give</h1> -->
            <p>Your support of the University of Cincinnati and UC Health changes lives. From creating vital student scholarships to funding leading-edge research to providing for world-class patient care, our donors make a difference. Browse our Areas to Support database to see where you can make an impact at UC and UC Health.</p>
            <hr>
        </b-container>
        <b-container>
            <ul class="cards">
                <li class="cards__item" v-for="(card, index) in cards" :key="index">
                    <div class="card">
                        <div class="card__content">
                            <div class="card__title">{{ card.title }}</div>
                            <p class="card__text">{{ card.text }}</p>
                            <button class="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </li>
            </ul>

            <!-- <b-card-group deck>
                <b-card title="Stories">
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                    <div slot="footer" class="text-center">
                        <b-button size="lg" class="mr-4" variant="primary" href="#">View Details</b-button>
                    </div>
                </b-card>

                <b-card title="Photos and Videos">
                    <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
                    <div slot="footer" class="text-center">
                        <b-button size="lg" class="mr-4" variant="primary" href="#">View Details</b-button>
                    </div>
                </b-card>

                <b-card title="Share Your Story">
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.
                    </b-card-text>
                    <div slot="footer" class="text-center">
                        <b-button size="lg" class="mr-4" variant="primary" href="#">View Details</b-button>
                    </div>
                </b-card>
            </b-card-group>-->
        </b-container>
    </div>
</template>

<script>
import { whygive } from "@/store";

export default {
    pageTitle: "Why Give",
    layout: "internal",
    data() {
        return {
            cards: whygive
        };
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
