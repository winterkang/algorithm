function solution(s) {
    var answer = '';
    let capitalizeNext = true
    for (let i = 0; i < s.length; i++){
        const char = s[i]
        if (char === ' '){
            answer += ' '
            capitalizeNext = true
        }else if (capitalizeNext){
            answer += char.toUpperCase()
            capitalizeNext = false
        }else{
            answer += char.toLowerCase()
        }
    }
    return answer;
}