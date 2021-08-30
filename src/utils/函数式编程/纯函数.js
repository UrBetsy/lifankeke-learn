// 纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

// 副作用是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互。

var memoize = function (f) {
    var cache = {};
    return function () {
        console.log(333);
        var arg_str = JSON.stringify(arguments);
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
        return cache[arg_str];
    };
};

var pureHttpCall = memoize(function (url, params) {
    return function () {
        return 'haha';
    };
});
console.log(111);
var handle = pureHttpCall();
console.log(222);
var uu = handle(123, 'haha');
console.log(uu);
