// condition4.js
// 자바스크립트는 변수의 값에 관대함.
// truthy (10, "문자", true)
// falsy (0, 공백, null, undifined)
// const obj = {
//   name:"홍길동",
//   age: 20,
//   showName: function () { // 메소드.
//     console.log(obj.name);
//   }
// }
// obj.showName();
// 1~10 사이의 임의수 출력.
// console.log(parseInt(Math.random() * 10)); // 0 <= x < 1값의 출력.
let num1 = parseInt(Math.random() * 10) + 1;
console.log(num1);
let num2 = parseInt(Math.random() * 10) + 1;
console.log(num2);
let sumEven = 10; // 짝수의 값은 sumEven에 합하기
let sumOdd = 20; // 짝수의 값은 sumEven에 합하기
// if(num1 % 2 == 0)
if(num1 % 2) {
  console.log("num1는짝수입니다.")
  num1 += sumEven;
} else {
  num1 += sumOdd
  console.log("num1는홀수입니다.")
}

if(num2 % 2) {
  console.log("num2는짝수입니다.")
  num2 += sumEven
} else {
  num2 += sumOdd
  console.log("num2는홀수입니다.")
}
//sumEven, sumOdd을 출력
console.log(num1);
console.log(num2);
