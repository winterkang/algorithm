function solution(s) {
    var answer = true;
    const arr = s.split('')
    if (arr.length === 4 || arr.length === 6){
        for (let i = 0; i < arr.length; i++){
            if (isNaN(Number(arr[i]))) return false
        }            
    }else return false
  return answer
}