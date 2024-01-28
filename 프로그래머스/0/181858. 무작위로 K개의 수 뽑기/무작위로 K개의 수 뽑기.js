function solution(arr, k) {
    var answer = [];
    for (let i = 0; i < arr.length; i++){
        if (answer.length !== k && !answer.includes(arr[i])){
            answer.push(arr[i])
        }
    }
    for (let i = 0; i < k; i++){
        if (answer.length !== k){
            answer.push(-1)
        }
    }
    return answer;
}