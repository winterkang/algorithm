// function solution(s) {
//     let zero = 0
//     let total = 0
//     let convert = s.slice()
//     while (convert !== '10'){
//         let noZero = ''
//         let cnt = 0
//         for (let i = 0; i < convert.length; i++){
//             if (convert[i] === '1'){
//                 noZero += '1'
//             }else{
//                 cnt++
//             }
//         }
//         convert = noZero.length.toString(2)
//         total++
//         zero += cnt
//         // console.log(noZero, cnt, convert)
//         // console.log(total, zero)
//     }
//     return [total + 1, zero + 1];
// }
function solution(s) {
  let zero = 0;
  let total = 0;
  let convert = s;

  while (convert !== '1') {
    let newConvert = '';
    let newZero = 0;
    for (let i = 0; i < convert.length; i++) {
      if (convert[i] === '1') {
        newConvert += '1';
      } else {
        newZero++;
      }
    }
    convert = newConvert.length.toString(2);
    zero += newZero;
    total++;
  }

  return [total, zero];
}