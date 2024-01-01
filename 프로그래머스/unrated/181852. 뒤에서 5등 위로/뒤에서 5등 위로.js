function solution(num_list) {
    var answer = [];
    const sorted = num_list.sort((a, b) => a - b)
    answer = sorted.slice(5)
    return answer;
}