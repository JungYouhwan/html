let btn = document.querySelector('#add');
let gim = [];
let html = '';
btn.addEventListener('click', function () {
  let val = document.querySelector('#item').value;
  html += '<ul>'
  document.querySelector('#item').value = '';
  if(val == ''){
    alert('아무것도 입력하지 않았습니다.');  
    return;
  }
  let xbtn = document.querySelector('');
  gim.push(val);
  console.log(gim);
  for (let i = 0; i <= gim.length; i++) {
    html += `<ul><li>${gim[i]}<button>X</button></li></ul>`;
  }
  html += '</ul>'
})

document.querySelector('#itemList').innerHTML = html;