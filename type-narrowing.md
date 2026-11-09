
 ## Understanding Type Narrowing in TypeScript

# Introduction: It's a very useful feature in Typescript. It help us to know the exact type of a value. It helps to work with safety. We can easily handle data type using this type Narrowing process. Type Narrowing helps the typescript to understand the type of value.

## Detailed Explanation with Code Examples

### 1. Type Narrowing Using `typeof`

The typeof operator is used to check the data type of a value. It is very useful when working with union types, where a variable can hold more than one type of value. By using typeof inside an if-else condition, we can check whether the value is a string, number, or boolean. 

**Code Example:**
```ts
function checkAge(age: string | number) {
    if (typeof age === "number") {
        console.log("Your age is:", age);
    } else {
        console.log("Age should be a number!");
    }
}
```
### 2. Type Narrowing Using `instanceof`

The instanceof operator helps us check the type of an object. It tells us which class an object belongs to. When we use more than one class, it can be useful to check the object first. We can use instanceof with if-else conditions to do this. 

**Code Example:**
```ts
class Dog {}
class Cat {}
function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) console.log("Bark");
    else console.log("Meow");
}
makeSound(new Dog());
makeSound(new Cat());
```
### 3. Type Narrowing Using the `in` Operator
The in operator helps us check if a property exists in an object. It is useful when working with different objects. We can use it with if-else to check which property an object has.

**Code Example:**
```ts
type Car = { brand: string };
type Bike = { model: string };

function show(item: Car | Bike) {
    if ("brand" in item) console.log(item.brand);
    else console.log(item.model);
}
```
## Conclusion
Type Narrowing is very useful in TypeScript. It helps us check the type of a value and write safer code. I learned how to use typeof, instanceof, and in to check different types.


