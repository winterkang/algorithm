function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++){
        if (i % 5 === 0){
            const arr = String(i).split('')
            if (arr.includes('5') || arr.includes('0')){
                if(!arr.some(num => num !== '5' && num !== '0')){ // 조건을 만족하지 않으면
                     answer.push(i)    // push
                }
            }
        }
    }
    if (answer.length === 0){
        return [-1]
    }else{
        return answer
    }
}