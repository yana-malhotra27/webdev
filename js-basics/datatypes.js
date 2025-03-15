
let a = function () {
    return 1
}

let b = 1

console.log(13313, typeof 13313)
console.log(234234.5356, typeof 234234.5356)
console.log('a', typeof 'a')
console.log('asdasfasfa', typeof "asdasfasfa")
console.log(true, typeof true)
console.log(null, typeof null)
console.log(undefined, typeof undefined)
console.log(a(), typeof a())
console.log(a, typeof a)

a()
console.log(b()) //error

console.log((a), (b)) //no diff than line 22
console.log(a, b)
console.log(a(), b())