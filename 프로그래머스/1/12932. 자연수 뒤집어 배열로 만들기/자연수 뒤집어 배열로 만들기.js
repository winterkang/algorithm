function solution(n) {
    var answer = [];
    const str = n.toString().split('').reverse()
    answer = str.map(x => parseInt(x))
    return answer;
}