function solution(array) {
    var answer = 0;
    const arr = array.map((x) => x.toString().split('')).flat()
    answer = arr.filter(x => x === '7')
    
    return answer.length;
}