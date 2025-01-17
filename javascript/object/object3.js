// object3.js
// forEach() 반복문임.배열안의 값 만큼 반복
// 사용할려면 함수를 써줘야함
// 함수안에 순서대로 변수명을 설정.
// 처음은 배열값, 인덱스번호, 들어있는 값
// forEach 형식 = 배열이름.forEach(함수(배열값, 인덱스번호, 배열){};)
let numAry = [20, 13, 45, 62, 19];
console.log(numAry);
let sum = 0;
let sum1 = 0;
let max = 0;
numAry.forEach(function (item, index, ary) {
  if(item % 2 == 0) {
    sum += item;
  }
  if(index % 2 ==0){
   sum1 += item; 
  }
  if(item > max) {
    max = item;
  }
});
console.log('짝수값을 더하면' + sum);
console.log('홀수값을 더하면' + sum1);
console.log('최대값구하기' + max);


// filter는 조건에 만족하는 값으로 새로운 배열을 만듬.
// filter(function(item, idx, ary) {}) 

let filterAry = numAry.filter(function(item, idx, ary) {
    if(item%2==1){
      return true;
    } else {
      return false;
    }
})
console.log(filterAry);
