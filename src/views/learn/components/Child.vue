<template>
    <div class="child"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'child',
    components: {},
    setup() {
        return {};
    },
    mounted() {
        console.log('child mounted');
    },
});
</script>
<style lang="less" scoped>
.child {
    background: red;
}
</style>
