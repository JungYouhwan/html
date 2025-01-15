//whileloop5.js

let members = [];
members[0] ={member_id: "user01",member_name: "홍길동", point: 80};
members[1] ={member_id: "user02", member_name: "신현욱", point: 90};
members[2] ={member_id: "user03", member_name: "김민식", point: 85};
// let searchName = prompt("찾을 친구 이름 입력: ");
// for(let i=0; i<members.length; i++) {
//   if(searchName == 'stop') {
//     i = members.length;
//   }else{
//     if(searchName == members[i]['member_name']){
//       console.log(members[i]);
//       console.log(members[i]['point']);
//     }
//   }
// }
let run = true;
  while(run) {
    let searchName = prompt("찾을 친구 이름 입력: ");
    for(let i=0; i<members.length; i++) {
      if(searchName == members[i]['member_name']){
              console.log(members[i]);
              console.log(members[i]['point']);
              run = false;
              console.log('찾았습니다.');
      }else if(searchName == 'stop'){
        run = false;
        i = members.length;
        console.log('중단합니다.');
      // }else 
      // if (searchName ) {
        
      }else{
        run = false;

      }
    }
}
console.log('종료!');