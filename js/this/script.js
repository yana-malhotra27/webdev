// Answer in context of C++/Java
// What does the keyword "this" mean, what does it refer to ?
// In which places in code can we NOT use "this" ?

//this points to the place where function is been called
//this is bounded at runtime
//if via obj then obj if not then it will point current window

//all keys are strings

function checkThis() {
    console.log(this)  //it referes to the global scope
}
let obj = {
    "a": 10,
    b: 'asdsa',
    c: true,
    d: function () {
        console.log(this)  //pointer to obj itself
    },
    10: 32246,  //obj.10 is invalid cant be accessed keys can only be string so 10 is considered as string
    // obj['10'] can be accessed
    true: 'asdasd', //true is also considered as string
    e: {
        l: 234,
        m: 'sdgsdg',
        n: function () {
        console.log(this) //pointer to e
        },
    },
}