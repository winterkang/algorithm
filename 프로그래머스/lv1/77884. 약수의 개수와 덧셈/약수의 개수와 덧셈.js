function solution(left, right) {
    let answer = 0
    // left부터 right까지 각 수의 약수의 개수를 구하기
    for (let i = left; i <= right; i++){
        let cnt = 0 // 초기화
        // 약수의 개수를 구하기
        for (let j = 1; j <= i; j++){
            if (i % j === 0){
                cnt += 1  
            }
        }
        // 짝수/홀수 판별해서 덧셈/뺄셈 수행
        if (cnt % 2 === 0){
            answer += i
        }else{
            answer -= i
        }
    }
    return answer;
}