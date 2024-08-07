const hello = (name, age) => {console.log(`Hi ${name}`)
                              console.log(`You are ${age} years old.`);};
hello("Burnee",20);

setTimeout(function(){
    console.log("Hello!");
},1000);

setTimeout(() =>console.log("1 sec has passed!"),1000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((num) => Math.pow(num, 2));

const cubes = numbers.map(element => element * element * element);
console.log(squares);
console.log(cubes);