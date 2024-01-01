function solution(array, height) {
    var answer = 0;
    answer = array.filter(arr => arr > height).length
    return answer;
}