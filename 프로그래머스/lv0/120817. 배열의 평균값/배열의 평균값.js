function solution(numbers) {
    let sum = 0
    const len = numbers.length
    for (let i = 0; i < len; i++){
        sum += numbers[i]
    }
    const answer = sum / len
    return answer;
}