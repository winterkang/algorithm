function solution(n) {
    // 길이가 n만큼 요소를 생성하고 true로 채우기 
    const isPrime = Array(n + 1).fill(true)
    // 0과 1은 소수가 아니기 때문에 false로 바꾸기
    isPrime[0] = isPrime[1] = false
    console.log(isPrime)
    // 소수 판별
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(isPrime[i]){ // true인 경우만 (0과 1을 제외한 모든 수)
            // i가 3인 경우, i의 배수인 6, 9, 12, 15 ... 중 2의 배수인 수들은 이전에 제거가 되었다
            for (let j = i * i; j <= n; j += i){ // 
                isPrime[j] = false
            }
        }
    }
    // true인 경우만 필터링
    let cnt = isPrime.filter(item => item).length
    return cnt
}