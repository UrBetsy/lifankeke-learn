<template>
    <div class="learn"></div>
    <!-- 对象写法 -->
    <div @click="doSomething" :class="{ active: isActive, 'text-danger': hasError }">hahah</div>
    <!-- 数组写法 -->
    <div :class="[isActive ? 'active' : '', 'text-danger']">hehe</div>
    <!-- 字符串 -->
    <div :class="`${isActive ? 'active' : ''} text-danger`">hehe</div>
    <Child @hook:mounted="doSomething"></Child>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useRouter, useRoute } from 'vue-router';
import { useModel } from './models/声明式代码';
import { useCurryModel } from './models/curry';
import Child from './components/Child.vue';

export default defineComponent({
    name: 'learn',
    components: {
        Child,
    },
    data() {
        return {
            isActive: true,
            hasError: true,
        };
    },
    setup() {
        useModel();
        useCurryModel();
        function doSomething() {
            console.log('parent doSomething');
        }
        return {
            doSomething,
        };
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
