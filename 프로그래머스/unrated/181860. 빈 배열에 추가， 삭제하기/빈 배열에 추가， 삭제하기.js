function solution(arr, flag) {
    var answer = [];
    for (let i = 0; i < flag.length; i++){
        if (flag[i] === true){
            answer.push(...Array(arr[i] * 2).fill(arr[i]))
        }else{ // false
            answer.splice(-arr[i]) // 마지막 arr[i]개의 원소 제거
        }
    }
    return answer;
}