function doSomething (done) {
    console.log('1. doing something')
    setTimeout(done, 0)
}

doSomething(() => {
    console.log('2. it was done')
})

console.log('3. end')


//order of output
//1
//2
//3

// function doSomething (done) {
//     console.log('1. doing something')
//     done()
// }

// doSomething(() => {
//     console.log('2. it was done')
// })

// console.log('3. end')