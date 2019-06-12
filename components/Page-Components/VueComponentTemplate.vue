<template>
    <div>
        <span class="name">Name</span>
        <span class="icon">Icon</span>
    </div>
</template>

<script>
export default {
    template: "#vue-component-template",
    name: "vue-component",
    data: function() {
        return {
            message: "I'm a component!"
        };
    }
};
</script>
