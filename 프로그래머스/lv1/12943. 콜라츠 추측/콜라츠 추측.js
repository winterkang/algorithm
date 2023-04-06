function solution(num) {
    let result = num
    let cnt = 0
    while (result !== 1){
        if (result % 2 === 0){ // 짝수라면 num / 2
            result = result / 2
            cnt += 1 // 반복 1회 당 1회 카운트
        }else{ // 홀수라면 num * 3 + 1
            result = (result * 3) + 1
            cnt += 1 // 반복 1회 당 1회 카운트
        }
        if (cnt === 500 && result !== 1){
                cnt = -1 
                break
            }
        }
    if (num === 1) return 0 // 주어진 수가 1이라면 0
    else return cnt;
}