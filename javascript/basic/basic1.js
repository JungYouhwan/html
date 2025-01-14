// basic1.js
/*
  변수 선언: 이름, 연락처, 주소 선언.
  console 출력.
*/

let namee = "youhwan";
let tell = "010-2492-5302";
let adds = "대구 남구 안지시장";

const bloodType = "5";
// bloodType = "A"; 
const PI = 3.14; // 프로그램 변하지 않는 값으로 선언.

console.log("내 이름은" + namee + " 입니다.");
namee = "김길동"
console.log("내 이름은" + namee + " 입니다.");

console.log("내 연락처는 " + tell + " 입니다.");
console.log("내 주소는 " + adds + " 입니다.");
console.log(`으라랴랴 ${adds} 입니다.`);
console.log(bloodType);

console.log(`반지름 5인 원의 넓이는 ${5 * 5 * PI} 입니다.`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let myInfo = {
  name: "홍길동",
  age: 20
};

let csores = [10, 20, 30] // 배열..
let specialType = null;

console.log(typeof specialType); // 변수의 자료형을 출력.
