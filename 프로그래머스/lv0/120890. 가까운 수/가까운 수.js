// function solution(array, n) {
//     var answer = 0;
//     // array = [3, 12, 28]
//     // 절대값 차와 배열 생성
//     const arr = array.map(item => Math.abs(item - n))
//     console.log(arr)
//     let index = []
    
//     // 절대값 차이가 모두 다른 경우
//     if (arr[0] !== arr[1] !== arr[2]){
//         // arr에서 가장 작은 수를 찾고 인덱스를 찾아서 array에 접근 return
//         return array[arr.indexOf(Math.min(...arr))]
        
//     }else{ // 만약에 절대값 차이가 동일한 경우가 존재하는 경우
//         const small = arr.sort((a, b) => a - b)
//         // console.log(small)
//         // console.log(small[0], small[1])
//     }
//     return Math.min(array[index[0]],array[index[1]]);
// }
function solution(array, n) {
  const arr = array.map(item => Math.abs(item - n));
  const minDiff = Math.min(...arr);
  const closestNumbers = array.filter((item, index) => arr[index] === minDiff);
  const closestNumber = Math.min(...closestNumbers);
  
  return closestNumber;
}
