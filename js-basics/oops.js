//oop in js

//allows to create objects without defining the class

//another way
function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}

//new keyword
let mango=new Fruit('sweet','yellow');
let orange=new Fruit('sour','orange');

//one way
var a={
    taste:'sweet',
    color:'red',
}

//class keyword (ESCMAScript 2015)
//class-declaration
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
}
//functions-declaration, function expression
let kiwi=new FruitClass('sour','green');

//class expression
let FruitClass2=class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
}

let kiwi2=new FruitClass2('sour','green');

/*
//one way to create object
//JSON- JavaScript Object Notation
var bird={
    x:100,
    y:20,
    color:'blue',
    eggs:['one','two','three'],
    fly:function(){
        console.log('bird is flying',this.x,this.y) //this refers to the current object
    }
};
console.log(bird.x)
bird.eggs.forEach(function(val,idx){
    console.log(val,idx) 
})
*/