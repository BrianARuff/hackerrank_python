// Who are you?

// ·       Tell me about your experience? I have been coding for 1.5 years. I have experience with several languages and frameworks, including ruby on rails and react. I went to Lambda school to study web development and computer science fundamentals.

// ·       Tell me about HTML? Javascript? CSS? HTML is stands for hyper text markup language. It is essentially describes the skeleton of a webpage. Javascript is the "life" of the web page. It adds interactivity to the site. CSS is used to "decorate" the web page elements that make the site easier and friendlier to interact with from a user point of view.

// ·       Semantec html? Semantic elements are elements that describes the content it contains. For example, the nav element should contain a navigation system. A section block will be used to split the sections of a webpage into multiple pieces.

// o  Know html elements

// ·       What is CSS? What do you use it for?  How often? CSS stands for cascading style sheets. It is used for styling web pages. It should probably used on every single web page.

// ·       Block chain versus line element? A block chain element is an element that consumes 100% of the vertical width of a container. An inline element can have other elements next to it and will over-flow when the web page overflow point is met.

// ·       Box Model ? Consists of the following from the inside out... content -> padding -> border -> margin

// ·       Git Work Flow? git add . -> git commit -m "message" -> git pull -> fix any merge conflicts -> git push

// ·       Handlebars - a templating language

// What can you bring to the team? I bring passion and a love for problem solving and coding, and an easy to get along attitude.

// What are you looking to gain from the team? I am looking to learn and grow and develop my skills as a developer by working hard with the team and accepting feedback where needed. I will be spending many hours a day around them so it's important to me that I get along with my co workers.

// ECMAscript or es6 brought JS arrow functions and class syntax.

// hoisting is something that occurs in the compilation step in the browser or run time environment. Its were variables and functions are "pulled" to the top of the space they are in so that you can use these values in a non-linear fashion. Functions are hoisted before variables.

// box model - content -> padding -> border -> margin
// equal is an assignment
// double equal is a loose check in javascript where types are less important
// triple equals is a strict check in javascript where types must match
// It's called cascading because the further down a rule in CSS is the higher the priority it has by the DOM in terms of being applied to it, the order is in-line styling -> ids -> classes
// Event bubbling is when an element is interacted with and an event is attached to it, the event is triggered at said node, and bubbles its way back up the DOM to be activated, the problem is when there are the same event types on elements on it's way up the DOM. You can use the stopPropagation to prevent unecessary events from being triggered and applied to the incorrect DOM element.
// Flex box is a system set in place to make it easier to position elements. It works on an X-Y axis so it is 2 dimensional. It handles the math involved with the existing space of a container. It consist of containers and items.
// React is very exciting because of its component system. Redux is also very exciting because it can be used anywhere as a global state manager.
// undefined is the lack of a value in JS.
// null is an assigned value in JS.
// undefined is the source of a lot of JS bugs.
// border box limits an element size to it's specified size including border and padding.
// ampersands in CSS are typically used with LESS or similar CSS frameworks that allow nesting of elements inside the parent selector, typically with events like hovering.
// element selector, __ for sub elements, -- for modifiers if using the BEM system which is block-element-modifier.

// let str = 'hello world!';
// let str2 = str.split('').reverse().join('')
// let str3 = ''
// for (let i = str.length - 1; i >= 0; i--) {
//     str3 += str[i]
// }
// console.log(str2)
// console.log(str3)

// console.log("one");
// setTimeout(function() {
//     console.log("two");
// }, 0)
// console.log("three");

// function fizzBuzz(n) {
//     for (let i = 3; i < n+1; i++) {
//         if(i%3==0 && i%5==0) {
//             console.log(i)
//             console.log("Fizzbuzz")
//         } else if(i % 3 == 0) {
//             console.log(i)
//             console.log("Fizz")
//         } else if(i % 5 == 0) {
//             console.log(i)
//             console.log("Buzz")
//         } else {
//             continue
//         }
//     }
// }

// fizzBuzz(100)

// console.log("start");
// for(var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log("end");

// var a = b = 3
// console.log("a defined?" + (typeof a !== "undefined"))
// console.log("a defined?" + (typeof b !== "undefined"))

// arr = [8, 7, 5, 3, 3, 0, 9, 1];
// sorted = arr.sort((a,b) => a - b);
// console.log(sorted)
// uni = arr.filter((v, i, a) => {
//     if (a.indexOf(v) !== -1) {
//         return v
//     }
// })
// uni2 = Array.from(new Set(arr));
// console.log(uni)
// console.log(uni2)
// greater = arr.filter((v) => v > 3 ? v : null)
// console.log(greater)

// bar = null
// console.log(typeof bar === "object")

// var obj = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func: this.foo= " + this.foo);
//         console.log("outer func: self.foo= " + self.foo);
//         (function() {
//             console.log("outer func: this.foo= " + this.foo);
//             console.log("outer func: self.foo= " + self.foo);
//         }).bind(this)();
//     }
// }
// obj.func();

// NaN means not a number and it's a number type in JS.
// console.log(isNaN(NaN))
// console.log(isNaN(5))

// function foo1() {
//     return {
//         bar: "Hello"
//     }
// }

// console.log(foo1())

// function foo1() {
//     return {
//         bar: "Hello 2"
//     }
// }

// console.log(foo1())

// console.log(Number.isInteger(5))

// function palindrome(str) {
//    return str === str.split('').reverse().join('') ? true : false
// }

// console.log(palindrome('racecar'))
// console.log(palindrome('island'))

// var arr = [1,2,2,3,4,2,5,6,7,8];
// for(var i = 0; i < arr.length; i++) {
//     if(arr[i] === 2) {
//         arr.splice(i, 1)
//     }
// }
// console.log(arr)

// (function() {
//     for(var i = 0; i <= 10; i++) {
//         console.log(i);
//     }
// })();