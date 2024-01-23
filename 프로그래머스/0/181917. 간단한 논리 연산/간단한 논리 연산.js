function solution(x1, x2, x3, x4) {
    var answer = true;
    if (x1 + x2 !== 0){
        answer = true
    }
    if (x3 + x4 !== 0){
        answer = true
    }
    if (x1 + x2 === 0 || x3 + x4 === 0){
        answer = false
    }
    return answer;
}