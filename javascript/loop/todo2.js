// todo2.js
// 배열 for문 while문

// 1~100까지 숫자를 배열에 담고 그중 7을 약수로 가지는 수와 4를 약수로 가지는 수를 하나의 객체에 담으시오
let number = [];
let number4 = [];
let number7 = [];
for (let i=0; i<= 99; i++) {
  number[i] = i;
}
console.log(number);
for(let i=0; i<=number.length; i++) {
  console.log(i);
  if(i % 4 == 0) {
    number4[i] = i;
  }else if (i % 7 == 0) {
    number7[i] = i;
  }
}
let numbers = {number4, number7};

// 배열에 객체값넣기 members[2] ={member_id: "user03", member_name: "김민식", point: 85};
// 객체 추가 let myInfo = {name: "홍길동",age: 20,height: 170,weight: 65};
// console.log(number);
console.log(numbers);