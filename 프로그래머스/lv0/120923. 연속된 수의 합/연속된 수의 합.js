function solution(num, total) {
    // 중앙 값을 구하고 : 연속된 정수들의 합은 평균값이니까
    const mid = Math.floor(total / num)
    // 
    var answer = [];
    for (let i = Math.round(mid - (num - 1) / 2); i < Math.floor(mid + (num + 2) / 2); i++){
        answer.push(i)
    }
    return answer;
}