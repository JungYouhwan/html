// function2.js

/*
  함수이름: getMax
  매개변수: 배열(numAry)
  기능: 배열의 요소중에서 제일큰값을 콘솔출력.
*/
let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];
for(let i=0; i< 5; i++) {
  ary3[i] = parseInt(Math.random() * 50);
}
console.log(ary3);
function getMax(numAry) {
  let max = 0;
  for(let i=0; i < numAry.length;i++) {
    if(numAry[i] > max) {
      max = numAry[i]
    }
  }
  // console.log('제일 큰값:' + max);
  return max; // 함수를 호출한 영역으로 반환.
}
document.write('ary1: '+ getMax(ary1));
alert('ary2: '+ getMax(ary2));
console.log('ary3: ' + getMax(ary3));
// getMax(ary1); 
// getMax(ary2);
// getMax(ary3);
