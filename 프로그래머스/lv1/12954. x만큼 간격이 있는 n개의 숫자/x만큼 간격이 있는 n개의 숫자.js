// function solution(x, n) {
//     var answer = [];
//     let total = 0
//     while (answer.length !== n){
//         if (x === 0){
//            answer.push(0)
//         }
//         if (x > 0){ // x가 양수
//             for (let i = x; i <= x*n; i += x){
//             answer.push(i)
//             }   
//          }else{ // x가 음수
//               for (let i = x; i >= x*n; i += x){
//                    answer.push(i)
//               }
//       }
//     }
//     return answer;
// }
function solution(x, n) {
  const answer = [];

  if (x === 0) {
    for (let i = 0; i < n; i++) {
      answer.push(0);
    }
  } else if (x > 0) {
    for (let i = x; i <= x * n; i += x) {
      answer.push(i);
    }
  } else {
    for (let i = x; i >= x * n; i += x) {
      answer.push(i);
    }
  }

  return answer;
}
