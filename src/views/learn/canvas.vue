<template>
    <div class="template">
        <canvas id="ctx" width="150" height="150"></canvas>
        <img :src="base64" width="172" height="172" />
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
/**
 * 利用canvas可以得到某个图片的base64
 */
const qrCodeUrl =
    'https://static.yximgs.com/bs2/businessConversion/b11121d9-9afc-4adf-9f29-86527a88b922_p%E9%A1%B52.png';
export default defineComponent({
    name: 'canvas',
    components: {},
    data() {
        return {};
    },
    setup() {
        const state = reactive({
            base64: '',
        });
        function initCanvas() {
            const img = new Image();
            img.setAttribute('crossOrigin', 'Anonymous');
            img.onload = () => {
                const canvas = document.getElementById('ctx');
                canvas.getContext('2d').drawImage(img, 0, 0, 150, 150);
                state.base64 = canvas.toDataURL('image/png');
            };
            img.src = qrCodeUrl;
        }
        initCanvas();
        return {
            ...toRefs(state),
        };
    },
});
</script>
<style lang="less" scoped></style>
