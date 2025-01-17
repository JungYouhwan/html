//object4.js
// 시간

let month =2;
let date = 0;
let year = 2024;
let a = 'hello';
let b = 'hello';
console.log(a == b);
let today = new Date();

today.setFullYear(year);
today.setMonth(month);
console.log(today);
today.setDate(date);
today = new Date(2024, 4, 3, 15, 30, 22);
today = new Date();
console.log(today.getTime());
let now = new Date();
console.log(today == now);
console.log(today);

 // 2022년 5월
 today.setFullYear(2022);
 today.setMonth(4);
 
 console.log(today);
