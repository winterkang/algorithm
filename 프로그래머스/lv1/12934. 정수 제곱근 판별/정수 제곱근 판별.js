function solution(n) {
    let num = 0
    while (n !== num * num){ // n과 num의 제곱근이 다르면 반복 시작
        for (let i = 1; i <= n; i++){
            if (i * i === n){
                num = i
                break
               }
            }
        if (num === 0){
            return -1
        }
    }
    return (num+1) ** 2;
}