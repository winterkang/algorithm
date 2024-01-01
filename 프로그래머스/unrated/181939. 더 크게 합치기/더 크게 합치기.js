function solution(a, b) {
    var answer = 0;
    const strA = a.toString()
    const strB = b.toString()
    const ab = Number(strA + strB)
    const ba = Number(strB + strA)
    if (ab === ba){
        answer = ab
    }else{
        answer = Math.max(ab, ba)
    }
    return answer;
}