// todo1.js

// 1~100 까지 랜덤 숫자 3개 뽑아서 최소값이랑 구하기
let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
let num3 = parseInt(Math.random() * 100) + 1;

console.log(num1);
console.log(num2);
console.log(num3);

if (num1 < num2) {
  if (num1 < num3) {
    console.log("num1이 작습니다.");
  } else {
    console.log("num3이 작습니다.");
  }
} else if (num2 < num3) {
  console.log("num2이 작습니다.");
} else {
  console.log("num3이 작습니다.");
}
