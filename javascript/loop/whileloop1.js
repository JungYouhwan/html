// whileloop1.js

// 1부터 10까지 출력.
let i =1;
while (i <= 10) {
  console.log(`현재 i의 값 = ${i}`);
  i++;
}
// 조건에 true넣으면 무한반복
let run = true;
while(run) {
  let temp= parseInt(Math.random() * 100);
  console.log(temp);
  if (temp < 40){
    // break; // 반복문 종료할때.
    run = false;
  }
}
console.log('end of program.');