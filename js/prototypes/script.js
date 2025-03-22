let str = "Asdasd"                              // 3 levels from null
let num = 233                                   // 3 levels from null
let bool = true                                 // 3 levels from null
let arr = [246,436,6,346]                       // 3 levels from null
let obj = {a: 10, b: 'asdasd'}                  // 2 levels from null
let fun = function () { console.log ('yay!') }  // 3 levels from null

// if x and y are not primitive
// x == y : true <- what does this mean ? //reference same memory ke andar same location pe hai
// this means they are reference to the same object in memory

console.log('======= types =======') //these all functions exist in window
//window.String  //function String() //all are global functions
//window.Number //window is the global scope
//window.Boolean
//window.Array
//window.Object
//window.Function
console.log('typeof String', typeof String) //function
console.log('typeof Boolean', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array', typeof Array)
console.log('typeof Object', typeof Object)
console.log('typeof Function', typeof Function)

console.log('======= proto chain =======')
console.log(str.__proto__.__proto__ == obj.__proto__) //true
console.log(num.__proto__.__proto__ == obj.__proto__) //true
console.log(bool.__proto__.__proto__ == obj.__proto__) //true
console.log(arr.__proto__.__proto__ == obj.__proto__)  //true
console.log(fun.__proto__.__proto__ == obj.__proto__)  //true

// Everything indirectly inherits from the same thing
// that obj is inherited from
// i.e. in Javascript, everything is essentially an Object

console.log('======= prototypes ======= ')
//proto hidden field prototype not hidden
console.log(obj.__proto__ == Object.prototype) //true
console.log(str.__proto__ == String.prototype) //true
console.log(num.__proto__ == Number.prototype) //true
console.log(bool.__proto__ == Boolean.prototype) //true
console.log(arr.__proto__ == Array.prototype)    //true
console.log(fun.__proto__ == Function.prototype)  //true

//str->String->Object->null
//obj->Object->null
//num->Number->Object->null
//bool->Boolean->Object->null
//arr->Array->Object->null
//fun->Function->Object->null

// String.prototype inherits from Object.prototype

//document.body.__proto__ -> HTMLBodyElement.prototype -> HTMLElement.prototype -> Element.prototype -> Node.prototype -> EventTarget.prototype -> Object.prototype -> null

// typeof Object.prototype //"object"

// typeof Object.create(Boolean.prototype) -> ?? //object
// let x = Object.create(Boolean.prototype)
// x.__proto__ == Boolean.prototype //true
// typeof x //object
// typeof bool //boolean
// typeof x== typeof bool //false

//all objects are not functions but all functions are objects

console.log(str.charAt(4))
console.log(typeof str.charAt) // ?  //function
let str2 = "dgndgn"
console.log(str.charAt == str2.charAt) // true

str.charAt = function () { return 'X' } //redefine not possible like this so it does not make a difference

String.prototype.charAt = function () { return 'X' } //this redefines it
console.log(str.charAt(1))

// protype means blueprint
// String.prototype contains all default string functions
// like charAt, indexOf, substring, slice etc 

Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join = function () {
    console.log('join called on', this)
    return this.joinOriginal(...arguments)
}
/**
 * Array.prototype 
 * {
 *  .... 
 *  joinOriginal: function () {},
 *  join: function () { our fun },
 *  ....
 * }
 */

// delete operator
// window.x=10
// delete window.x
// window.x //undefined
