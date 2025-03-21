//closure scope (imp concept in comp sci especially while doing functional programming) - whenever a function is born, whatever scopes are available at its birth place of the function are captured by the function and they remain till the function exist in the memory
//variables can be shadowed inside a closure scope
//arguments keyword is not captured by closure
function outer(arg1) {
    let var1 = 10
    let x = 10
    
    function inner(arg2) {
        let var2 = 20
        let x = 20
        console.log(arg1, var1, arg2, var2, x)
        console.log(arguments[0])
    }

    return inner
    // return 10
}

let x = outer('param1', 11)

// typeof x == 'function'
// x == inner

// scope of arg1 and var1 are from lines 2 to 10

x('param2')