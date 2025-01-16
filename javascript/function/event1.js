// event1.js
//console.dir(); 속성을 볼수있음.
// id = #ekek
// class = .werwer
// name = 태그[name="이름"]
// value 속성값.
let item =document.querySelector('button[name="add"]');
let minuss =document.querySelector('button[name="minus"]');
let clears =document.querySelector('button[name="clear"]');

item.addEventListener('click', function() {
  let n1 = document.querySelector('input[name="first"]').valueAsNumber;
  let n2 = document.querySelector('#num2').valueAsNumber;
  // document.querySelector('#result')['value'] = n1 + n2;
  // document.querySelector('#result').valueAsNumber = n1 + n2; valueAsNumber = parseInt()를 안써도된다.
  document.querySelector('#result').value = parseInt(n1) + parseInt(n2);
});

minuss.addEventListener('click', function() {
  let n1 = document.querySelector('#num1').value;
  let n2 = document.querySelector('#num2').value;
  document.querySelector('#result').value = parseInt(n1) - parseInt(n2);
});
clears.addEventListener('click', function() {
  document.querySelector('#num1').value='';
  document.querySelector('#num2').value='';
  document.querySelector('#result').value='';
});
