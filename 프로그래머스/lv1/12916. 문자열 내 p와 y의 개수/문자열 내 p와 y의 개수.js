function solution(s){
    var answer = true;
    let p = 0
    let y = 0
    // 전부 소문자로 바꾸고 비교
    const sLower = s.toLowerCase()
    for (sl of sLower){
        if (sl === 'p'){
            p += 1
        }else if (sl === 'y'){
            y += 1
        }
    }
    if (p === y){
        answer
    }else{
        answer = false
    }
    return answer;
}