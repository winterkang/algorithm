function solution(num_list, n) {
    var answer = [];
    answer.push(...num_list.slice(n, num_list.length))
    answer.push(...num_list.slice(0, n))
    return answer;
}