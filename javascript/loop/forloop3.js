// forloop3.js
// 배열

let sum = 0;
let numAry = [10, 20, 30, 40]; // 배열생성.
numAry[4] = 50;
numAry[5] = 60;
numAry[6] = 70;
numAry[7] = 80;
console.log(numAry.length);

// 6번째 위치값(60)을 7번쨰 이동.
// 7번째 위치값(70)을 7번쨰 이동.
let pos = 1;
let temp = numAry[pos + 1];
numAry[pos + 1] = numAry[pos];
numAry[pos] = temp;

for(let i=0; i < numAry.length; i++) {
  console.log(`${i}번쨰의 값=> ${numAry[i]}`);
sum += numAry[i];
}
console.log(sum);