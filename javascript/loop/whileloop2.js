// whileloop2.js
// stop을 입력하면 반복문 종료.
// 입력한 값중 제일 큰값만 출력

// let max = 0;
// let st = true;
// while(st) {
//   let inputValue = prompt("점수를 입력하세요: ");
//   console.log(inputValue);
//   if (inputValue == "stop") {
//     st = false;
//   }else if(parseInt(inputValue) > max){
//     max = parseInt(inputValue);
//   }
// }
// console.log(max);

let max = 0;
let st = true;
let inputValue = 0;

while(st) {
  inputValue = prompt("점수를 입력하세요: ");
  console.log(inputValue);
  if (inputValue == "stop" || inputValue == null) {
    st = false;
  }else if(parseInt(inputValue) > max){
    max = parseInt(inputValue);
  }
}
console.log(max);