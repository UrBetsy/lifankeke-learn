export function useStrategyModel() {
    const strategies = {
        isNonEmpty: function (value: string, errorMsg: string) {
            if (value === '') {
                return errorMsg;
            }
        },
        minLength: function (value: string, length: number, errorMsg: string) {
            if (value.length < length) {
                return errorMsg;
            }
        },
        isMobile: function (value: string, errorMsg: string) {
            // 手机号码格式
            if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
                return errorMsg;
            }
        },
    };

    const Validator = function () {
        // @ts-ignore
        this.cache = []; // 保存校验规则
    };
    Validator.prototype.add = function (value: string, rule: string, errorMsg: string) {
        const ary = rule.split(':');
        this.cache.push(function () {
            const strategy = ary.shift();
            console.log([...ary, errorMsg]);
            // @ts-ignore
            return strategies[strategy].apply(null, [value, ...ary, errorMsg]);
        });
    };
    Validator.prototype.start = function () {
        let msg = '';
        // @ts-ignore
        this.cache.some(item => {
            msg = item();
            if (msg) {
                return msg;
            }
        });
        return msg;
    };

    return {
        Validator,
    };
}
