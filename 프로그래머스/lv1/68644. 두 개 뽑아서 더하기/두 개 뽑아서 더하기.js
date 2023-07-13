function solution(numbers) {
    var answer = [];
    const sorted = numbers.sort((a, b) => a - b)
    // 완전탐색
    for (let i = 0; i < sorted.length; i++){
        for(let j = i + 1; j < sorted.length; j++){
            const sum = sorted[i] + sorted[j]
            if (!answer.includes(sum)){
                answer.push(sum)
            }
        }
    }
    return answer.sort((a, b) => a - b);
}