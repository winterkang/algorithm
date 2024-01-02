function solution(array) {
    var answer = [];
    const sorted = array.slice().sort((a, b) => a - b)
    const maxNum = sorted[sorted.length-1]
    const maxIndex = array.indexOf(maxNum)
    answer = [maxNum, maxIndex]
    return answer;
}