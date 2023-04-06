function solution(a, b) {
    let answer = 0;
    const max = Math.max(a, b)
    const min = Math.min(a, b)
    for (let start = min; start <= max; start++){
        answer += start
    }
    return answer;
}