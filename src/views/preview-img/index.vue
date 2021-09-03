<template>
    <div class="wrapper">
        <div
            class="hevue-imgpreview-wrap"
            id="hevue-imgpreview-wrap"
            v-if="show"
            ref="heImg"
            @mouseup="removeMove('pc')"
            @touchend="removeMove('mobile')"
            @click.stop="clickMask"
        >
            <img
                class="preview-img"
                src="https://static.yximgs.com/udata/pkg/ks-ad-fe/blue-header.b9ea81e1.min.png"
                @touchstart="addMoveMobie"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';

export default defineComponent({
    name: 'learn',
    components: {},
    setup() {
        const startInit = new TouchList();
        const heImgInit = new HTMLDivElement();
        const state = reactive({
            start: startInit,
            show: true,
        });
        const $heImg = ref(heImgInit);
        function moveFuncMobile() {
            console.log('滑动');
        }
        function addMoveMobie(e: TouchEvent) {
            if (e.touches.length > 1) {
                state.start = e.touches;
                // 添加手指拖动事件
                $heImg.value.ontouchmove = moveFuncMobile;
            } else {
                state.show = false;
            }
        }
        return {
            addMoveMobie,
            ...toRefs(state),
        };
    },
});
</script>
<style lang="less" scoped>
.preview-img {
    height: 50vh;
    width: 50vw;
    object-fit: cover;
}
</style>
