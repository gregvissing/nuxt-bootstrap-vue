<template>
    <b-navbar toggleable="lg" fixed="top">
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
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
                        <font-awesome-icon icon="shopping-cart" size="lg"/>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
import $ from "jquery";
export default {
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
    }
}
</style>
