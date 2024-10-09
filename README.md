# Functions in JavaScript

## What is a function?
A block of code that can be executed on demand.

### Syntax

- With the function keyword

```js
function doSomething (){
    // Code in here
}
```

Let's create some functions

```js
function greeting (){
    console.log("Hello!")
}
```

To call this function we just need to reference the name of the function and invoke by adding parentheses.

```js
// Invoke greeting method.
greeting()
```

We can also pass in information in the form av attributes/arguments to the function that the function in turn can use in its exection.

```js
//Function with arguments.

function greetWithName(name){
    // Inside the log, we are using string concatination to add strings together. 
    console.log("Hello " + name + "!");
}

// Now we expect numbers as arguments, and inside the function we do a simple math expression.
function add (num1, nume2) {
    console.log(num1 + num2);
}
```

Last thing we want to to is to accept argument and RETURN a value from the function.

```js
function divideByHalf(num) {
    const half = num / 2;
    return half;
}
```

Return here is a keyword and denotes the value that is returned from the function. This value can then be stored i a variable of our choosing.

```js
const halfOf100 = divideByHalf(100);
console.log(halfOf100)
```




