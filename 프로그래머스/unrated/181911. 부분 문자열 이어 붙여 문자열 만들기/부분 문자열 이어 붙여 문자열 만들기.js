function solution(my_strings, parts) {
    var answer = '';
    for (let i = 0; i < parts.length; i++){
        const [x, y] = parts[i]
        answer += my_strings[i].slice(x, y + 1)
    }
    return answer;
}