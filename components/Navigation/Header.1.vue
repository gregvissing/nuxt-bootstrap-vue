<template>
    <header
        :class="{
    'areas-to-support' : (page === 'internal'),
    'ways-to-give' : (page === 'internal'),
    'why-give' : (page === 'internal'),
    'index' : (page === 'index')
  }"
    >
        <!-- <transition-group name="bk" tag="div" class="bk-img">
            <div key="img1" v-if="page === 'index'" class="header-img1"></div>
            <div key="img2" v-else class="header-img2"></div>
        </transition-group>-->
        <b-navbar toggleable="lg" fixed="top">
            <div class="container-fluid">
                <b-navbar-brand class="d-flex align-items-center">
                    <nuxt-link to="/">
                        <img
                            src="https://foundation.uc.edu/file/projects/give-to-uc/images/logo-ucFoundation-white.png"
                        >
                    </nuxt-link>
                </b-navbar-brand>
                <b-collapse is-nav id="nav_text_collapse">
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/ways-to-give">WAYS TO GIVE</b-nav-item>
                        <b-nav-item to="/why-give">WHY GIVE</b-nav-item>
                        <b-nav-item to="/areas-to-support">AREAS TO SUPPORT</b-nav-item>
                        <b-nav-item class="donate" to="/donate-now">DONATE NOW</b-nav-item>
                        <b-nav-item class="search" @click.prevent="searchToggle">
                            <i class="fas fa-search"></i>
                        </b-nav-item>
                        <b-nav-item class="cart" to="/cart/" v-show="cartTotal > 0">
                            <div class="cartitem">
                                <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
                                <img src="~/assets/images/baseline-card_giftcard-24px.svg">

                                <!-- <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                aria-labelledby="shopicon"
                                role="presentation"
                                width="30"
                                height="30"
                            >
                                <title id="cart">Shopping Cart</title>
                                <path
                                    fill="black"
                                    d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"
                                ></path>
                                </svg>-->
                            </div>
                            <!-- <font-awesome-icon icon="shopping-cart" size="lg"/> -->
                        </b-nav-item>
                    </b-navbar-nav>
                    <div class="search-container animateblock close">
                        <b-form-input
                            class="searchInput"
                            v-model="searchText"
                            placeholder="Enter Fund Name then hit Enter"
                            @keyup.enter="searchFunds"
                        ></b-form-input>
                        <b-form-group class="filter-boxes">
                            <b-form-checkbox-group
                                id="checkbox-filter"
                                v-model="selected"
                                name="search-filter"
                            >
                                <b-form-checkbox value="funds">
                                    <label>Funds</label>
                                </b-form-checkbox>
                                <b-form-checkbox value="areas">
                                    <label>Areas</label>
                                </b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>
                    </div>
                </b-collapse>

                <div class="mobile cartitem">
                    <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
                    <img src="~/assets/images/baseline-card_giftcard-24px.svg">
                </div>
                <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </button>
                <!-- <b-navbar-toggle class="navbar-light" target="nav_text_collapse"></b-navbar-toggle> -->
            </div>
        </b-navbar>
    </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import $ from "jquery";
export default {
    data() {
        return {
            searchText: "",
            selected: []
        };
    },
    computed: {
        cartTotal() {
            return this.$store.state.cartTotal;
        },
        ...mapState(["page"])
        // ...mapGetters(['selectedUser'])
    },
    methods: {
        searchFunds() {
            // console.log("enter clicked" + this.searchText);

            this.$router.push("/search-results/?q=" + this.searchText);
        },
        handleScroll() {
            if (window.scrollY > 100) {
                $("nav").addClass("reduced");
                $(".scrollToTop").fadeIn();
            } else {
                $("nav").removeClass("reduced");
                $(".scrollToTop").fadeOut();
            }
        },
        searchToggle: function() {
            console.log("search");
            $(".search-container").toggleClass("open close");
            $(".search-container.open").animate(
                {
                    width: "70%",
                    padding: "0.375rem 0.75rem",
                    "font-weight": "normal !important"
                },
                500,
                function() {
                    $(".filter-boxes").slideDown();
                }
            );

            $(".search-container.close").animate(
                {
                    width: "0%",
                    padding: "0",
                    "font-weight": "normal !important"
                },
                500,
                function() {
                    $(".filter-boxes").slideUp();
                }
            );
        }
    },
    created() {
        if (process.browser) {
            window.addEventListener("scroll", this.handleScroll);
        }
    },
    destroyed() {
        if (process.browser) {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

header {
    width: 100vw;
    /* height: 300px; */
    position: relative;
    &:before {
        content: "";
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: -moz-radial-gradient(
            center,
            ellipse cover,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 36%,
            rgba(0, 0, 0, 0.65) 100%
        ); /* FF3.6-15 */
        background: -webkit-radial-gradient(
            center,
            ellipse cover,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 36%,
            rgba(0, 0, 0, 0.65) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 36%,
            rgba(0, 0, 0, 0.65) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#00000000',
        endColorstr='#a6000000',
        GradientType=1
      ); /* IE6-9 fallback on horizontal gradient */
        opacity: 0.6;
    }
    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #000;
    }

    nav {
        background-color: $red;
        -webkit-box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.5);
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.5);
        .navbar-brand {
            img {
                height: 60px;
                @include transition(all 0.4s ease);
            }
        }
        .navbar-collapse {
            background: transparent !important;
            position: relative;
            /* .searchInput, */
            .search-container {
                display: block;
                position: absolute;
                right: 4.5%;
                top: 0;
                bottom: 0;
                height: 100%;
                width: 0%;
                z-index: 10;
                padding: 0 !important;
                border: 0;
                opacity: 1;
                font-size: normal !important;
                font-weight: normal !important;
                &:hover {
                    opacity: 1 !important;
                }
                &.close {
                    overflow: hidden;
                }
                .filter-boxes {
                    display: none;
                    background: rgba($black, 0.5);
                    margin: 0;
                    padding: 5px 10px;
                    label {
                        color: $white !important;
                        line-height: 1;
                        font-weight: bold !important;
                    }
                }
                .searchInput {
                    height: 100%;
                }
            }
            ul {
                @media (max-width: 991px) {
                    background: $black;
                }
                li {
                    border-bottom: none !important;
                    a {
                        &.nav-link {
                            padding: 1rem 0.75rem;
                            color: $white;
                            &.nuxt-link-active {
                                color: $black;
                            }
                        }
                    }
                    &.donate {
                        background-color: $black;
                        border-bottom: none !important;
                        .nuxt-link-active {
                            background: $white;
                            color: $red !important;
                        }
                        .nav-link {
                            &:hover {
                                color: $red;
                            }
                        }
                    }
                    &.cart {
                        .cartitem {
                            img {
                                @include transition(all 0.4s ease);
                                &:hover {
                                    /* fill: $black; */
                                    filter: invert(1);
                                }
                            }
                        }
                        svg {
                            path {
                                fill: $white;
                            }
                        }
                        @media (max-width: 991px) {
                            display: none;
                        }
                    }
                }
            }
        }
        &.reduced {
            .navbar-brand {
                img {
                    height: 50px;
                }
            }
            .navbar-toggler {
                top: 0.6em !important;
            }
            .mobile.cartitem {
                top: 1.25em;
            }
        }
        .container {
            position: relative;
            .navbar-toggler {
                position: absolute;
                right: 0;
                top: 0.8em;
                border: 1px solid rgba(0, 0, 0, 0.5);
                border-radius: 5px !important;
            }
        }
    }
}

@mixin header($imgurl) {
    background: url($imgurl) center center;
    background-size: cover;
    position: absolute;
    width: 100vw;
    height: 300px;
}

.header-img1 {
    @include header(
        "https://www.alumni.uc.edu/image/home-full-width/MM-Geen-3.jpg"
    );
}

.header-img2 {
    @include header(
        "https://foundation.uc.edu/image/annual-report/2018/letters/UC-Campus-Scenes0232.jpg"
    );
}

/* .header-img3 {
  @include header('/header3.jpg');
} */

.bk-enter-active,
.bk-leave-active {
    transition: all 0.4s ease;
}

.bk-enter,
.bk-leave-to {
    transform: scale(1.1) translateZ(0);
    opacity: 0;
}

.bk-img {
    position: absolute;
    width: 100vw;
    height: 300px;
    overflow: hidden;
    left: 0;
    top: 0;
}

.cartitem {
    position: relative;
    float: right;
    &.mobile {
        display: none;
        float: none;
        position: absolute;
        top: 1.5em;
        right: 6em;
        @media (max-width: 991px) {
            display: inline-block;
        }
    }
}

.cartcount {
    font-family: "Barlow", sans-serif;
    position: absolute;
    background: $black;
    color: white;
    text-align: center;
    padding-top: 3px;
    width: 20px;
    height: 20px;
    font-size: 10px;
    margin: -5px 0 0 20px;
    border-radius: 1000px;
    font-weight: 700;
}
</style>
