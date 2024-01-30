function solution(s) {
    var answer = '';
    const arr = s.split(' ').map(x => Number(x)).sort((a, b) => a - b)
    answer = `${arr[0]} ${arr[arr.length - 1]}`
    return answer;
}