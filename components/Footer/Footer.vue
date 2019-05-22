<template>
    <footer>
        <b-container>
            <b-row>
                <!-- Contact -->
                <b-col>
                    <h4>Contact</h4>
                    <p>The University of Cincinnati Foundation</p>
                    <p>PO Box 19970</p>
                    <p>Cincinnati, OH 45219</p>
                </b-col>
                <!-- Connect -->
                <b-col>
                    <h4>Connect</h4>
                    <p>
                        <i class="fab fa-facebook-square"></i> Facebook
                    </p>
                    <p>
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </p>
                    <p>
                        <i class="fab fa-twitter-square"></i> Twitter
                    </p>
                    <p>
                        <a href="https://foundation.uc.edu">UC Foundation</a>
                    </p>
                    <p>
                        <a href="https://alumni.uc.edu">UC Alumni Association</a>
                    </p>
                </b-col>
                <!-- Questions -->
                <b-col>
                    <h4>Questions</h4>
                    <p>
                        Phone:
                        <font-awesome-icon icon="phone"/>
                        <a data-v-236132e6 href="tel:513-556-6781" aria-hidden="true">513-556-6781</a>
                    </p>
                    <p>
                        Phone:
                        <font-awesome-icon icon="phone"/>
                        <a data-v-236132e6 href="tel:888-556-8889" aria-hidden="true">888-556-8889</a>
                    </p>
                    <p>
                        Email:
                        <font-awesome-icon icon="envelope"/>
                        <a
                            data-v-236132e6
                            href="mailto:ucfoundation@uc.edu"
                            aria-hidden="true"
                        >ucfoundation@uc.edu</a>
                    </p>
                    <p>
                        Fax:
                        <font-awesome-icon icon="fax"/>
                        <a data-v-236132e6 href="tel:513-556-4300" aria-hidden="true">513-556-4300</a>
                    </p>
                </b-col>
            </b-row>
        </b-container>
        <div class="copyright">
            <div class="container">Copyright Information | © 2019 University of Cincinnati</div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

footer {
    background: $black;
    margin-top: 3em;
    padding-bottom: 1.5em;
    .container {
        .row {
            .col {
                padding-top: 2em;
                padding-bottom: 2em;
                h4,
                p,
                a {
                    color: $white;
                    margin: 0;
                }
                h4 {
                    color: $red;
                    font-family: "Bree Serif";
                }
                p {
                    font-size: 0.9em;
                }
                a {
                    text-decoration: underline;
                }
                svg {
                    margin-left: 3px;
                    margin-right: 5px;
                    path {
                        fill: $red;
                    }
                }
                .fab {
                    margin-right: 5px;
                    color: $red;
                }
            }
        }
    }
    .copyright {
        padding: 10px 0;
        background: rgba(255, 255, 255, 0.25);
        .container {
            color: $gray-light;
            font-size: 0.9em;
        }
    }
}
</style>
