function solution(n) {
    let answer;
    if (n <= 7) {
        answer = 1
    } else if (n % 7 === 0){ // 나머지가 0이라면
        answer = n / 7 
    } else {
        answer = parseInt(n / 7) + 1 
    }
    return answer;
}