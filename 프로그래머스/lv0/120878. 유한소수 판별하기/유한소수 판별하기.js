function solution(a, b) {
    // 최대공약수
    let aNum = a
    let bNum = b
    let res = 0
    while(bNum !== 0){
        res = aNum % bNum
        aNum = bNum
        bNum = res
    }
    // 기약분수
    let arr = [a / aNum, b / aNum]
    
    let sec = arr[1]
    let cnt = 2
    let factors = []
    while(sec > 1){
        if(sec % cnt === 0){
            factors.push(cnt)
            sec /= cnt
        }else{
            cnt++
        }
    }
    // console.log(arr)
    // console.log(factors)
    if (factors.every(item => item === 2 || item === 5)){
        return 1
    } return 2
}
// console.log(solution(25, 30))
// console.log(solution(3, 18))