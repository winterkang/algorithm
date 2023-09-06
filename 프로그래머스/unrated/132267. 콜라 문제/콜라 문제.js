function solution(a, b, n) {
    var answer = 0;
    let emptyBottles = n
    while(emptyBottles >= a){
        const exchange = Math.floor(emptyBottles / a) * b
        answer += exchange
        emptyBottles = exchange + (emptyBottles % a)
    }
    
    return answer;
}