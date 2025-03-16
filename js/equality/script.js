console.log(1 == '1') // true //abstract equality comparison - values if dt same or dt covert and then val same
console.log(1 === '1') // false //strict equality comparison - datatype as well as value

// peculiar cases 

console.log(0 == '') // true, because Number('') == 0

console.log('false' == false) // false, Number('false') == NaN

console.log('' == false) // true, both typecast to 0

// '\n'=='\t' // false
// '\n'==0 //true
// '\t' == 0 //true

// this doesn't hold good for abstract equality 
// a = b,  b = c  ... implies that .. a = c

console.log([1,2] == [1,2]) // false //reference alag