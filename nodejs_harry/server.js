//node modules holds all packages
//console.log("Hello World");
//https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b=slugify('some string', '_')  // some_string
console.log(b)