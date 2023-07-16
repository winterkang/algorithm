function solution(d, budget) {
    d.sort((a, b) => a - b)
    let cnt = 0
    for (let i = 0; i < d.length; i++){
        if (budget >= d[i]){
            // console.log(`budget이 d[i]보다 크거나 같으면 중단: budget : ${budget}, d[i] :${d[i]}`)
            budget -= d[i]
            cnt++
        }else{
            break
        }
    }
    return cnt
}