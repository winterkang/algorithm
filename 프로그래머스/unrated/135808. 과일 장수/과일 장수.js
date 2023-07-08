function solution(k, m, score) {
    const sorted = score.sort((a, b) => b - a)
    let array = []
    for (let i = 0; i < sorted.length; i += m){
        if (sorted[i] <= k){
            const chunk = sorted.slice(i, i + m) 
            array.push(chunk)
        }
    }
    // 가장 작은 수 * 배열의 길이 * 배열의 전체 길이
    const filtering = array.filter(item => item.length === m) 
    var answer = 0
    for (let i = 0; i < filtering.length; i++){
        let profit = Math.min(...filtering[i]) * m
        answer += profit
    }
    return answer;
}