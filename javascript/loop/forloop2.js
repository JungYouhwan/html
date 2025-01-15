// forloop2.js
// 1~10까지 짝수값을 구하는 반복.

// for (let i=1; i <= 10; i++){
//   if(i % 2 == 0) {
//     console.log(i);
//   }
// }
// 2단만들기
let html = '';
html += '<table border="1">';
html += '<tbody>';
for(let i=1; i<=9; i++) {
  if(i % 2 == 0) {
    html += `<tr><td style='background-color: yellow;'>2 * ${i} = ${2 * i}</td></tr>`;
  }else {
    html += `<tr><td>2 * ${i} = ${2 * i}</td></tr>`;
  }
}
html += '</tbody></table>';
document.write(html);
// 이걸 활용해서 구구단 만들기
// for (let i=2; i <= 9; i++) {
//   document.write(`<table border="1" class="si">`);
//   document.write('<tbody>');
//   for (let e=1; e<=9; e++){
//     document.write('<tr>');
//     document.write(`<td>${i} * ${e} = ${i * e}</td>`);
//     document.write('</tr>');
//   }
//   document.write('</tbody>');
//   document.write('</table>');
// }
// for (let e=1; i<= 9; e++) {
//   let a = i * e;
// }
// document.write('<td>2 * 1 = 2</td></tr><tr>');
// document.write('<td>2 * 2 = 4</td></tr><tr>');
// document.write('<td>2 * 3 = 6</td></tr><tr>');
// document.write('<td>2 * 4 = 8</td></tr><tr>');
// document.write('<td>2 * 5 = 10</td></tr><tr>');