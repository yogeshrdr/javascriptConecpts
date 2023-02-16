//Syntax

let add1  =  function(a,b){
    return a+b;
}

let add2 = ( a, b ) => {
    return a+b;
}


console.log(add1(10,30), add2(40, 50));


//this keyword

// let obj = {
//     id: 42,
//     counter: function counter(){
//         setTimeout(function(){
//             console.log(this.id);
//         }, 1000);
//     }
// };

let obj1 = {
    id: 42,
    counter: function counter(){
        setTimeout(function(){
            console.log(this.id);
        }.bind(this), 1000);
    }
};

let obj2 = {
    id: 42,
    counter : function counter(){
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
};


obj1.counter();
obj2.counter();


//new function

function Car1(color) {
    this.color = color;
}

const blueCar1 = new Car1('blue');

const Car2 = (color) => {
    this.color = color;
};
  
const blueCar2 = new Car2('blue');

