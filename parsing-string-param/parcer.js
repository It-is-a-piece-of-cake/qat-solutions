// height: 100%; top: auto; bottom: 0px; width: 0%;
var getValue = function (style) {
    var obj = {};
    style.replace(/(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g, function (match, key, val) { return obj[key] = val; });
    console.log(obj);
    return 666;
};
var string = 'height: 100%; top: auto; bottom: 0px; width: 0%;';
console.log(getValue(string));
