function solution(A,B){
    var answer = 0;

    const a = A.sort((a, b) => a - b) // 오름차순
    const b = B.sort((a, b) => b - a) // 내림차순
    for (let i = 0; i < a.length; i++){
        answer += a[i] * b[i]
    }
    return answer;
}