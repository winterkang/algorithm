function solution(num, k) {
    let answer;
    const numlist = num.toString().split("")
    const kStr = k.toString()
    for (n of numlist){
        if (n === kStr){
            answer = numlist.indexOf(n) + 1
            break
        }
     }
    if (answer === undefined){
            answer = -1
    }
    return answer;
}