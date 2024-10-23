let str = "Hello World My Name Is Burnee";
let str1 = new Array("abc","def","ghi","jkl");

console.log(str.split(' '));

let splitStr1 = [];
str1.forEach(element => {
    splitStr1.push(element.split(''));
});
console.log(splitStr1)