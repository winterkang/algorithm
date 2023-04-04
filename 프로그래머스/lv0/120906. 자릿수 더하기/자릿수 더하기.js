function solution(n) {
    let total = 0;
    while (n > 0){
        total += (n % 10)
        // n 값을 갱신시켜줘야함
        n = parseInt(n / 10) // 10으로 나눈 정수 반환
    }
    return total;
}