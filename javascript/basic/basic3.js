// basic3.js

/*
두 숫자를 입력받아서 두수의 곱을 출력.
첫번쨰 값에 5의 값을 더하고, 두번쨰 3의 값을 뺴서 두수의 차를 구해보세요.
*/

 let one = parseInt(prompt("첫번쨰 숫자를 입력하세요."));
 let two = prompt("두번쨰 숫자를 입력하세요.");
 console.log(typeof one);
//  one = ++one ;
//  two = --two ;
 console.log(one, two);
//  one = parseInt(one) + 3;
//  two = parseInt(two) - 3;
 one = one += 5; // parseInt(one) +1;
 two = two -= 3; // parseInt(two) +1;
 // ++증감연산자 --감소 연산자
//  let sum = one * --two;
let sum = one - two;
 console.log(`${one}과 ${two} 값을 뺴면 ${sum}`);

 
//  let resu = ++ one / --two;
//  console.log(`${one}과 ${two} 값을 나눈값은 ${resu}`);
//  let sum = one * two; // *는 number타입으로 자동변환 해줍니다.
//  let resu = one / two;

// 배열은 인덱스를 기준으로 값을 따로 가져올수있다.

let ba = ['봄', '여름', '가을', '겨울'];

console.log(ba[0]);
console.log(ba[1]);
console.log(ba[2]);
console.log(ba[3]);