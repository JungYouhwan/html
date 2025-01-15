//forloop4.js
// 0 <= Math.random() * 100; < 100 => 50부터 100.
// 학생 10명의 임의 점수를 배열에 저장.
let scores = [];
// for(let i=0; i<=9; i++) {
//  let random = parseInt(Math.random() * 101);
//   if(random >= 50) {
//     scores[i] = random;
//     console.log(scores[i]);
//   }else {
//     i--;
//   }
// }
let sum = 0;
let max = 0;
let min = 100;
for(let i=0; i < 10; i++) {
  scores[i] = parseInt(Math.random() *51) + 50;
  sum += scores[i];
  console.log(scores[i]);
  if (max < scores[i]){
    max = scores[i];
  }
  if(min > scores[i]) {
    min = scores[i];
  }
}
console.log(`평균${sum / 10} 최대값${max} 최소값${min}`);