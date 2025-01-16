//function1.js

let numAry1 = [10, 20, 30];
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];

// function 함수명 (매개변수){
// 함수 내용
// } 

// 함수 호출할떄 들어갈 값을 같이 입력.

// 기능정의.
function arraSum(numAry) {
  let sum = 0;
  for (let i = 0; i < numAry.length; i++) {
    sum += numAry[i];
  }
  console.log('합계:' + sum);
}

arraSum(numAry1); //함수를 호출해서 실행할떄 값.
arraSum(numAry2);
arraSum(numAry3);