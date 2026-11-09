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
const concatenateArrays = (...arrays) => {
    return [].concat(...arrays);
};
const getPopularCourses = (courses, minStudents) => {
    const popularCourses = [];
    for (const course of courses) {
        if (course.isPublished && course.students >= minStudents) {
            popularCourses.push(course);
        }
    }
    return popularCourses;
};
const pluckValues = (items, key) => {
    return items.map(item => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
    { product: "Rappo Mouse", price: 1100 }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
console.log(pluckValues(users, "product"));
