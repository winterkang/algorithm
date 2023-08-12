function solution(n, s) {
    if (n > s){
        return [-1]
    }
    const quotient = Math.floor(s / n) // 몫
    const remainder = s % n // 나머지
    const answer = []
    
    for (let i = 0; i < n; i++){
        // 몫 + (i와 나머지 값을 비교해서 나머지가 크면 1, 아니라면 0)
        answer.push(quotient + (i < remainder ? 1 : 0))
    }
    return answer.sort((a, b) => a - b)
}
// console.log(solution(3, 10)) // [3, 3, 4]