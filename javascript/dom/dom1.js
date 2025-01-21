//dom1.js

document.addEventListener('DOMContentLoaded', init);

function init() {
  // console.log(document);
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // submit의 기본 기능 차단.(페이지넘어가는걸 방지)
    let mid = document.querySelector('input[name="member_id"]').value;
    let nid = document.querySelector('input[name="name_id"]').value;
    let pid = document.querySelector('input[name="point_id"]').value;


    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert('id를 5자 이상 20자 이하로 생성해주세요.');
      document.querySelector('input[name="member_id"]').value = '';
      document.querySelector('input[name="name_id"]').value = '';
      document.querySelector('input[name="point_id"]').value = '';
      return;
    }
    let member = {
      mid: mid,
      nud: nid,
      pid: pid
    };
    // let member = [mid, pid, nid];
    console.log(member);
    let tr = makeTr(member);
    // document.querySelector('input[name="member_id"]').value='';
    // document.querySelector('input[name="name_id"]').value='';
    // document.querySelector('input[name="point_id"]').value='';
    // <tr><td>admin</td>........</tr> 필요한 함수: createElement, appendChild

    // let td = document.createElement('td'); // 회원 ID
    // td.innerText = mid;
    // tr.appendChild(td);


    // let td1 = document.createElement('td'); // 회원이름
    // td1.innerText = nid;
    // tr.appendChild(td1);

    // let td2 = document.createElement('td'); // 회원점수
    // td2.innerText = pid;
    // tr.appendChild(td2);

    // let midd = mid.createTextNode('mid')
    // let nidd = mid.createTextNode('nid')
    // let pidd = mid.createTextNode('pid')
    // td.appendChild(pidd);
    // tr.appendChild(td);
    // td = document.createElement('td');
    // td.appendChild(nidd);
    // tr.appendChild(td);
    // td = document.createElement('td');
    // td.appendChild(midd);
    // tr.appendChild(td);
    // td = document.createElement('td');
    // tbody의 하위요소로 추가.
    document.querySelector('#list').appendChild(tr);
  }) // end of submit.
  function makeTrAry(mbr = []) {
    let tr = document.createElement('tr');

    mbr.forEach(function (item) {
      let td = document.createElement('td');
      td.innerText = item;
      tr.appendChild(td);
    })
    return tr;
  }
  let check = document.querySelector('thead input');
  check.addEventListener('change', function () {
    document.querySelectorAll('tbody input').forEach(function (item) {
      item.checked = check.checked;
      // if (check.checked) {
      //   item.checked = true;
      // } else {
      //   item.checked = false;
      // }
    })
  })
} // init


function makeTr(mbr = {}) {
  let tr = document.createElement('tr'); // td*3를 자식요소로 가질 부모
  let inp = document.createElement('input');
  let td = document.createElement('td');
  inp.type = 'checkbox';
  tr.appendChild(td);
  td.appendChild(inp);
  // 오브젝트로 하는 방법.
  for (let prop in mbr) {
    let td = document.createElement('td'); // 회원 ID
    td.innerText = mbr[prop];
    tr.appendChild(td);
  }
  // <td><button>삭제</button></td>e
  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.style.backgroundColor = 'aqua';
  btn.innerHTML = '삭제'
  btn.addEventListener('click', function () {
    btn.parentElement.parentElement.remove(); // 상위의 상위의 노드
  })
  td.appendChild(btn); // appendChild는 뒤에 붙기떄문에 버튼을 td에 먼저 붙이기.
  tr.appendChild(td); // 붙인 td에 tr을 붙여주기
  console.log(tr);
  return tr; // return;

}