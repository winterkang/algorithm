function solution(my_string) {
    var answer = [];
    answer = my_string.trim().split(' ').filter(x => x !== '')
    return answer;
}