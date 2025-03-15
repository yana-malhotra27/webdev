//js
//variables, arrays, functions, loops, classes, objects
let e=10;
let d=[1,2,3]
console.log(d["length"])
d.length;
d.push(9)
d.pop()
d.indexOf(2)
d.shift();
d.unshift(3)
c=20; //global variable
var k=30; //function scope
let a=50; //block scope

function f(){
    let e=3
    if(e==3){
        let f=4;
        //f=10; //function scope so no reference error since global
        //var f=10; //function scope so no reference error
        console.log('inside',f)
    }
    console.log("outside", f) //reference error
}
console.log(f) //reference error

for(let i=0;i<3;i++){
    console.log(d[i]);
}