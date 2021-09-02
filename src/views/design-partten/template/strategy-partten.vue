<template>
    <div class="home">
        请输入用户名:<input type="text" name="userName" v-model="userName" />
        请输入密码:<input
            type="text"
            name="password"
            v-model="password"
        />
        请输入手机号码:<input type="text" name="phoneNumber" v-model="phoneNumber" />
        <button @click="submit"> 提交 </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStrategyModel } from '../model/strategy-partten';

export default defineComponent({
    name: 'home',
    components: {},
    setup() {
        const { Validator } = useStrategyModel();
        const state = reactive({
            userName: '',
            password: '',
            phoneNumber: '',
        });
        var validataFunc = function () {
            // @ts-ignore
            var validator = new Validator();
            validator.add(state.userName, 'isNonEmpty', '用户名不能为空');
            validator.add(state.password, 'minLength:6', '密码长度不能少于 6 位');
            validator.add(state.phoneNumber, 'isMobile', '手机号码格式不正确');

            var errorMsg = validator.start();
            return errorMsg;
        };
        function submit() {
            var errorMsg = validataFunc();
            if (errorMsg) {
                alert(errorMsg);
                return false;
            }
        }
        return {
            ...toRefs(state),
            submit,
        };
    },
});
</script>
