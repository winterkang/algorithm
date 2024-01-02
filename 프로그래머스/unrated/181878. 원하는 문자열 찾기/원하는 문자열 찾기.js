function solution(myString, pat) {
    var answer = 0;
    const strLow = myString.toLowerCase()
    const patLow = pat.toLowerCase()
    if (strLow.includes(patLow)){
        answer = 1
    }else{
        answer = 0
    }
    return answer;
}