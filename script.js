//----------Javascript behind the scene

'use strict';

//----JAVASCRIPT---
// Javascript is a high level- based object oriented, multiparadigm, interpreted or just-in-time compiled, dynamic,
// single- threaded, garbage-collected programming language with first- class functions and a non-blocking event loop
// concurrency model.

//--High level
//  JS and Pythhon are high level language where we don't manage resources at all. everything happens automatically
//(because these languages have so-called abstractions). unlike C language where you have to manually manage these
//resources in cpu and memories.

//****Garbage - collected** */
// One of the powerful tools that take memory management away from us developers is Garbage- collection, which is
//basically an algoritham inside the JS-engine. which automaticallly removes old, unused objects(who cleans our
//memory from time to time so we dont have to do it manually in our code).

//*******Interpreted or Just-in-time compiled */
// Convert to machine code(i.e. compiling) happens inside the javascript engine.

//*******Multi-paradigm***** */
// In programming, a paradigm is an approach and an overall mindset of structuring code, which will ultimately direct
// the coding style and technique in a project that uses a certain paradigm
// 3 Popular Paradigm are :-
//1.) Procedural programming-->(oraganizing the code ina very linear way and then with some functions in between)
//2.) OOP
//3.) Functional Programming

//Javascript does all of this programming. so it is really flexible and versatile.
//Javascript is a prototype based, Object-oriented approach.

//almost everything in JS is an object, except for primitive values. arrays are just objects
//Q. Ever wondered why we can create an array and then use the push method on it.
//Well, its because of prototyal inheritance. Basically we create an arrays from an array blueprint, which is like
// an template and this is called the prototype. This prototype contains all the array methods and the arrays that
//we create in our code then inherits the method from the blueprint.

//********First-class function****** */
// javascript is a language with first-class function, which simply means that functions are treated as regular variables.
//we can pass functions into other functions and can even return functions from functions, this thing allows us for
//functional programming.

//***********Dynamics********** */
// JS is a dynamic language. dynamic actually means dynamically-typed. no dataType definition. Types becomes known
//only at runtime when the javascript engine executes our code. and Data type of variables is automatically changed
//when we reassin variables.

//--What actually is a concurrency model?
//--Concurrency model- how the JS engine handles multiple tasks happening at the same time. JS runs in one singlel
//thread . so it can only do one thing at a time.

//Threads - In computing is like a set of instructions, that is executed in the computer's CPU.
//So basically, threads is where our code is actually executed in a machine's processor.

//To achieve non-blocking behavior, we use an event-loop.
//The event loops takes long running tasks, executes them in the background, and puts them back in the main thread
//once they are finished.

///JS Engine--->>progrma that executes the js code

//JS engien always contains a call stack and a heap

// What is a JS runtime is? most particular the most common one is Browser
// Js runtime in the browser are chrome, firefox etc.
// Web APIs are functionalities provided to the engine, but which are not actually not part of the JS language itself.
// JS simply gets access to these APIs through the global window object. but it still makes sense that the web apis
// are also part of the runtime,becz again a runtime is just like a box that contains all the javascript related
// stuffs that we need. and next a typical js runtime also includes a so called callback queue. This is a data
// structure that contains all the  callback functions that are ready to be executed.

//Event loop takes callback functions from the callback queue and puts them in the call stack so that they cam be executed.

///*******************IMPORTANT******************************
// javascript can exist outside of the browsers. for example in NodeJS.
// NodeJS javascript runtime (is pretty similar to browser JS runtime). since we dont have a browser, ofcourse we
//cant have the web APIs. because its the browser who provides these stuffs .

//Global execution context is is created for top- level code.
//what is execution context?
//execution context is an abstract concept. basically it is as an environment in which a piece of JS is executed.
//which stores all the necessary information for some code to be executed.
//such as local variables or arguments passed into a function. so JS code always runs inside an execution context.

//now, in any js project, no matter how large it is, there is only ever one global execution  context.

//Exactly one global execution context(EC): Default context, created for code that is not inside any function(top-level)
//After finishing the top-level code. Function finally start to execute as well.
//One execution context per function: for each function call a new execution context is created, containing all the
//info that is necessary to run exactly that function. and some goes for the methods, ofcourse.

//Whats inside execution context?
//1. variable environment
//all the variables and function declarations like. let, const and var declarations and the argument object which we
//have passed into the functions.

//2.Scope chain
//basically consists of references to variables that are locatedouttside of the current function. and to keep track
//of the scope chain it is stored in each execution context.finally , each context also gets a special variables
//called the "this" keyword

//3. this keyword
//these 3 things are generated in a so called creation phase which happens right before execution.


//---------------------------------IMPORTANT THING TO KEEP IN MIND-----------------------------------------
//---------------------------------------------------------------------------------------------------------
//execution context belonging to arrow functions do not get their own arguments keyword, nor do they get the "this" keyword.
//so basically arrow functions dont have the arguments object and the "this" keyword. instead they can use the
//arguments object, and the "this" keyword from their closest regular function parent.

//------Scope and Scope Chain-----
// Scoping:- It controls how our program varibles are organized and accessed by the JS engine. Its asks the Question
//"Where do variables live ?" or "where can we access a certain variables and where not?"

//----Lexical Scoping-
//it means that the way variables are organized and accessed or (scoping) is entirely controlled by the placement of
//functions and of blocks in the programs code.
//for example :-
//a function that is written inside another function has access to the variables of the parent function

//Scope--> scope is the space or environment in which a certain variable is declared (variable environment in case of
//functions). There is global scope, function scope, and block scope

//difference between Scope and  variable environment?
//Scope of a variable-> is basically the entire  region of our code, where a certain variable can be accessed.

//--Global Scope:-
// 1. Global scope is for top level code. i.e declared outside of any function or block.
// 2.Variables declared in global scope are accessible everywhere in all functions and all blocks.

//--Function Scope:-
//--1. variables are accessible only inside function, NOT outside. Technically the same as the functions variable
//     environment
//--2. Also called Local Scope. All type of functions craete theiri own scope

//in traditionally , ony functons used to create scopes in JS. But starting in ES6, blocks also creates scopes now.
//and with blocks we mean everything that is between curly braces, such as the block of an If Statement or a For Loop.
//so just like with functions, variables declared inside a block are only accessible inside that block and not outside
//of it.

//--Difference between block and functions is that Block scopes only applied to variable declared with let or const.
// which means only let and const variables are restricted to the block on which they were created. thats why we say
//that let and const variables are block scoped.

//--Block Scope ES6
//--1. variables are accessible only inside block(block scoped).
//--2. However, this only applies to let and const.
//--3.Funcions are also block scoped (only in strict mode). In ES5 functions was declared with var.

//Example

const myName = 'Sanjana';

function first() {
  const age = 30;

  if (age >= 30) {
    //true
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';

    console.log(`${myName} is a ${age}-old ${job}`);
  }
  second();
}
first();

//scope is equal to its variable environment.
//the scope is a one way street: a scope will never ever have access to the variables of an inner scope.
//the scope chain in a certain scope is equal to adding together all the variables environment of the all parents scope.
//-----------------------------------------------------SCOPE IN PRACTICE-------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //console.log(firstName)
  function printAge() {
    //const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // going to redefine it in its child scope
    console.log(output);

    //---block scope
    if (birthYear >= 1981 && birthYear <= 1998) {
      var millenial = true; //can access this variable outside the block
      //creating NEW variable with the same name as outer scope's variable
      const firstName = 'sanjana'; //variable lookup of varible will not happen as the variable it is looking for is already in the current scope.

      //redefining or reassigning the(outer scope's variable)output variable from parentscope to child scope.

      output = 'New Output';
      const str = `oh, and you are a millenial, ${firstName} and this is the output ${output}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      //const output = "New Output"; //now this would become a completely new different variable and would not at all affect the output from the outer scope(as with the happen with the firstName variable) and will print the as it output which is defined in the current scope of output variable.
    }
    //console.log(str)  this will give error as const str is block scoped.
    console.log(millenial); //can log in console as variable declared with var keyword are function scoped, do they simply ignore the block,becz they are not block scoped at all. so here we are still in the same function
    //console.log(add(2,3)); //will throw the error as calling outside of the block(if block). becz the scope of this add function is just inside this block only. so it proves that functions are also block scoped.(imp->but that is only true for "strict mode")
    console.log(output); //wel, we get new output here, becz we actually manipulated an existing variable here, inside of a child(inner) scope
  }
  printAge();
  console.log('--------', firstName);
  return age;
}

const firstName = 'John';
console.log(calcAge(1991));
//console.log(age); //cant access this vriable (outside of the function)
//printAge(); //we cannot call the printAge function outside of its scope, for the same reason just like we cant access the age variable.
//firstName has same variable name but they are completely different variable with the same name . but it is totally fine as they are defined in different scopes.

//------------------------------------------------HOISTING-----------------------------------------------
//-------------------------------------------------------------------------------------------------------
//how variables are actuallly created in JS
//hoisting makes some types of variables accessible/usable in the code before they are actually declared. variables lifted to the top of
//their scope.
//behind the scenes
//Before execution, code is scanned for variable declarations, and for each variables, a new property is created in the variable
//environment object. this happens during the phase of creation of execution context
//Hoisting doesnot work for all variable types.
//Lets see on which types it works:

//1>function declaration-are actually hoisted and the initial  value in the variable environment is set to the actual function. Again,
//Because they are stored in the variable environment object, even before the code start executing.

//Var variables-
//varibles declared with var are also hoisted, but hoisting work in a different way here. so unlike functions, whe we try to access a
//"Var" variable before its declared in a code, we dont get the declared value, but we get undefined.

//Let and const
//on the other hand let and const variables are never hoisted. technically they are hoisted but not in practice. But their value is
//basically set to an initialized. so there is no value to work with at all. and so in practice , it is as if hoisting was not happening
//at all. instead we say that there variable are placed in so called Temporal Dead Zone, which makes it so that we cant access the variables
//between the beginning of the scope and the place where variblesa are declared.
//the consequences is , if we attempt to use a "let" and "const" variable before it is declared, we get an error.

//hoisting for function expression and arrow functions
//it depends if they were created using var, const or let. becx keep in mind that these functions are simply variables so they
//behave the exact same way as variables in regards to hoisting.
//
//this means that a functions exression or arrow functions created with var is hoisted to undefined. but if created with let and const, its
//not usable before it is declared in a code, because of the Temporal Dead Zone.
//so basically each and every let and const variable get their own TDZ that starts at the beginning of the scope until the line where
//it is defined. and the variables only safe to use after the TDZ.

//-----------------------------Hoisting and TDZ in practice-------------------------
//----------------------------------------------------------------------------------

//--Hoisting with variables
//trying to use following three variables before declaring them
console.log(me); //variables declared with var are actually hoisted, but they are hoisted to the value of undefined
//console.log(job); //will throw a referenceerror as the job variable is still in TDZ (TDZ starts from the beginning of the current
//scope(in this case, its the global scope) until the point of the code where it is defined)
//console.log(year);  //same is true for this const variable

//declaring the variables
var me = 'sanjana';
let job = 'developer';
const year = 1999;

//--Hoisting with Functions

//tryin to use function before they are defined
//console.log(addDeclaration(2,3))
//console.log(addExpression1(2,3)); //will throw an error as the case in let and const case while hoisting with Referenceerror
//console.log(addArrow(2,3));    //will throw the same error of referenceerror

//now calling the function which assigned with "var"
//console.log(addExpression);   //it is hoisted and set to "undefined". so we are trying to call an "undefined" thing. si gives error
//saying that undefined is not a function
// undefined(2,3)
//console.log(addExpression());
//console.log("***************************",addArrow1(2,3));

//lets declare function declaration and function expression
function addDeclaration(a, b) {
  return a + b;
}

const addExpression1 = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

var addExpression = function (a, b) {
  return a + b;
};

var addArrow1 = (a, b) => a + b;
//lets try to use these functions before they are defined

//Example
//console.log(undefined)
//var numProduct = 0;
if (!numProduct) {
  console.log('------------------------', numProduct);
  deleteShoppingCart();
}
var numProduct = 10; //due to hoisting it will set to undefined

function deleteShoppingCart() {
  console.log('All Products deleted');
}

//another example-==
var x = 1;
let y = 2;
const z = 3;
//window or window object is the global obeject of javascript in the browser. besides all the functions, we also get a property of x = 1.
//however we cant find the y or z here anywhere in this object and that's because they were declared with let or const. and so variables
// declares that way do not create properties on the window object.

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

///------------------------------------------------------The This Keyword-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//this keyword/variable : special variable that is created for everyone context(every function). takes the value of (points to) the "owner"
// of the function in which the "this" keyword is used.
//--value of "this" is NOT static.it's not always the same  it depends on how the function is called, and its value is only assigned when
//the function is actually called.

//four different ways of in which functions can be called.

//1.) call as a method---> this = <object that is calling the method>
//so as a function attached to an object

//-----example :-
// const jonas = {
//     name: "Jonas",
//     year: 1991,
//     calcAge : function (){
//         return 2037-this.year;
//     }
// };

// jonas.calcAge();
//here calcAge is a method. when we call a method the this keyword inside that method will simply point to the object on which the method
//is called.

//2.)simply calling functions as a normal functions => this = undefined (but only valid for strict mode, otherwise window(in the browser),
// pointto the global object).

//3.) arrow functions(remember-> arrow functions do not get their "this" keyword ). if we using this keyword in an arrow function, it will
// simply be the this keyword of the surrounding function(or parent function)
// this = <this of surrounding function (lexical this)>

//4.)if a functiom is called as a event listener,
// this = <DOM element that the handler is attached to>

//what a this keyword is not ?
//so the "this" will never point to the function itself, and also NOT the its variable environment.

//--This Keyword in practice--------
console.log(this);
//make a regular function call

const calcAgee = function (birthYearr) {
  console.log(2037 - birthYearr);
  console.log('@@@@@@@@@@@@@@@@@', this);
};
calcAgee(1991);
//so inside this just regular function call here, the "this" keyword will be undefined, becaue we are in strict mode. with a regular
//function call(simply mean a call of that function without the function being attached to any object so without having an owner).

const calcAgeeArrow = birthYearr => {
  console.log(2037 - birthYearr);
  console.log('********************', this);
};

calcAgeeArrow(1999);
//this proves that arrow function doesn't get its own "this" keyword. so instead arrow function simply uses the lexical this keyword(or
//parent scope).

//--"this" keyword inside a method

const jonas = {
  year: 1999,
  calcAgee1: function () {
    console.log('!!!!!!!!!!!!!!!!!!!!!!', this);
    console.log(2022 - this.year);
  },
};
jonas.calcAgee1();

//lets create new object
const matilda = {
  year: 1997,
};
matilda.calcAgee12 = jonas.calcAgee1; //we are just copying from one object to another object. because function also is just a value.
//this is called a method borrowing.
console.log(matilda);
matilda.calcAgee12();
//
//const f = jonas.calcAgee1;
//f(); //now here f becomes the regular function. there is no owner of this functio


//---------------------------Regular functions VS Arrow functions--------------------------------------
//-----------------------------------------------------------------------------------------------------
 var fname = "sanjana Thapa";
const jonas1 = {
  fName : "sanjana",
  year: 1999,
  calcAgee1: function () {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXX",2022 - this.year);
  },
  greet: () => {
    console.log('++++++++++++++++++++++++++++++++++++++', this);
    console.log(`my name is ${this.fname}`);
  },
};
jonas1.greet();
jonas1.calcAgee1();

//you should never ever use an arrow function as a method.
//another pitfall of using "this" keyword is when we have a function inside of a method .

const jonas2 = {
  fName : "Ujjwal",
  year: 1998,
  calcAgee1: function () {
    console.log(2022 - this.year);

    //solution 1--> by creating a variable 
    // const self =  this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1982 && self.year <= 2000);
    // }

    //solution 2
    const isMillenial = ()=>{
      console.log(this,"Sanjana");
      console.log("!!!!!!!!!!!!!",this.year >= 1982 && this.year <= 2000);
    }
    isMillenial();

  },
  greet: () => {
    console.log('++++++++++++++++++++++++++++++++++++++', this);
    console.log(`my name is ${this.fname}`);
  },
};
//jonas1.greet();
jonas2.calcAgee1();



//----------------------------------------------------Primitives VS Objects------------------------------------------------------------
//---------------------------------------------------------------OR--------------------------------------------------------------------
//----------------------------------------------------Primitive Types VS Reference Types-----------------------------------------------------
//primitives are like --> number, boolean, string, undefined, null, symbol, bigint

let age = 30;
console.log(age)
let oldAge = age;
age= 31;
console.log(age)
console.log(oldAge);

//variables actually holds a memory address.
//here age is allocated to a certain address and that variable will always point to the address not the value. so oldAge will also point to the same address as of age variable
//value at a certain memory address is immutable.

const mee = {
    name: "sanjanathapa",
    age: 22,
};

const friend1 = mee;
friend1.age = 25;
//friend1.age1 = 25;
console.log("Friend", friend1)
console.log("ME", mee)

//---Primitive and reference practice

//primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: "Williams",
  age: 27
};

//reference types
const marriedJessica = jessica;
//we are actually just copying the reference, which will then point to the same object.
marriedJessica.lastName = "Davis";
console.log("Before marriage", jessica);
console.log("After marriage", marriedJessica)
//marriedJessica = {} // cant assign a new object to the variable assigned with const.


//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"]
};
//if we wanted to copy this object, we could use a function called object.assign. this function essentially merge two
// objects and then return a new one.

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
// console.log("Before marriage", jessica2);
// console.log("After marriage", jessicaCopy)

//now we can preserve the original lastName "Williams", after we change the lastName on this other object here.
//behind the dcene--> so a new object was infact created in the heap and jessicaCopy is now pointing to that object. so 
//it has a reference to that object.

//////////////////////////////But this technique of Object.assign only works on the first level. in other words, if we 
//have an object inside the object, then this inner object will actually still be the same. so it will still point to 
//the same place in memory. so this Object.assign only creates a shallow copy and not a deep clone.

//so a Shallow Copy will only copy the properties in the first level while deep clone would copy everything.

//so now Suppose, jessicaCopy wants to increase her family members so:-
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);

//object.assign did not really, behind the scenes, copy it to the new object.
//now a deep clone is what we need here.
//How to create a deep clone ? next topic..we do this work using the librry lo-dash



////**************************************---END OF SECTION 8----****************************** */
