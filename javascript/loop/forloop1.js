// forloop1.js
let sum = 0;

// 1 ~ 10까지 출력.

// for(let i=1; i <= 10; i++) {
//   console.log(`현재 i의 값 : ${i}`);
//   sum = sum + i;
// }
// console.log('end of for');
// console.log(`sum의 결과값 ${sum}`);
let sum1 = 0;
// 1~10까지에서 홀수의 값을 더하기
for(let i=1; i <= 10; i++) {
  console.log(i);
  
  if (i % 2 == 1) {
    sum1 = sum1 + i;
    console.log('더함');
  }
}
console.log(`sum의 결과값 ${sum1}`);