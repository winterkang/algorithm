// function solution(arr, k) {
//     let answer = []
//     for (let i = 0; i < arr.length; i++){
//         if (!answer.includes(arr[i])){
//             answer.push(arr[i])
//         }
//     }
//     if (answer.length > k){
//         return answer.slice(0, k)
//     }else if (answer.length < k){
//         for (let i = 0; i <= k - answer.length; i++){
//             answer.push(-1)
//         }
//     }else{
//         return answer
//     }
//     return answer;
// }
function solution(arr, k) {
  const distinctSet = new Set(arr);
  const distinctArray = Array.from(distinctSet);

  if (distinctArray.length > k) {
    return distinctArray.slice(0, k);
  } else {
    const answer = distinctArray.concat(Array(k - distinctArray.length).fill(-1));
    return answer;
  }
}