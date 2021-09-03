<template>
    <div class="learn"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useModel } from './models/声明式代码';
import { useCurryModel } from './models/curry';

export default defineComponent({
    name: 'learn',
    components: {},
    setup() {
        useModel();
        useCurryModel();
        return {};
    },
});
</script>
<style lang="less" scoped></style>
