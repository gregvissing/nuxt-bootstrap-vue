<template>
    <div>
        <section class="post-list">
            <FundPreview
                v-for="fund in funds"
                :key="fund.id"
                :id="fund.id"
                :thumbnail="fund.thumbnail"
                :title="fund.title"
                :previewText="fund.previewText"
            />

            <!-- https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg -->
        </section>
    </div>
</template>

<script>
import FundPreview from "~/components/UI/Funds/FundPreview.vue";

export default {
    components: {
        FundPreview
    },
    props: {
        funds: {
            type: Array,
            required: false
        }
    }
};
</script>

<style lang="scss" scoped>
.post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
