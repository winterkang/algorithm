function solution(n) {
    var answer = [];
    for (let i = 1; i <= 186; i++){
        if (i % 3 !== 0 && ![...i.toString()].includes('3')){
            answer.push(i)
        }
    }
    return answer[n - 1];
}