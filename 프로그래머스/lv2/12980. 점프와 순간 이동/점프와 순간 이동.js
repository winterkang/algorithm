function solution(n){
    let num = n
    let jump = 0
    while(num !== 0){
        if (num % 2 !== 0){
            num--
            jump++
        }
        num = num / 2 
    }
    return jump;
}