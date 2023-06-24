function solution(sides) {
    var answer = 0;
    const sorted = sides.sort((a, b) => a - b)
    const max = sorted[1]
    const sum = sides.reduce((acc, cur) => acc + cur, 0)
    // 가장 긴 변
    for (let i = (max - sorted[0] + 1); i <= max; i++){
        answer += 1
    }
    // 합
    for (let i = max + 1; i < sum; i++){
        answer += 1
    }
    return answer;
}