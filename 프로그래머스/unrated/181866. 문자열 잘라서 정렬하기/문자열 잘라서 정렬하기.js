function solution(myString) {
    var answer = [];
    answer = myString.split('x').sort().filter(x => x !== '')

    return answer;
}