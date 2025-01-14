// basic4.js

// 278 시간 => 11일 몇시간 입니다.
// 89349 분 => ?일 ?시간 ?분 입니다.
// 시간을 입력받아서 값나오기
// 분을 입력받아서 값나오기


// let hh = prompt("시간을 입력하세요");
let mms = prompt("분을 입력하세요");
// 시간을 계산
// let days = parseInt(hh / 24);
// let hou =  parseInt(hh % 24);
// 분을 계산
let day = parseInt((mms / 60) / 24);
let hhs = parseInt((day % 24));
let mm = parseInt(hhs % 60);

//  console.log(`입력받은 시간값은 ${day}일은 ${mm}분은 ${ss}초는 입니다.`);
//  console.log(`입력받은 값은 ${hhs} 입니다.'`);
//  console.log('입력받은 분값은 ' + parseInt(mms / 60 / 24) + '일' + parseInt(mms / 60) + '시간' + parseInt(mms * 60) + '초 입니다.');
// let min =  parseInt((mms % 24) * 60);

// console.log('입력받은 시간은 ' + days + '일 '+ hou + '시 입니다.');
console.log('입력받은 분은 ' + day + '일 '+ hhs + '시 ' + mm + '분입니다.');
// 시간을 입력받아서 몇칠 몇분 몇초 변환하기+
// 2400 시간


