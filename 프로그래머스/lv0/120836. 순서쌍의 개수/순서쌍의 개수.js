function solution(n) {
    // 1부터 n까지 n으로 나누었을 때 나머지가 0이면 +1
    let answer = 0;
    for (let i = 1; i <= n; i++){
        if (n % i === 0){ 
            answer += 1
        }
    }
    return answer;
}