function solution(arr, divisor) {
    // 오름차순 정렬
    let answer = [];
    for (a of arr){
        if (a % divisor === 0){
            answer.push(a)
        }
    }
    if (answer.length === 0){
        answer.push(-1)
    }
    answer.sort((a,b)=> a-b)
    console.log(answer)
    return answer;
}