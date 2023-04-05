function solution(array) {
    var answer = [];
    const max = Math.max(...array)
    answer.push(max)
    const index = array.indexOf(max)
    answer.push(index)
    return answer;
}