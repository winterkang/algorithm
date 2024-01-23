function solution(n) {
    var answer = '';
    const str = '수박'
    answer = str.repeat(Math.round(n / 2))
    return answer.slice(0, n);
}