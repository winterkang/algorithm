function solution(n) {
    let string = ''
    for (let i = 0; i < n; i++){
        string += '수박'.repeat(1)
    }
    const answer = string.slice(0, n)
    return answer;
}