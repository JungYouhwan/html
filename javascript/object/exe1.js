// 연습1. exe1.js
let myFriends = [];

myFriends.push({name: "홍길동", escore: 70, kscore: 78, gender: 'Female'});
myFriends.push({name:"신현욱", escore: 80, kscore: 88, gender: 'Female'});
myFriends.push({name:"김민식", escore: 90, kscore: 70, gender: 'Male'});
myFriends.push({name:"석지욱", escore: 95, kscore: 55, gender: 'Female'});

// forEach: 콘솔출력
myFriends.forEach(function (item) {
  console.log(item.name);
})
// 90점 이상 뽑아오기
myFriends.forEach(function (item) {
  if(item.escore >= 90){
    console.log('90점 이상 ' + item.name);
  }
})
// 평균점수가 80이상.
myFriends.forEach(function (item){
  if(((item.escore + item.kscore) / 2) >= 80) {
    console.log(item.name+ '80점 이상입니다.');

  }
  // console.log(item.name +'은 '+(item.escore + item.kscore) / 2);  
})

// 여학생의 영어평균.
let ee = 0;
let escores = 0;
myFriends.forEach(function (item){
  if(item.gender == "Female") {
    ee ++;
    escores += item.escore;
  }
})
console.log('여학생 수: ' + ee);
console.log('여학생 평균영어 점수 ' + parseInt(escores / ee));

// 여학생의 영어 평균 미만
let underAvgAry = [];
myFriends.forEach(function (item){
  if(parseInt(escores / ee) > item.escore) {
    underAvgAry.push(item.name);
  }
})
console.log(underAvgAry);
// gen = [];
// myFriends.filter(function(item) {
//   if(parseInt(escores / ee) > item.escore) {
//     return true;
//   }
//   return false;
// })
// console.log(gen);
