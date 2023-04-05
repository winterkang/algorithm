function solution(n, t) {
    let total = n;
    // 초기 n값에서 x2 하는데 n값을 n*2로 갱신
    for (let i = 0; i < t; i++){
        total = total * 2
    }
    return total;
}