function solution(my_string, m, c) {
    var answer = '';
    let arr = []
    let a = 0
    let b = m
    for (let i = 0; i < my_string.length; i += m){
        answer += my_string.slice(a, b)[c - 1]
        a += m
        b += m
    }
    return answer;
}