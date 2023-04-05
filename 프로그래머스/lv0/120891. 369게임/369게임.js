function solution(order) {
    let answer = 0;
    const strOrder = order.toString().split('')// 문자열리스트로 바꾸고
    for (str of strOrder){
        if (str === '3'){
            answer += 1
        }else if (str === '6'){
            answer += 1
        }else if (str === '9'){
            answer += 1
        }
    }
    
    return answer;
}