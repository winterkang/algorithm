function solution(s) {
    var answer;
    const arr = s.split('').filter(x => !isNaN(Number(x)))
    if (s.length === 4 || s.length === 6){
        if (s.length === arr.length){
            answer = true
        }else{
            answer = false
        }
    }else{
        answer = false
    }
    return answer;
}