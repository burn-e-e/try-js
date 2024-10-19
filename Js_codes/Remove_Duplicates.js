
const randomArray = (length, max) => 
    Array(length).fill().map(()=>Math.round(Math.random()*max))

console.log(randomArray(10,20));