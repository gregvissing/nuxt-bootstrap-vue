<template>
    <b-navbar toggleable="lg" fixed="top">
        <b-container>
            <b-navbar-brand class="d-flex align-items-center">
                <nuxt-link to="/">
                    <img
                        src="https://foundation.uc.edu/file/projects/give-to-uc/images/logo-ucFoundation-white.png"
                    >
                </nuxt-link>
            </b-navbar-brand>
            <b-collapse is-nav id="nav_text_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/ways-to-give/">WAYS TO GIVE</b-nav-item>
                    <b-nav-item to="/why-give/">WHY GIVE</b-nav-item>
                    <b-nav-item to="/areas-to-support/">AREAS TO SUPPORT</b-nav-item>
                    <b-nav-item class="donate" to="/donate/">DONATE NOW</b-nav-item>
                    <b-nav-item class="cart" to="/cart/">
                        <div class="cartitem">
                            <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
                            <svg
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
                            </svg>
                        </div>
                        <!-- <font-awesome-icon icon="shopping-cart" size="lg"/> -->
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        </b-container>
    </b-navbar>
</template>

<script>
import $ from "jquery";
export default {
    computed: {
        cartTotal() {
            return this.$store.state.cartTotal;
        }
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 100) {
                $("nav").addClass("reduced");
            } else {
                $("nav").removeClass("reduced");
            }
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
        ul {
            li {
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
                    .nuxt-link-active {
                        background: $white;
                        color: $red !important;
                    }
                }
                &.cart {
                    svg {
                        path {
                            fill: $white;
                        }
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

.cartitem {
    position: relative;
    float: right;
}

.cartcount {
    font-family: "Barlow", sans-serif;
    position: absolute;
    background: $black;
    color: white;
    text-align: center;
    padding-top: 4px;
    width: 20px;
    height: 20px;
    font-size: 10px;
    margin: -5px 0 0 20px;
    border-radius: 1000px;
    font-weight: 700;
}
</style>
