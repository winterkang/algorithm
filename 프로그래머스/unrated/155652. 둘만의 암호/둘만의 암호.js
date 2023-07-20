function solution(s, skip, index) {
    let alpha = []
    for (let i = 97; i < 123; i++){
        if (!skip.includes(String.fromCodePoint(i))){
            alpha.push(String.fromCodePoint(i))
        }
    }
    let result = ''
    for (let i = 0; i < s.length; i++){
        const idx = alpha.indexOf(s[i])
        // 인덱스가 배열을 벗어날 경우를 대비해 나머지로 인덱스 찾기
        result += alpha[(idx + index) % alpha.length]
    }
    return result;
}