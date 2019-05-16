<template>
    <b-container>
        <h1 class="text-center">Areas to Support</h1>
        <p>Your gift to the UC and UC Health makes an impact where you want. Give to your favorite college, program or department, or contribute to the university’s most pressing needs.</p>
        <div class="marquee">
            <div class="slideitem">
                <a href="https://give.ucdavis.edu/Search/Tags/water?appeal=19064">
                    <img
                        src="https://give.ucdavis.edu/Content/images/food-ic.svg"
                        alt="food category"
                    >
                    <h4 class="theme">food</h4>
                </a>
            </div>
            <div class="slideitem">
                <a href="https://give.ucdavis.edu/Search/Tags/water?appeal=19064">
                    <img
                        src="https://give.ucdavis.edu/Content/images/water-ic.svg"
                        alt="water category"
                    >
                    <h4 class="theme">water</h4>
                </a>
            </div>
            <div class="slideitem">
                <a href="https://give.ucdavis.edu/Search/Tags/society?appeal=19064">
                    <img
                        src="https://give.ucdavis.edu/Content/images/society-ic.svg"
                        alt="society category"
                    >
                    <h4 class="theme">society</h4>
                </a>
            </div>
            <div class="slideitem">
                <a href="https://give.ucdavis.edu/Search/Tags/environment?appeal=19064">
                    <img
                        src="https://give.ucdavis.edu/Content/images/environment-ic.svg"
                        alt="environment category"
                    >
                    <h4 class="theme">environment</h4>
                </a>
            </div>
            <div class="slideitem">
                <a href="https://give.ucdavis.edu/Search/Tags/energy?appeal=19064">
                    <img
                        src="https://give.ucdavis.edu/Content/images/energy-ic.svg"
                        alt="energy category"
                    >
                    <h4 class="theme">energy</h4>
                </a>
            </div>
            <div class="slideitem">
                <a href="https://give.ucdavis.edu/Search/Tags/arts?appeal=19064">
                    <img
                        src="https://give.ucdavis.edu/Content/images/arts-ic.svg"
                        alt="arts category"
                    >
                    <h4 class="theme">arts</h4>
                </a>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

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
    }
}
</style>
