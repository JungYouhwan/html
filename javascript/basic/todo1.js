// todo1.js

// 100까지 랜덤 돌려서 10의 자리수를 더하기
// 예시 53 + 5     37 + 3
// 랜덤값 더한값 출력

// 1~100 까지 랜덤 숫자 3개 뽑아서 최솟값이랑 구하기
let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
let num3 = parseInt(Math.random() * 100) + 1;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1이 작습니다.");
  } else {
    console.log("num3이 작습니다.");
  }
} else if (num2 > num3) {
  console.log("num2이 작습니다.");
} else {
  console.log("num3이 작습니다.");
}
