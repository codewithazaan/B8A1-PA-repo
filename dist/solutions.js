"use strict";
const multiplyValue = (value, multiplier) => {
    if (value === 0 || multiplier === 0) {
        return 0;
    }
    else if (multiplier === undefined) {
        return Math.abs(value * 2);
    }
    else {
        return value * multiplier;
    }
};
const processInput = (value) => {
    if (typeof value === "string") {
        return JSON.stringify(value.trim().toLowerCase());
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        if (value) {
            return JSON.stringify("Active");
        }
        else {
            return JSON.stringify("Inactive");
        }
    }
    else {
        const otherValue = value;
        return otherValue;
    }
};
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
