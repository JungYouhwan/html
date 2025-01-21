
document.querySelector('button:nth-of-type(1)').addEventListener('click', function() {
  let val = document.querySelector('#user-id');
  let password =document.querySelector('#user-pw1');
  let password2 =document.querySelector('#user-pw2');
  
  if(4 >= val.value.length || 15 <= val.value.length) {
    alert('4글자이상 15글자 이하로 입력해주세요');
    val.focus();
  }else if(8 >= password.value.length) {
    alert('비밀번호가 8자리 이상 값이 아닙니다.');
    password.value.innerText('');
  }else if(password2.value != password.value){
    alert('비밀번호가 다릅니다.');
    password2.value.innerText('');
    password2.focus();
  }
});