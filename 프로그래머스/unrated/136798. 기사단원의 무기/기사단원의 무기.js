function solution(number, limit, power) {
    let divisor = [] // 1부터 number까지 각 숫자의 약수의 개수를 구한 배열
    for (let i = 1; i <= number; i++){
        let cnt = 0 // 해당 i의 약수의 개수
        for (let j = 1; j <= Math.sqrt(i); j++){ // 시간초과 방지를 위해서 i제곱근까지 반복
            if (i % j === 0){ // 나누어 떨어져도 약수
                cnt++
                // 나눈 값이 j가 아니어도 약수
                if (i / j !== j){ // i = 16, j = 4일때, 4가 중복으로 들어가면 안되니까 그 부분 방지
                    cnt++
                }
            }
        }
        divisor.push(cnt)
    
    }
    // divisor의 요소가 limit을 넘으면 power로 바꾸기
    for (let i = 0; i < divisor.length; i++){
        if (divisor[i] > limit){
            divisor[i] = power
        }
    }
    // divisor의 총합
    const sum = divisor.reduce((acc, cur) => acc + cur, 0)
    return sum;
}