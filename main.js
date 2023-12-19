"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = void 0;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
console.log(multiply(3, 5));
//npx tsc main.ts para compilar manualmente o typescript
var applyDesc = function (price, percent) {
    return price - (price * (percent / 100));
};
console.log(applyDesc(100, 25));
