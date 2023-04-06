function solution(i, j, k) {
    let answer = 0;
    const kStr = k.toString()
    for (let start = i; start <= j; start++){
        const numStr = start.toString().split('')
        for (num of numStr){
            if (num === kStr){
                answer += 1
            }
        }
    }
    return answer;
}