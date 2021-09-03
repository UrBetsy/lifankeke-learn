<template>
    <!-- 对象写法 -->
    <div @click="doSomething" :class="{ active: isActive, 'text-danger': hasError }">对象写法</div>
    <!-- 数组写法 -->
    <div :class="[isActive ? 'active' : '', 'text-danger']">数组写法</div>
    <!-- 字符串 -->
    <div :class="`${isActive ? 'active' : ''} text-danger`">字符串写法</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'class-name',
    components: {},
    data() {
        return {
            isActive: true,
            hasError: true,
        };
    },
    setup() {
        return {};
    },
});
</script>
<style lang="less" scoped>
.active {
    color: green;
}
.text-danger {
    background: red;
}
</style>
