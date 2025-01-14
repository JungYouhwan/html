// condition5.js

// 두 수: 1 ~ 100 까지의 임의의 값을 생성.
// 큰수에서 작은 수 뺴서 결과값을 출력.
let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
let num3 = parseInt(Math.random() * 100) + 1;
console.log(num1);
console.log(num2);
console.log(num3);
let numb;

if (num1 > num2) {
  numb = num1 - num2
} else {
  numb = num2 - num1
}
console.log(numb);
console.log("------------")
// 세가지 수 중에서 제일 큰 값을 출력.
// num1 = 25 num2 = 30 num3 = 35
if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1이 큽니다.");
  } else {
    console.log("num3이 큽니다.");
  }
} else if (num2 > num3) {
  console.log("num2이 큽니다.");
} else {
  console.log("num3이 큽니다.");
}