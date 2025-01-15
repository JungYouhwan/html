// while4.js
// member_id: "user01", member_name: "홍길동", point: 80
// member_id: "user02", member_name: "신현욱", point: 90
// member_id: "user03", member_name: "김민식", point: 85

let members = [];
members[0] ={member_id: "user01",member_name: "홍길동", point: 80};
members[1] ={member_id: "user02", member_name: "신현욱", point: 90};
members[2] ={member_id: "user03", member_name: "김민식", point: 85};
// 제일 높은 포인트 뽑기 아이디도 가져오기
let max = members[0];
let maxid;
for(let i =0; i < members.length; i++) {
  if(members[i]['point'] > max.point){ // 객체끼리 비교.
    // max = members[i]['point'];
    // maxid= members[i]['member_id'];
    max = members[i];
  }
}
console.log(max);
console.log(maxid);