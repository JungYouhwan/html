// object2.js
// concat(배열요소 합) 배열을 합칠떄 사용
// join, split, push, concat, pop, at, sort, reverse
let numAry1= [10, 20];
let numAry2= [30, 40];
let resultAry = numAry1.concat(numAry2);

console.log(resultAry.join('-').split('-'));

// join => 배열 -> 문자열
// split => 문자열 -> 배열
let result = resultAry.join('-').split('-');
console.log(result);
result.push('60'); // 배열에 값 추가
console.log(result);
console.log(result.pop()) // 최근 추가값을 삭제 기억
console.log(result);
console.log(result, result.indexOf('200')); // 요소의 인덱스 반환.
console.log(numAry1);
console.log(result);
// console.clear();

result = ["홍길동", "김민수", "허성식", "박창식"]

if(result.indexOf('김민수') != -1) { // index값이 1이기떄문
  console.log("찾는 이름이 존재합니다.")
} else {
  console.log("찾는 이름이 없습니다.");
}
console.log(result.at(1)); // 인덱스값에 맞는값 가져오기
console.log(result);
result.sort(); // 순서대로 정렬
console.log(result);
result.reverse(); // 반대로 정렬
console.log(result);