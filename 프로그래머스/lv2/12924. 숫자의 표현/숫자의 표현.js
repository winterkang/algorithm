function solution(n) {
    let cnt = 0
    let sum = 0
    let start = 1
    let end = 1
    while(start <= n){
        if (sum < n){ // sum이 n보다 작을 때
            sum += end // sum에 end 더하고
            end++ // end에 +1: 끝점을 한 칸 앞으로
        }else if (sum === n){ // sum과 n이 같을 때
            cnt++ // 카운트 +1
            sum -= start // sum에서 start값을 빼기
            start++ // start += 1: 시작점을 한 칸 앞으로
        }else{ // sum > n
            sum -= start // sum이 n보다 클 때
            start++ // start += 1: 시작점을 한 칸 앞으로
        }
    }
    return cnt
}