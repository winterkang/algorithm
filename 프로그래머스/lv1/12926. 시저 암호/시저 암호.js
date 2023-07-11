function solution(s, n) {
    let lowerAlpha = []
    for (let i = 97; i <= 122; i++){
        lowerAlpha.push(String.fromCharCode(i))
    }
    
    let upperAlpha = []
    for (let i = 65; i <= 90; i++){
        upperAlpha.push(String.fromCharCode(i))
    }
    
    var answer = '';
    for (let i = 0; i < s.length; i++){
        if (s[i] === ' '){ // 공백인 경우
            answer += ' '
        }else if (s[i] === s[i].toUpperCase()){ // 대문자인 경우
            const index = upperAlpha.indexOf(s[i])
            if (index + n >= upperAlpha.length){ // 인덱스를 벗어난 경우
                answer += upperAlpha[(index + n) - upperAlpha.length]
            }else{
                answer += upperAlpha[index + n]
            }
        }else{ // 소문자인 경우
            const index = lowerAlpha.indexOf(s[i])
            if (index + n >= lowerAlpha.length){ // 인덱스를 벗어난 경우
                answer += lowerAlpha[(index + n) - lowerAlpha.length]
            }else{
                answer += lowerAlpha[index + n]
            }
        }
    }
    return answer;
}