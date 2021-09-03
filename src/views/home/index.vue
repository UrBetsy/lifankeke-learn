<template>
    <div class="home"></div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
    name: 'home',
    components: {},
    setup() {
        const router = useRouter();
        return {};
    },
});
</script>
