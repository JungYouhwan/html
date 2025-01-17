// exe2.js

let numAry = [{name:'조카', age:10},
              {name:'큰조카', age:14},
              {name:'삼촌', age:31},
              {name:'큰아버지', age:45},
              {name:'나', age:21}];

// 0번쨰 값은 10
// 1번쨰 값은 14
numAry.forEach(function(item, idx){
  console.log(`${idx}번쨰 값은 ${item.name}`);
})

// 10보다 큰값만 출력
console.log('--10살보다 많은 사람들--');
numAry.forEach(function(item){
  if(item.age > 10) {
    console.log(item.name);
  }
})

console.clear();

// 필터
let filAry = numAry.filter(function(item) {  
  if(item.age >20) {
    return true;
  }
  return false;
});
console.log(filAry);
console.log(numAry.name.indexOf('조카'));
let filters = numAry.filter(function(item) {  
  if(item.name.indexOf('조카') != -1) {
    return true;
  }
  return false;
});
console.log(filters);