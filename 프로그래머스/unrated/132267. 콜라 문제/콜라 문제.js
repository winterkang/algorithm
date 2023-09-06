function solution(a, b, n) {
    let answer = 0;
    let emptyBottles = n;  // 처음에는 가지고 있는 빈 병의 수가 n

    while (emptyBottles >= a) { // 가지고 있는 빈 병의 수가 a보다 큰 경우에만 반복
        // a개의 빈 병을 가져다주면 b개의 콜라를 받는다.
        const exchangedCola = Math.floor(emptyBottles / a) * b;  
        answer += exchangedCola;  // 받은 콜라 수를 누적
        emptyBottles = exchangedCola + (emptyBottles % a);  // 남은 빈 병 수를 갱신
    }
    return answer;
}
