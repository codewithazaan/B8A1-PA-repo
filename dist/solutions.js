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
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
// Sample Output:
// "Location: Dhaka (23.81, 90.41)"
// "Location: Chittagong (22.35, 91.78)"
