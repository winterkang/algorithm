function solution(num_str) {
    var answer = 0;
    const arr = num_str.split('').map(x => parseInt(x))
    answer = arr.reduce((acc, cur) => acc + cur, 0)
    return answer;
}