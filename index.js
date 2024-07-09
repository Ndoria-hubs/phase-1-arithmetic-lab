// Write your code here

// Number.isInteger(20);
// Number.isFinite(Infinity);
// Number.isNaN(10);
// Number.parseInt('100', 10);
// Number.parseInt('100', 2);
// Number.parseFloat('3.14159');

// Math.ceil;  //round off up to nearest whole number;
// Math.floor; //round off down to nearest whole number;
// Math.round;   //rounds off up or down whichever is nearest
// Math.max.min;  //accepts number of arguements adn return lowest an highest const.
// Math.random; //generates random number b2wn 0 and 1


// function multiply(product) {
//     let num1, num2;
//         // iterate possible values
//     for(let i=1; i <= product; i++){
//         // product divided by i gives an integer?
//         if(product % i === 0){
//            num1 = i;
//            num2 = (product / num1);
//             console.log(`${num1} * ${num2}`);
//         }
//         else{ return null}
//     }
//     console.log(num1, num2);

// }
// multiply(62);


let num1 = 2;
let num2 = 31;
const multiply = num1 * num2;
console.log(multiply);


let random;
do {
    random = Math.ceil(Math.random() + 1)
} while ( random <= 0);

console.log(random);


// Define the mod function
let num3 = 12;
let num4 = 8;
const mod = num3 % num4;
console.log(mod);


let numArr = [3,0,20,5,7,10,13,15,17];
const max = Math.max(...numArr);
console.log(max);