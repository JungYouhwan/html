//whileloop3.js
// object 타입.

let myInfo = { // object.
  name: "홍길동",
  age: 20,
  height: 170,
  weight: 65
};

console.log(myInfo);
console.log(`이름: ${myInfo.name}, 나이: ${myInfo['age']}`);
console.log(`키:${myInfo['height']}, 몸무게: ${myInfo.weight}`);

// for..in 반복문.
// for (let prop in myInfo) {
//   console.log(prop);
// }
for (let props in myInfo) {
  console.log(`속성: ${props}`, `값: ${myInfo.props}`);
}

let myFruebd1 = {
    name: "박석민",
    phone:"010-5555-6666",
    address: "대구 중구 400번지"
}
let myFruebd2 = {
  name: "박전자",
  phone:"010-5555-6666",
  address: "대구 중구 400번지"
}
let myFruebd3 = {
    name: "김석민",
    phone:"010-5555-6666",
    address: "대구 중구 400번지"
  }
  let friends = [myFruebd1, myFruebd2, myFruebd3];
for (let i = 0; i <= friends.length; i++) {
  console.log(friends[i]);

}


