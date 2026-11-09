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
        return Math.abs(value * 10);
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
const formatCoordinate = (location) => {
    const [latitude, longitude, locationName] = location;
    return JSON.stringify(`Location: ${locationName} (${latitude}, ${longitude})`);
};
//! Problem - 4
const concatenateArrays = (...arrays) => {
    return [].concat(...arrays);
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
