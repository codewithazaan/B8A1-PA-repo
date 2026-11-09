# Combining Union (`|`) and Intersection (`&`) Types in TypeScript

## Introduction

In TypeScript, Union and Intersection are two useful features. They help us work with different types of data. Union allows us to use one of multiple types. Intersection combines multiple types into one. Both are useful when working with real-life projects.

## Detailed Explanation with Code Examples

### 1. Union (`|`) Type

A Union type allows a variable to accept different types of values. We use the `|` symbol to combine types. The value can be one type or another type.

**Code Example:**

```ts
type User = string | number;

let userId: User = "Azaan";
userId = 101;
```
Here, the `userId` variable can store either a string or a number. It cannot store a boolean value.

### 2. Intersection (`&`) Type

An Intersection type combines two or more types into one. We use the `&` symbol to combine them. The final object must have all the required properties.

**Code Example:**
```ts
type Person = {
    name: string;
    age: number;
};

type Employee = {
    salary: number;
    position: string;
};

type Staff = Person & Employee;

const staff: Staff = {
    name: "Shafik",
    age: 19,
    salary: 50000,
    position: "Developer"
};
```
Here, the `Staff` type combines `Person` and `Employee`. So, the staff object must have all four properties.

### 3. Combining Union and Intersection
We can also use Union and Intersection together. For example, a user can be either an Employee or a Manager, and both must have basic personal information.

## Conclusion

Union and Intersection are very useful in TypeScript. Union allows us to use different types, while Intersection combines multiple types. They help us write flexible and clean code.