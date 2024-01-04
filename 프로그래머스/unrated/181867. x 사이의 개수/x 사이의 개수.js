function solution(myString) {
    var answer = [];
    const arr = myString.split('x')
    answer = arr.map(x => x.length)
    return answer;
}