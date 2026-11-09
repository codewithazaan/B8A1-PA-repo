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
class Employee {
    name;
    _baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this._baseSalary = baseSalary;
    }
    get getDetails() {
        return JSON.stringify(`Employee: ${this.name}, Base Salary: ${this._baseSalary}`);
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return JSON.stringify(`Manager of ${this.department}: ${this.name}`);
    }
}
// Sample Input:
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails);
console.log(manager.getRoleInfo());
// Sample Output:
// "Employee: Alice, Base Salary: 50000"
// "Manager of Engineering: Alice"
